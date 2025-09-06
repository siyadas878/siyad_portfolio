// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize all website functionality
function initializeWebsite() {
    setupNavigation();
    setupScrollEffects();
    setupAnimations();
    setupContactForm();
    setupProgressBar();
    setupMobileOptimizations();
}

// Navigation functionality
function setupNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    // Mobile menu toggle
    hamburger?.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu?.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !hamburger?.contains(e.target)) {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 70;
                const elementPosition = target.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background on scroll
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (navbar) {
            if (currentScrollY > 50) {
                navbar.style.background = 'rgba(10, 10, 10, 0.98)';
                navbar.style.backdropFilter = 'blur(20px)';
            } else {
                navbar.style.background = 'rgba(10, 10, 10, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            }

            // Hide/show navbar on scroll (mobile)
            if (window.innerWidth <= 768) {
                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    navbar.style.transform = 'translateY(-100%)';
                } else {
                    navbar.style.transform = 'translateY(0)';
                }
            }
        }
        
        lastScrollY = currentScrollY;
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Scroll effects and animations
function setupScrollEffects() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.skill-category, .timeline-item, .project-card, .contact-item'
    );
    
    animatedElements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });

    // Parallax effect for floating elements
    const floatingElements = document.querySelectorAll('.floating-element');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.2;

        floatingElements.forEach((element, index) => {
            const speed = 0.3 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Animation setup
function setupAnimations() {
    // Skill items hover effect with improved performance
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            if (window.innerWidth > 768) {
                this.style.transform = 'scale(1.05) rotateY(5deg)';
            }
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotateY(0deg)';
        });
    });

    // Project card tilt effect (desktop only)
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            if (window.innerWidth <= 768) return;

            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;

            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
    });

    // Typing animation for hero title (on mobile only for performance)
    if (window.innerWidth <= 768) {
        const titleLines = document.querySelectorAll('.title-line');
        titleLines.forEach((line, index) => {
            line.style.animationDelay = `${index * 0.3}s`;
        });
    }
}

// Contact form functionality
function setupContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (!contactForm) return;

    // Form validation
    const inputs = contactForm.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });

        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });

    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (!isValid) return;

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        submitForm(data, contactForm);
    });

    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;

        // Remove existing error styling
        field.classList.remove('error');
        const existingError = field.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        // Validation rules
        if (!value) {
            showFieldError(field, 'This field is required');
            isValid = false;
        } else if (field.type === 'email' && !isValidEmail(value)) {
            showFieldError(field, 'Please enter a valid email address');
            isValid = false;
        } else if (field.name === 'name' && value.length < 2) {
            showFieldError(field, 'Name must be at least 2 characters long');
            isValid = false;
        } else if (field.name === 'message' && value.length < 10) {
            showFieldError(field, 'Message must be at least 10 characters long');
            isValid = false;
        }

        return isValid;
    }

    function showFieldError(field, message) {
        field.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.cssText = `
            color: #ff6b6b;
            font-size: 0.8rem;
            margin-top: 0.5rem;
        `;
        errorDiv.textContent = message;
        field.parentNode.appendChild(errorDiv);
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function submitForm(data, form) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';

        // Simulate form submission
        setTimeout(() => {
            showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
        }, 2000);
    }
}

// Progress bar functionality
function setupProgressBar() {
    const progressBar = document.querySelector('.scroll-progress');
    
    if (!progressBar) return;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Mobile optimizations
function setupMobileOptimizations() {
    // Touch event optimizations
    let touchStartY = 0;
    let touchEndY = 0;

    document.addEventListener('touchstart', function(e) {
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    document.addEventListener('touchend', function(e) {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartY - touchEndY;

        // Close mobile menu on swipe up
        if (diff > swipeThreshold) {
            const navMenu = document.querySelector('.nav-menu');
            const hamburger = document.querySelector('.hamburger');
            
            if (navMenu?.classList.contains('active')) {
                hamburger?.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    }

    // Optimize animations for mobile
    if (window.innerWidth <= 768) {
        // Reduce animation complexity on mobile
        const floatingElements = document.querySelectorAll('.floating-element');
        floatingElements.forEach(element => {
            element.style.animationDuration = '8s';
        });

        // Disable tilt effects on mobile
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.style.transform = 'none';
        });
    }

    // Handle orientation changes
    window.addEventListener('orientationchange', function() {
        setTimeout(() => {
            // Recalculate heights and positions after orientation change
            window.scrollTo(0, window.scrollY);
        }, 500);
    });

    // Viewport height fix for mobile browsers
    function setViewportHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', () => {
        setTimeout(setViewportHeight, 500);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    notification.textContent = message;

    // Add to DOM
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);

    // Click to dismiss
    notification.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
}

// Performance optimizations
function optimizePerformance() {
    // Lazy loading for images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Throttle scroll events
    let scrollTimeout;
    const originalScrollHandler = window.onscroll;
    
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = requestAnimationFrame(function() {
            if (originalScrollHandler) {
                originalScrollHandler();
            }
        });
    }, { passive: true });
}

// Resize handler
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Recalculate animations and layouts after resize
        const floatingElements = document.querySelectorAll('.floating-element');
        if (window.innerWidth <= 768) {
            floatingElements.forEach(element => {
                element.style.display = window.innerWidth <= 480 ? 'none' : 'flex';
            });
        } else {
            floatingElements.forEach(element => {
                element.style.display = 'flex';
            });
        }

        // Reset any transforms that might be stuck
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            if (window.innerWidth <= 768) {
                card.style.transform = 'none';
            }
        });
    }, 250);
});

// Loading optimization
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Initialize performance optimizations after load
    setTimeout(optimizePerformance, 1000);
    
    // Preload critical images
    const criticalImages = [
        'assets/pro.jpeg',
        'assets/byteflow.jpg',
        'assets/course-connect.jpg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
});

// Add CSS for error states
const errorStyles = document.createElement('style');
errorStyles.textContent = `
    .form-group input.error,
    .form-group textarea.error {
        border-color: #ff6b6b;
        box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);
    }
    
    .error-message {
        color: #ff6b6b;
        font-size: 0.8rem;
        margin-top: 0.5rem;
        animation: slideDown 0.3s ease;
    }
    
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    /* Mobile viewport height fix */
    .hero {
        min-height: calc(var(--vh, 1vh) * 100);
    }
    
    /* Improved mobile navigation */
    @media (max-width: 768px) {
        .navbar {
            transition: transform 0.3s ease, background-color 0.3s ease;
        }
        
        .nav-menu {
            max-height: calc(100vh - 60px);
            overflow-y: auto;
        }
        
        .nav-menu.active {
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
    }
    
    /* Better touch targets */
    @media (hover: none) and (pointer: coarse) {
        .btn,
        .social-link,
        .project-link,
        .nav-link {
            min-height: 44px;
            min-width: 44px;
        }
        
        .skill-item {
            padding: 1.5rem 1rem;
        }
    }
    
    /* Reduce motion for users who prefer it */
    @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
        
        .floating-element {
            animation: none !important;
        }
        
        .profile-glow {
            animation: none !important;
        }
    }
`;

document.head.appendChild(errorStyles);