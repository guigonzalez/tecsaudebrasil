// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        // Toggle mobile menu
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            navToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
            
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }

    // Update active navigation state based on current page
    updateActiveNavigation();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrolled = window.pageYOffset;
    
    if (scrolled > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = 'var(--white)';
        header.style.backdropFilter = 'none';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll(
        '.highlight-card, .stand-option, .benefit-item, .level-card, .stat-item, .detail-section'
    );
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// Counter animation for statistics
function animateCounter(element, target) {
    const increment = target / 100;
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toString().includes('+') ? target : target + (target === 100 ? '%' : '+');
            clearInterval(timer);
        } else {
            const value = Math.floor(current);
            element.textContent = value.toString() + (target === 100 ? '%' : '+');
        }
    }, 20);
}

// Animate counters when they come into view
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            const targetText = statNumber.textContent;
            const target = parseInt(targetText.replace(/[^0-9]/g, ''));
            
            statNumber.textContent = '0';
            setTimeout(() => {
                animateCounter(statNumber, target);
            }, 200);
            
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
        statsObserver.observe(item);
    });
});

// Add hover effects to cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.highlight-card, .stand-option, .benefit-item, .level-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Parallax effect removed for cleaner performance and simplified design

// Add loading animation
document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');
});

// CSS for loading animation (add this to the CSS)
const loadingStyles = `
    body {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
`;

// Add styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = loadingStyles;
document.head.appendChild(styleSheet);

// Add click tracking for analytics (placeholder)
function trackEvent(category, action, label) {
    // Replace with your analytics tracking code
    console.log('Event tracked:', { category, action, label });
}

// Track CTA clicks
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.btn');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            const section = this.closest('section')?.id || 'unknown';
            trackEvent('CTA', 'click', `${buttonText} - ${section}`);
        });
    });
});

// Form validation (if forms are added later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Lazy loading for images (if more images are added)
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Keyboard navigation improvements
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const navToggle = document.querySelector('.nav-toggle');
        
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    }
});

// Print styles optimization
window.addEventListener('beforeprint', function() {
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', function() {
    document.body.classList.remove('printing');
});

// Function to update active navigation based on current page
function updateActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        // Check if current link matches current page
        if (href === currentPage || 
            (currentPage === '' && href === 'index.html') ||
            (currentPage === 'index.html' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Enhanced card animations for multi-page layout
function initializeCardAnimations() {
    const cards = document.querySelectorAll(`
        .nav-card, .stat-card, .benefit-card, .stand-card, .speaker-card, 
        .level-card, .opportunity-card, .detail-card, .structure-card,
        .theme-category, .audience-card, .day-card
    `);
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('nav-card')) {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            }
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('nav-card')) {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
}

// Enhanced intersection observer for multi-page elements
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Elements to animate on scroll
    const animatedElements = document.querySelectorAll(`
        .nav-card, .stat-card, .benefit-card, .stand-card, .speaker-card, 
        .level-card, .opportunity-card, .detail-card, .structure-card,
        .theme-category, .audience-card, .day-card, .timeline-item,
        .feature-item, .service-item
    `);
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(element);
    });
}

// Initialize page-specific functionality
function initializePageSpecificFeatures() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Homepage specific
    if (currentPage === 'index.html' || currentPage === '') {
        initializeCounterAnimation();
    }
    
    // Expositores page specific
    if (currentPage === 'expositores.html') {
        initializeStandComparison();
    }
    
    // Patrocinadores page specific
    if (currentPage === 'patrocinadores.html') {
        initializeSponsorshipComparison();
    }
    
    // Sobre page specific
    if (currentPage === 'sobre.html') {
        initializeEventSchedule();
    }
    
    // Palestrantes page specific
    if (currentPage === 'palestrantes.html') {
        initializeSpeakersTabs();
    }
}

// Enhanced counter animation
function initializeCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    
    if (counters.length === 0) return;
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const originalText = counter.textContent;
                const target = parseInt(originalText.replace(/[^0-9]/g, ''));
                
                // Handle different types of numbers
                if (originalText.includes('+')) {
                    animateCounter(counter, target, '+');
                } else if (originalText.includes('%')) {
                    animateCounter(counter, target, '%');
                } else {
                    animateCounter(counter, target, '');
                }
                
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

