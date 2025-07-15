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

// Dynamic translation for 404 page
const translations = {
    fr: {
        title: "Page Introuvable",
        description: "Désolé, la page que vous recherchez n'existe pas ou a été déplacée.",
        homeButton: "Retour à l'Accueil",
        skillsButton: "Voir mes Compétences",
        contactLink: "me contacter"
    },
    en: {
        title: "Page Not Found",
        description: "Sorry, the page you are looking for does not exist or has been moved.",
        homeButton: "Back to Home",
        skillsButton: "View my Skills",
        contactLink: "contact me"
    }
};

function translatePage(lang) {
    if (!translations[lang]) return;
    
    // Only apply translation if this is the 404 page
    if (!document.querySelector('.error-icon') && !window.location.pathname.includes('404')) {
        return;
    }
    
    const t = translations[lang];
    
    // Update page title in head
    const pageTitle = document.querySelector('title');
    if (pageTitle && pageTitle.textContent.includes('Introuvable')) {
        pageTitle.textContent = `${t.title} - Brice Petit`;
    }
    
    // Update page subtitle (only on 404 page)
    const pageSubtitle = document.querySelector('.page-subtitle');
    if (pageSubtitle) {
        pageSubtitle.textContent = t.title;
    }
    
    // Update description (only on 404 page)
    const errorDescription = document.querySelector('.error-description');
    if (errorDescription) {
        errorDescription.textContent = t.description;
    }
    
    // Update home button (only on 404 page)
    const homeButton = document.querySelector('.cta-primary');
    if (homeButton) {
        homeButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                <path d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
            </svg>
            ${t.homeButton}
        `;
        homeButton.href = `/${lang}/`;
    }
    
    // Update skills button (only on 404 page)
    const skillsButton = document.querySelector('.cta-secondary');
    if (skillsButton) {
        skillsButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H6.5A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z"/>
            </svg>
            ${t.skillsButton}
        `;
        skillsButton.href = `/${lang}/skills/`;
    }
    
    // Update contact link in footer (only on 404 page)
    const contactLink = document.querySelector('a[href*="#contact"]');
    if (contactLink) {
        contactLink.textContent = t.contactLink;
    }
    
    // Update navigation links (only on 404 page)
    if (document.querySelector('.error-icon')) {
        const navigation = {
            fr: {
                skills: "Compétences",
                academic: "Académique", 
                education: "Formation & Expérience"
            },
            en: {
                skills: "Skills",
                academic: "Academic",
                education: "Education & Work Experience"
            }
        };
        
        const nav = navigation[lang];
        if (nav) {
            const skillsNav = document.querySelector('a[href*="/skills/"]');
            if (skillsNav) {
                skillsNav.textContent = nav.skills;
                skillsNav.href = `/${lang}/skills/`;
            }
            
            const academicNav = document.querySelector('a[href*="/academic/"]');
            if (academicNav) {
                academicNav.textContent = nav.academic;
                academicNav.href = `/${lang}/academic/`;
            }
            
            const educationNav = document.querySelector('a[href*="/education/"]');
            if (educationNav) {
                educationNav.textContent = nav.education;
                educationNav.href = `/${lang}/education/`;
            }
            
            const homeNav = document.querySelector('a[href*="/fr/"], a[href*="/en/"]');
            if (homeNav) {
                homeNav.href = `/${lang}/`;
            }
        }
    }
}

// Enhanced language selector
document.addEventListener('DOMContentLoaded', function() {
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        const currentPath = window.location.pathname;
        let currentLang = document.body.getAttribute('data-current-lang') || 'fr';
        
        // Special handling for 404 page only
        if (window.location.pathname === '/404.html' || document.querySelector('.error-icon')) {
            // Try to detect language from multiple sources for 404 page
            let detectedLang = 'fr'; // default
            
            // 1. Check the referrer URL (if user came from /en/ or /fr/ page)
            if (document.referrer) {
                const referrerUrl = new URL(document.referrer);
                if (referrerUrl.pathname.startsWith('/en/')) {
                    detectedLang = 'en';
                } else if (referrerUrl.pathname.startsWith('/fr/')) {
                    detectedLang = 'fr';
                }
            }
            
            // 2. Check if the current 404 URL contains language hints
            const currentUrl = window.location.href;
            if (currentUrl.includes('/en/') || currentUrl.includes('%2Fen%2F')) {
                detectedLang = 'en';
            } else if (currentUrl.includes('/fr/') || currentUrl.includes('%2Ffr%2F')) {
                detectedLang = 'fr';
            }
            
            // 3. Fallback to browser language if no other hints
            if (detectedLang === 'fr' && !document.referrer) {
                const browserLang = navigator.language.startsWith('en') ? 'en' : 'fr';
                detectedLang = browserLang;
            }
            
            currentLang = detectedLang;
            
            // Apply translation immediately for 404 page
            translatePage(currentLang);
            document.body.setAttribute('data-current-lang', currentLang);
        } else {
            // For regular pages, detect from URL
            if (currentPath.startsWith('/en/')) {
                currentLang = 'en';
            } else if (currentPath.startsWith('/fr/')) {
                currentLang = 'fr';
            }
        }
        
        // Set the correct option as selected
        languageSelect.value = currentLang;
        
        languageSelect.addEventListener('change', function() {
            const selectedLang = this.value;
            
            console.log('Language change requested:', currentLang, '->', selectedLang);
            
            // Don't reload if same language
            if (selectedLang === currentLang) {
                console.log('Same language, no action needed');
                return;
            }
            
            // Check if this is the 404 page
            if (window.location.pathname === '/404.html' || document.querySelector('.error-icon')) {
                // For 404 page, redirect to home page in selected language
                // This is more user-friendly than staying on 404
                window.location.href = `/${selectedLang}/`;
                return;
            }
            
            // For other pages, redirect as before
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
            
            console.log('Redirecting to:', newPath);
            
            // Redirect to new URL
            window.location.href = newPath;
        });
    }
});
