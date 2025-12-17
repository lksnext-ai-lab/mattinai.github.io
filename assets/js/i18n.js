// i18n.js - Internationalization for MattinAI
let currentLanguage = 'en';
let translations = {};

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
        // Fallback to English if translation fails
        if (lang !== 'en') {
            return loadTranslations('en');
        }
        return {};
    }
}

// Update page content with translations
function updateContent() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        const translation = getNestedTranslation(translations, key);
        
        if (translation) {
            // Check if element has children that shouldn't be replaced
            if (element.children.length > 0 && element.querySelector('[data-i18n]')) {
                // Has nested data-i18n elements, don't replace
                return;
            }
            
            // Check if the element contains only text or has specific structure
            if (element.tagName === 'SPAN' || element.children.length === 0) {
                element.textContent = translation;
            } else if (element.innerHTML.includes('<span') || element.innerHTML.includes('<i')) {
                // Preserve inner HTML structure, only update text nodes
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = element.innerHTML;
                const walker = document.createTreeWalker(
                    tempDiv,
                    NodeFilter.SHOW_TEXT,
                    null,
                    false
                );
                
                let node;
                const textNodes = [];
                while (node = walker.nextNode()) {
                    if (node.textContent.trim()) {
                        textNodes.push(node);
                    }
                }
                
                // Replace text content in text nodes
                textNodes.forEach(textNode => {
                    textNode.textContent = translation;
                });
                
                element.innerHTML = tempDiv.innerHTML;
            } else {
                element.textContent = translation;
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
            btn.classList.remove('text-gray-600');
            btn.classList.add('text-mattinOrange', 'font-bold');
        } else {
            btn.classList.remove('active-lang', 'text-mattinOrange', 'font-bold');
            btn.classList.add('text-gray-600');
        }
    });
}

// Get nested translation by key (e.g., "nav.about")
function getNestedTranslation(obj, key) {
    return key.split('.').reduce((o, k) => o?.[k], obj);
}

// Change language
async function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('mattinai-language', lang);
    await loadTranslations(lang);
    updateContent();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', async () => {
    // Get saved language or default to English
    const savedLang = localStorage.getItem('mattinai-language') || 'en';
    currentLanguage = savedLang;
    
    // Load translations and update content
    await loadTranslations(currentLanguage);
    updateContent();
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon.classList.contains('mdi-menu')) {
                icon.classList.remove('mdi-menu');
                icon.classList.add('mdi-close');
            } else {
                icon.classList.remove('mdi-close');
                icon.classList.add('mdi-menu');
            }
        });
        
        // Close mobile menu when clicking on a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('mdi-close');
                icon.classList.add('mdi-menu');
            });
        });
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
});
