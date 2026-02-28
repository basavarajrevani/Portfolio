// Enhanced Portfolio Animations and Interactive Effects
// Based on the memory specifications for dynamic, engaging web experience

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all enhanced features
    initializeLoadingAnimation();
    initializeScrollProgress();
    initializeParticleSystem();
    initializeFloatingShapes();
    initializeCursorEffects();
    initializeScrollAnimations();
    initializeMagneticButtons();
    initializeGlitchEffects();
    initializeIntersectionObserver();
    initializePageTransitions();
    
    console.log('🚀 Enhanced Portfolio Animations Loaded Successfully!');
});

// Scroll Progress Bar
function initializeScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress-bar';
    document.body.appendChild(progressBar);

    const progressCSS = `
        .scroll-progress-bar {
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 4px;
            background: linear-gradient(90deg, var(--neon-primary), var(--neon-secondary));
            z-index: 10001;
            transition: width 0.1s ease-out;
            box-shadow: 0 0 10px var(--neon-primary);
        }
    `;
    const style = document.createElement('style');
    style.textContent = progressCSS;
    document.head.appendChild(style);

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
    });
}

// Dynamic Particle System
function initializeParticleSystem() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.id = 'particlesContainer';
    document.body.appendChild(particlesContainer);

    const particleCSS = `
        .particles-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            overflow: hidden;
        }
        
        .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: var(--neon-primary);
            border-radius: 50%;
            opacity: 0.6;
            animation: particleFloat 20s infinite linear;
        }
        
        @keyframes particleFloat {
            0% {
                transform: translateY(100vh) translateX(0px);
                opacity: 0;
            }
            10% {
                opacity: 0.6;
            }
            90% {
                opacity: 0.6;
            }
            100% {
                transform: translateY(-100px) translateX(100px);
                opacity: 0;
            }
        }
    `;
    
    const style = document.createElement('style');
    style.textContent = particleCSS;
    document.head.appendChild(style);

    // Create particles
    const particleCount = window.innerWidth < 768 ? 20 : 50;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random starting position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        
        // Random size variation
        const size = Math.random() * 3 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        particlesContainer.appendChild(particle);
        
        // Remove and recreate particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
                createParticle();
            }
        }, (Math.random() * 10 + 15) * 1000);
    }
}

// Floating Geometric Shapes
function initializeFloatingShapes() {
    const shapesContainer = document.createElement('div');
    shapesContainer.className = 'floating-shapes';
    document.body.appendChild(shapesContainer);

    // Create 3 floating shapes
    for (let i = 0; i < 3; i++) {
        const shape = document.createElement('div');
        shape.className = 'floating-shape';
        shapesContainer.appendChild(shape);
    }
}

// Custom Cursor with Follower Effect
function initializeCursorEffects() {
    if (window.innerWidth <= 768) return; // Skip on mobile devices

    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    cursor.id = 'cursor';
    
    const cursorFollower = document.createElement('div');
    cursorFollower.className = 'cursor-follower';
    cursorFollower.id = 'cursorFollower';
    
    document.body.appendChild(cursor);
    document.body.appendChild(cursorFollower);

    const cursorCSS = `
        .cursor, .cursor-follower {
            position: fixed;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            mix-blend-mode: difference;
        }
        
        .cursor {
            width: 10px;
            height: 10px;
            background: var(--neon-primary);
            transition: transform 0.1s ease;
        }
        
        .cursor-follower {
            width: 30px;
            height: 30px;
            border: 2px solid var(--neon-primary);
            transition: all 0.3s ease;
            opacity: 0.8;
        }
        
        .cursor.hover {
            transform: scale(1.5);
        }
        
        .cursor-follower.hover {
            transform: scale(1.5);
            border-color: var(--neon-secondary);
        }
    `;
    
    const style = document.createElement('style');
    style.textContent = cursorCSS;
    document.head.appendChild(style);

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    // Smooth follower animation
    function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        cursorFollower.style.left = followerX - 15 + 'px';
        cursorFollower.style.top = followerY - 15 + 'px';
        
        requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Hover effects
    const interactiveElements = document.querySelectorAll('a, button, .tool-item, .project-card, .nav-item');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            cursorFollower.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            cursorFollower.classList.remove('hover');
        });
    });
}

