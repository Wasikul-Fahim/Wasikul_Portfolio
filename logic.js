// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});
// Arrow button for bottom left corner 

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Mobile menu functionality
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

// Close mobile menu when clicking on a link
navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navLinks.classList.remove('active');
        mobileMenu.textContent = '☰';
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !mobileMenu.contains(e.target)) {
        navLinks.classList.remove('active');
        mobileMenu.textContent = '☰';
    }
});

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add interactive hover effects
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});

// Add touch support for mobile devices
if ('ontouchstart' in window) {
    serviceCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
        });
        
        card.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
            }, 150);
        });
    });
}

// Optimize animations for mobile
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (reduceMotion.matches) {
    document.documentElement.style.setProperty('--animation-duration', '0s');
}