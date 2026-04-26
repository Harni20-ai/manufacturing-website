/**
 * INDUSTRIAL MANUFACTURING - MAIN JS
 * Handling global UI interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initRTL();
    initMobileMenu();
    initStickyHeader();
    initNewsletterForm();
});

/**
 * RTL Management
 */
function initRTL() {
    const rtlToggle = document.querySelector('#rtl-toggle');
    const isRTL = localStorage.getItem('rtl') === 'true';
    
    if (isRTL) {
        document.documentElement.setAttribute('dir', 'rtl');
        loadRTLStyles();
    }
    
    if (rtlToggle) {
        rtlToggle.addEventListener('click', () => {
            const currentRTL = document.documentElement.getAttribute('dir') === 'rtl';
            const newRTL = !currentRTL;
            
            if (newRTL) {
                document.documentElement.setAttribute('dir', 'rtl');
                loadRTLStyles();
            } else {
                document.documentElement.removeAttribute('dir');
                removeRTLStyles();
            }
            localStorage.setItem('rtl', newRTL);
        });
    }
}

function loadRTLStyles() {
    if (!document.getElementById('rtl-css')) {
        const link = document.createElement('link');
        link.id = 'rtl-css';
        link.rel = 'stylesheet';
        link.href = '../assets/css/rtl.css';
        document.head.appendChild(link);
    }
}

function removeRTLStyles() {
    const link = document.getElementById('rtl-css');
    if (link) link.remove();
}

/**
 * Theme Management
 * Handles system preference detection and manual toggle
 */
function initTheme() {
    const themeToggle = document.querySelector('#theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'dark'); // Default to dark as per requirements
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('open');
        });
    }
}

/**
 * Sticky Header Logic
 */
function initStickyHeader() {
    const header = document.querySelector('.navbar');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
}

/**
 * Newsletter Form Validation
 */
function initNewsletterForm() {
    const form = document.querySelector('.newsletter-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = form.querySelector('input[type="email"]');
        
        if (validateEmail(emailInput.value)) {
            showToast('Success! You have been subscribed.', 'success');
            emailInput.value = '';
        } else {
            showToast('Please enter a valid email address.', 'error');
        }
    });
}

/**
 * Helper: Email Validation
 */
function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

/**
 * Helper: Show Toast Notification
 */
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // Simple toast animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