// Advanced Scroll Animations
function initializeScrollAnimations() {
    const scrollCSS = `
        .scroll-reveal {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .scroll-reveal.revealed {
            opacity: 1;
            transform: translateY(0);
        }
        
        .scroll-reveal-left {
            opacity: 0;
            transform: translateX(-50px);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .scroll-reveal-left.revealed {
            opacity: 1;
            transform: translateX(0);
        }
        
        .scroll-reveal-right {
            opacity: 0;
            transform: translateX(50px);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .scroll-reveal-right.revealed {
            opacity: 1;
            transform: translateX(0);
        }
        
        .scroll-reveal-scale {
            opacity: 0;
            transform: scale(0.8);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .scroll-reveal-scale.revealed {
            opacity: 1;
            transform: scale(1);
        }
    `;
    
    const style = document.createElement('style');
    style.textContent = scrollCSS;
    document.head.appendChild(style);

    // Add scroll reveal classes to elements
    const elements = document.querySelectorAll('.education-card, .project-card, .tool-item, .course-card');
    elements.forEach((el, index) => {
        const classes = ['scroll-reveal', 'scroll-reveal-left', 'scroll-reveal-right', 'scroll-reveal-scale'];
        el.classList.add(classes[index % classes.length]);
    });
}

// Magnetic Button Effects
function initializeMagneticButtons() {
    const magneticElements = document.querySelectorAll('.social-icon, .theme-btn, .project-link');
    
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const strength = 0.3;
            el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'translate(0, 0)';
        });
    });
}

// Enhanced Glitch Effects
function initializeGlitchEffects() {
    const glitchElements = document.querySelectorAll('.glitch');
    
    glitchElements.forEach(el => {
        setInterval(() => {
            if (Math.random() < 0.1) { // 10% chance every interval
                el.style.animation = 'none';
                setTimeout(() => {
                    el.style.animation = '';
                }, 100);
            }
        }, 3000);
    });
}

// Enhanced Intersection Observer
function initializeIntersectionObserver() {
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '-50px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // Special effects for specific elements
                if (entry.target.classList.contains('tool-item')) {
                    // Stagger animation for tool items
                    const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
                    setTimeout(() => {
                        entry.target.style.animationDelay = '0s';
                    }, delay);
                }
                
                // Unobserve after revealing
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all scroll reveal elements
    const scrollElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');
    scrollElements.forEach(el => observer.observe(el));
}

// Page Transition Effects
function initializePageTransitions() {
    // Smooth page transitions for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                // Add transition effect
                target.style.transition = 'all 0.5s ease';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Performance optimizations
function checkPerformance() {
    // Reduce animations on low-end devices
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        document.body.classList.add('reduced-motion');
        
        const reducedMotionCSS = `
            .reduced-motion * {
                animation-duration: 0.3s !important;
                transition-duration: 0.2s !important;
            }
            
            .reduced-motion .particles-container,
            .reduced-motion .floating-shapes {
                display: none !important;
            }
        `;
        
        const style = document.createElement('style');
        style.textContent = reducedMotionCSS;
        document.head.appendChild(style);
    }
}

// Respect user's motion preferences
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.body.classList.add('prefers-reduced-motion');
    
    const prefersReducedMotionCSS = `
        .prefers-reduced-motion * {
            animation: none !important;
            transition: none !important;
        }
        
        .prefers-reduced-motion .particles-container,
        .prefers-reduced-motion .floating-shapes,
        .prefers-reduced-motion .cursor,
        .prefers-reduced-motion .cursor-follower {
            display: none !important;
        }
    `;
    
    const style = document.createElement('style');
    style.textContent = prefersReducedMotionCSS;
    document.head.appendChild(style);
}

// Initialize performance check
checkPerformance();

// Throttled scroll event for better performance
let ticking = false;

function updateScrollEffects() {
    // Add any scroll-based effects here
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
    }
});

// Export functions for potential external use
window.PortfolioAnimations = {
    initializeParticleSystem,
    initializeFloatingShapes,
    initializeCursorEffects,
    initializeScrollAnimations,
    initializeMagneticButtons
};