// Enhanced counter animation function
function animateCounter(element, target, suffix = '+') {
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toString() + suffix;
            clearInterval(timer);
        } else {
            const value = Math.floor(current);
            element.textContent = value.toString() + suffix;
        }
    }, 16);
}

// Stand comparison functionality
function initializeStandComparison() {
    const standCards = document.querySelectorAll('.stand-card');
    
    standCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove previous selections
            standCards.forEach(c => c.classList.remove('selected'));
            // Add selection to current card
            this.classList.add('selected');
            
            // Scroll to CTA section
            setTimeout(() => {
                const ctaSection = document.querySelector('.cta-section');
                if (ctaSection) {
                    ctaSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        });
    });
}

// Sponsorship comparison functionality
function initializeSponsorshipComparison() {
    const levelCards = document.querySelectorAll('.level-card');
    
    levelCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove previous selections
            levelCards.forEach(c => c.classList.remove('selected'));
            // Add selection to current card
            this.classList.add('selected');
            
            // Highlight in comparison table if exists
            const level = this.classList.contains('level-diamond') ? 'diamond' :
                         this.classList.contains('level-gold') ? 'gold' : 'silver';
            
            const tableColumns = document.querySelectorAll(`.${level}`);
            tableColumns.forEach(col => {
                col.style.backgroundColor = 'rgba(43, 144, 171, 0.1)';
                setTimeout(() => {
                    col.style.backgroundColor = '';
                }, 2000);
            });
        });
    });
}

// Event schedule functionality
function initializeEventSchedule() {
    const dayCards = document.querySelectorAll('.day-card');
    
    dayCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        
        card.addEventListener('click', function() {
            // Toggle expanded state
            this.classList.toggle('expanded');
            
            // Add more details functionality here if needed
            console.log(`Clicked on day ${index + 1}`);
        });
    });
}

// Form validation enhancement
function validateForm(formElement) {
    let isValid = true;
    const inputs = formElement.querySelectorAll('input[required], textarea[required]');
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
        
        if (input.type === 'email' && input.value) {
            if (!validateEmail(input.value)) {
                input.classList.add('error');
                isValid = false;
            }
        }
    });
    
    return isValid;
}

// Enhanced page initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all animations and interactions
    initializeCardAnimations();
    initializeScrollAnimations();
    initializePageSpecificFeatures();
    
    // Add loading state
    document.body.classList.add('loaded');
    
    // Track page views (placeholder for analytics)
    trackPageView();
});

// Page view tracking
function trackPageView() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    trackEvent('PageView', 'view', currentPage);
}

// Speakers tabs functionality
function initializeSpeakersTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetArea = this.dataset.area;
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding content
            const targetContent = document.querySelector(`[data-content="${targetArea}"]`);
            if (targetContent) {
                targetContent.classList.add('active');
                
                // Animate cards entrance
                const cards = targetContent.querySelectorAll('.speaker-card');
                cards.forEach((card, index) => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    });
}

// Enhanced CSS animation styles
const additionalStyles = `
    .card.selected {
        transform: translateY(-10px) scale(1.05);
        border: 2px solid var(--primary-base); /* Clean selection border */
        border: 2px solid var(--primary-base);
    }
    
    .animate-in {
        animation: slideInUp 0.8s ease-out;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .error {
        border-color: var(--error-color) !important;
        border: 2px solid var(--error-color) !important; /* Clear error indication */
    }
    
    .day-card.expanded {
        transform: scale(1.05);
        z-index: 10;
    }
    
    /* Tab transition effects */
    .tab-content {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.3s ease, transform 0.3s ease;
    }
    
    .tab-content.active {
        opacity: 1;
        transform: translateY(0);
    }
`;

// Inject additional styles
const additionalStyleSheet = document.createElement('style');
additionalStyleSheet.textContent = additionalStyles;
document.head.appendChild(additionalStyleSheet);