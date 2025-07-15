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
        skillsButton: "Voir les Compétences",
        contactLink: "me contacter",
        whereToGo: "🧭 Où souhaitez-vous aller ?",
        whatHappened: "🤔 Que s'est-il passé ?",
        homePage: "Page d'Accueil",
        skillsProjects: "Compétences & Projets",
        researchAcademic: "Recherche & Académique",
        educationExperience: "Formation & Expérience",
        urlIncorrect: "L'URL de la page pourrait être incorrecte",
        pageMoved: "La page a pu être déplacée ou supprimée",
        outdatedLink: "Vous avez peut-être suivi un lien obsolète",
        serverIssue: "Il peut y avoir un problème de serveur temporaire",
        contactText: "Si vous pensez qu'il s'agit d'une erreur, n'hésitez pas à",
        contactForm: "me contacter",
        footerContact: "Restons en Contact",
        footerRights: "Tous droits réservés"
    },
    en: {
        title: "Page Not Found",
        description: "Sorry, the page you are looking for does not exist or has been moved.",
        homeButton: "Back to Home",
        skillsButton: "View Skills",
        contactLink: "contact me",
        whereToGo: "🧭 Where would you like to go?",
        whatHappened: "🤔 What happened?",
        homePage: "Home Page",
        skillsProjects: "Skills & Projects",
        researchAcademic: "Research & Academic",
        educationExperience: "Education & Experience",
        urlIncorrect: "The page URL might be incorrect",
        pageMoved: "The page might have been moved or deleted",
        outdatedLink: "You might have followed an outdated link",
        serverIssue: "There might be a temporary server issue",
        contactText: "If you believe this is an error, please feel free to",
        contactForm: "contact me",
        footerContact: "Stay in Touch",
        footerRights: "All rights reserved"
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
    if (pageTitle && (pageTitle.textContent.includes('Introuvable') || pageTitle.textContent.includes('Not Found'))) {
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
                <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z"/>
            </svg>
            ${t.skillsButton}
        `;
        skillsButton.href = `/${lang}/skills/`;
    }
    
    // Update section titles
    const cardTitles = document.querySelectorAll('.card-title');
    if (cardTitles.length >= 2) {
        // First card: "Where would you like to go?"
        cardTitles[0].textContent = t.whereToGo;
        // Second card: "What happened?"
        cardTitles[1].textContent = t.whatHappened;
    }
    
    // Update navigation links in the first card
    const navigationLinks = document.querySelectorAll('.navigation-links a');
    if (navigationLinks.length >= 4) {
        // Update text content for navigation links
        const navTexts = [t.homePage, t.skillsProjects, t.researchAcademic, t.educationExperience];
        navigationLinks.forEach((link, index) => {
            if (index < navTexts.length) {
                // Keep the SVG icon and update only the text
                const svg = link.querySelector('svg');
                link.innerHTML = '';
                if (svg) {
                    link.appendChild(svg);
                }
                link.appendChild(document.createTextNode(' ' + navTexts[index]));
                link.href = `/${lang}/` + (index === 0 ? '' : ['skills/', 'academic/', 'education/'][index - 1]);
            }
        });
    }
    
    // Update list items in the second card (what happened section)
    const listItems = document.querySelectorAll('.enhanced-card:last-child ul li');
    if (listItems.length >= 4) {
        const listTexts = [t.urlIncorrect, t.pageMoved, t.outdatedLink, t.serverIssue];
        listItems.forEach((item, index) => {
            if (index < listTexts.length) {
                item.textContent = listTexts[index];
            }
        });
    }
    
    // Update contact text and link in the second card
    const contactParagraph = document.querySelector('.enhanced-card:last-child p');
    if (contactParagraph) {
        const contactLinkElement = contactParagraph.querySelector('.contact-link');
        if (contactLinkElement) {
            contactParagraph.innerHTML = `${t.contactText} <a href="/${lang}/#footer" class="contact-link">${t.contactForm}</a>.`;
        }
    }
    
    // Update footer translations (only on 404 page)
    if (document.querySelector('.error-icon')) {
        // Update "Stay in Touch" / "Restons en Contact"
        const footerContactTitle = document.querySelector('.footer-section h3');
        if (footerContactTitle) {
            footerContactTitle.textContent = t.footerContact;
        }
        
        // Update copyright text
        const footerRights = document.querySelector('.footer-bottom p');
        if (footerRights) {
            footerRights.innerHTML = `&copy; 2025 Brice Petit. ${t.footerRights}.`;
        }
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
            if (skillsNav && skillsNav.closest('.header_container')) {
                skillsNav.textContent = nav.skills;
                skillsNav.href = `/${lang}/skills/`;
            }
            
            const academicNav = document.querySelector('a[href*="/academic/"]');
            if (academicNav && academicNav.closest('.header_container')) {
                academicNav.textContent = nav.academic;
                academicNav.href = `/${lang}/academic/`;
            }
            
            const educationNav = document.querySelector('a[href*="/education/"]');
            if (educationNav && educationNav.closest('.header_container')) {
                educationNav.textContent = nav.education;
                educationNav.href = `/${lang}/education/`;
            }
            
            const homeNav = document.querySelector('a[href*="/fr/"], a[href*="/en/"]');
            if (homeNav && homeNav.closest('.header_container')) {
                homeNav.href = `/${lang}/`;
            }
        }
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Store user language preference
function storeLanguagePreference(lang) {
    try {
        localStorage.setItem('preferredLanguage', lang);
    } catch (e) {
        // localStorage not available, ignore
    }
}

function getStoredLanguagePreference() {
    try {
        return localStorage.getItem('preferredLanguage');
    } catch (e) {
        // localStorage not available, return null
        return null;
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
                try {
                    const referrerUrl = new URL(document.referrer);
                    if (referrerUrl.pathname.startsWith('/en/')) {
                        detectedLang = 'en';
                    } else if (referrerUrl.pathname.startsWith('/fr/')) {
                        detectedLang = 'fr';
                    }
                } catch (e) {
                    // Invalid referrer URL, ignore
                }
            }
            
            // 2. Check stored language preference (from previous navigation)
            if (detectedLang === 'fr' && !document.referrer) {
                const storedLang = getStoredLanguagePreference();
                if (storedLang && (storedLang === 'en' || storedLang === 'fr')) {
                    detectedLang = storedLang;
                }
            }
            
            // 3. Fallback to browser language if no other context
            if (detectedLang === 'fr' && !document.referrer && !getStoredLanguagePreference()) {
                const browserLang = navigator.language.startsWith('en') ? 'en' : 'fr';
                detectedLang = browserLang;
            }
            
            currentLang = detectedLang;
            
            // Apply translation immediately for 404 page
            translatePage(currentLang);
            document.body.setAttribute('data-current-lang', currentLang);
        } else {
            // For regular pages, detect from URL and store preference
            if (currentPath.startsWith('/en/')) {
                currentLang = 'en';
                storeLanguagePreference('en');
            } else if (currentPath.startsWith('/fr/')) {
                currentLang = 'fr';
                storeLanguagePreference('fr');
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
                // For 404 page, redirect to the appropriate language section
                // This creates a proper URL structure /en/ or /fr/
                if (selectedLang === 'en') {
                    window.location.href = '/en/';
                } else {
                    window.location.href = '/fr/';
                }
                return;
            }
            
            // Store language preference for regular pages too
            storeLanguagePreference(selectedLang);
            
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
