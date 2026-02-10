// i18n.js - Internationalization for MattinAI
let currentLanguage = 'en';
let translations = {};
let isLoading = false;

// Load translation file
async function loadTranslations(lang) {
    try {
        const response = await fetch(`lang/${lang}.json`);
        if (!response.ok) {
            throw new Error(`Failed to load ${lang}.json`);
        }
        translations = await response.json();
        return translations;
    } catch (error) {
        console.error('Error loading translations:', error);
        showError('Failed to load language. Using default.');
        // Fallback to English if translation fails
        if (lang !== 'en') {
            return loadTranslations('en');
        }
        return {};
    }
}

// Show error notification
function showError(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-4 bg-red-500 text-white px-4 py-3 rounded shadow-lg z-50';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

// Update page content with translations
function updateContent() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        const translation = getNestedTranslation(translations, key);
        
        if (translation) {
            // Check if element is a simple text container
            if (element.children.length === 0) {
                // No children - simple text replacement
                element.textContent = translation;
            } else {
                // Has children - check if any have data-i18n
                const hasI18nChildren = element.querySelector('[data-i18n]');
                if (hasI18nChildren) {
                    // Has nested i18n elements, skip parent
                    return;
                }
                
                // Element has non-i18n children (like icons)
                // Find and update only the direct text nodes
                const children = Array.from(element.childNodes);
                children.forEach(child => {
                    if (child.nodeType === Node.TEXT_NODE && 
                        child.textContent.trim()) {
                        child.textContent = translation;
                    }
                });
            }
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const lang = btn.dataset.lang;
        if (lang === currentLanguage) {
            btn.classList.add('active-lang');
        } else {
            btn.classList.remove('active-lang');
        }
    });
}

// Get nested translation by key (e.g., "nav.about")
function getNestedTranslation(obj, key) {
    return key.split('.').reduce((o, k) => o?.[k], obj);
}

// Change language - MUST be global for inline onclick handlers
window.changeLanguage = async function(lang) {
    if (isLoading) return;
    
    isLoading = true;
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => btn.classList.add('loading'));
    
    currentLanguage = lang;
    localStorage.setItem('mattinai-language', lang);
    
    try {
        await loadTranslations(lang);
        updateContent();
    } catch (error) {
        console.error('Language change error:', error);
        showError('Failed to change language');
    } finally {
        isLoading = false;
        buttons.forEach(btn => btn.classList.remove('loading'));
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', async () => {
    // Get saved language or default to English
    const savedLang = localStorage.getItem('mattinai-language') || 'en';
    currentLanguage = savedLang;
    
    // Set initial lang attribute
    document.documentElement.lang = currentLanguage;
    
    // Load translations and update content
    await loadTranslations(currentLanguage);
    updateContent();
    
    // Initialize scroll spy for navigation
    initScrollSpy();
    
    // Initialize scroll progress bar
    initScrollProgress();
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    let backdrop = null;
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMobileMenu();
        });
        
        // Close mobile menu when clicking on a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                closeMobileMenu();
            });
        });
        
        // Keyboard navigation for mobile menu
        mobileMenuBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
                closeMobileMenu();
            }
        });
        
        // Close on window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768 && !mobileMenu.classList.contains('hidden')) {
                closeMobileMenu();
            }
        });
    }
    
    function toggleMobileMenu() {
        const isHidden = mobileMenu.classList.contains('hidden');
        const icon = mobileMenuBtn.querySelector('i');
        
        if (isHidden) {
            // Open menu
            mobileMenu.classList.remove('hidden');
            icon.classList.remove('mdi-menu');
            icon.classList.add('mdi-close');
            mobileMenuBtn.setAttribute('aria-expanded', 'true');
            mobileMenuBtn.setAttribute('aria-label', 'Close menu');
            
            // Create and add backdrop
            backdrop = document.createElement('div');
            backdrop.className = 'mobile-menu-backdrop';
            backdrop.addEventListener('click', closeMobileMenu);
            document.body.appendChild(backdrop);
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
            
            // Focus first menu item
            const firstLink = mobileMenu.querySelector('a');
            if (firstLink) setTimeout(() => firstLink.focus(), 100);
        } else {
            closeMobileMenu();
        }
    }
    
    function closeMobileMenu() {
        mobileMenu.classList.add('hidden');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('mdi-close');
        icon.classList.add('mdi-menu');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.setAttribute('aria-label', 'Open menu');
        
        // Remove backdrop
        if (backdrop) {
            backdrop.remove();
            backdrop = null;
        }
        
        // Restore body scroll
        document.body.style.overflow = '';
        
        // Return focus to button
        mobileMenuBtn.focus();
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add header shadow on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Image lazy loading enhancement
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
    });
});

// Scroll spy for active navigation
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
}

// Scroll progress bar
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.transform = 'scaleX(0)';
    document.body.prepend(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight);
        progressBar.style.transform = `scaleX(${scrolled})`;
    });
}
