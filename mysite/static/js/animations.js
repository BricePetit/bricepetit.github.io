// Global animations for the website.
document.addEventListener('DOMContentLoaded', function() {
    // Initial delay for the hero section animation.
    const isHomePage = document.querySelector('.hero-section') !== null;
    // 2.5s delay on the home page, no delay on other pages.
    const initialDelay = isHomePage ? 2500 : 0;
    // Configuration of the Intersection Observer.
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Apply the initial delay only on the home page.
                const baseDelay = isHomePage ? initialDelay : 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    // Animation for metrics section.
                    if (entry.target.classList.contains('metrics-section')) {
                        const metrics = entry.target.querySelectorAll('.metric-item');
                        metrics.forEach((metric, index) => {
                            setTimeout(() => {
                                metric.classList.add('visible');
                            }, index * 150);
                        });
                    }
                    // Animation for fade-in elements.
                    if (entry.target.classList.contains('fade-in')) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                    // Animation for enhanced cards.
                    if (entry.target.classList.contains('enhanced-card')) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                    // Animation for timeline items.
                    if (entry.target.classList.contains('timeline-item')) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateX(0)';
                    }
                    // Animation for skill cards.
                    if (entry.target.classList.contains('skill-card')) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                    // Animation for project cards.
                    if (entry.target.classList.contains('project-card')) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                    // Animation for academic items.
                    if (entry.target.classList.contains('academic-item')) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                }, baseDelay);
            }
        });
    }, observerOptions);
    // Observe all elements with specific classes for animations.
    const elementsToAnimate = [
        '.fade-in',
        '.enhanced-card',
        '.metrics-section',
        '.timeline-item',
        '.skill-card',
        '.project-card',
        '.level-item',
        '.academic-item'
    ];
    elementsToAnimate.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            observer.observe(el);
        });
    });
    // Animation for the scroll indicator button.
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const target = document.querySelector('.metrics-section') || 
                          document.querySelector('.enhanced-card') ||
                          document.querySelector('.academic-container') ||
                          document.querySelector('main');
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
    // Initial spawning animation for visible elements.
    setTimeout(() => {
        const visibleElements = document.querySelectorAll('.fade-in, .enhanced-card');
        visibleElements.forEach((el, index) => {
            // Do not animate elements inside .metrics-section.
            if (!el.closest('.metrics-section')) {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    setTimeout(() => {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            }
        });
    }, initialDelay + 100);
});

// Language selector for static site
document.addEventListener('DOMContentLoaded', function() {
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            const selectedLang = this.value;
            const currentPath = window.location.pathname;
            
            // Detect current language from URL or body data attribute
            let currentLang = document.body.getAttribute('data-current-lang') || 'fr';
            if (currentPath.startsWith('/en/')) {
                currentLang = 'en';
            } else if (currentPath.startsWith('/fr/')) {
                currentLang = 'fr';
            }
            
            // Don't reload if same language
            if (selectedLang === currentLang) {
                return;
            }
            
            // Construct new URL
            let newPath = currentPath;
            
            // Remove current language prefix if it exists
            if (currentPath.startsWith('/fr/')) {
                newPath = currentPath.substring(3);
            } else if (currentPath.startsWith('/en/')) {
                newPath = currentPath.substring(3);
            } else if (currentPath === '/fr' || currentPath === '/en') {
                newPath = '/';
            } else if (currentPath === '/') {
                newPath = '/';
            }
            
            // Add new language prefix
            newPath = '/' + selectedLang + newPath;
            
            // Handle root path
            if (newPath === '/fr' || newPath === '/en') {
                newPath += '/';
            }
            
            // Redirect to new URL
            window.location.href = newPath;
        });
        
        // Set correct selection based on current URL or body data
        const currentLang = document.body.getAttribute('data-current-lang') || 
                          (window.location.pathname.startsWith('/en/') ? 'en' : 'fr');
        languageSelect.value = currentLang;
    }
});
