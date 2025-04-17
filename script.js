document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Animation on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.feature-card, .testimonial, .stat, .faq-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('fade-in');
            }
        });
    };

    // Add fade-in class for CSS animation
    const style = document.createElement('style');
    style.textContent = `
        .feature-card, .testimonial, .stat, .faq-item {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);

    // Run animation check on load and scroll
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);

    // Create placeholder SVG logos and images
    createPlaceholderImages();
});

// Function to create placeholder SVG images
function createPlaceholderImages() {
    // Create Discord-inspired logo
    const logoSvg = `
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="20" fill="#5865F2"/>
        <path d="M29.5 13C27.5 12 25.5 11.5 23.5 11.25C23.25 11.75 22.75 12.5 22.5 13C20.5 12.75 18.5 12.75 16.5 13C16.25 12.5 15.75 11.75 15.5 11.25C13.5 11.5 11.5 12 9.5 13C6.5 17.5 5.5 21.75 6 26.5C8.5 28.25 11 29.5 13.5 30C14 29.25 14.5 28.5 14.75 27.75C14 27.5 13.25 27.25 12.5 26.75C12.75 26.5 13 26.25 13.25 26C16.75 27.5 20.5 27.5 24 26C24.25 26.25 24.5 26.5 24.75 26.75C24 27.25 23.25 27.5 22.5 27.75C22.75 28.5 23.25 29.25 23.75 30C26.25 29.5 28.75 28.25 31.25 26.5C31.75 21.75 30.25 17.5 27.5 13H29.5ZM15 23.5C13.75 23.5 12.75 22.25 12.75 20.75C12.75 19.25 13.75 18 15 18C16.25 18 17.25 19.25 17.25 20.75C17.25 22.25 16.25 23.5 15 23.5ZM24 23.5C22.75 23.5 21.75 22.25 21.75 20.75C21.75 19.25 22.75 18 24 18C25.25 18 26.25 19.25 26.25 20.75C26.25 22.25 25.25 23.5 24 23.5Z" fill="white"/>
    </svg>
    `;
    
    // Create hero image
    const heroSvg = `
    <svg width="500" height="400" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="400" height="300" rx="20" fill="#2F3136"/>
        <rect x="70" y="90" width="360" height="60" rx="10" fill="#36393F"/>
        <rect x="70" y="170" width="360" height="60" rx="10" fill="#36393F"/>
        <rect x="70" y="250" width="360" height="60" rx="10" fill="#36393F"/>
        <circle cx="100" cy="120" r="15" fill="#5865F2"/>
        <circle cx="100" cy="200" r="15" fill="#5865F2"/>
        <circle cx="100" cy="280" r="15" fill="#5865F2"/>
    </svg>
    `;
    
    // Create avatar placeholders
    const avatar1Svg = `
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="#5865F2"/>
        <circle cx="20" cy="15" r="7" fill="#FFFFFF"/>
        <path d="M8 34C8 26.8203 13.3726 21 20 21C26.6274 21 32 26.8203 32 34" fill="#FFFFFF"/>
    </svg>
    `;
    
    const avatar2Svg = `
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="#EB459E"/>
        <circle cx="20" cy="15" r="7" fill="#FFFFFF"/>
        <path d="M8 34C8 26.8203 13.3726 21 20 21C26.6274 21 32 26.8203 32 34" fill="#FFFFFF"/>
    </svg>
    `;
    
    const avatar3Svg = `
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="#57F287"/>
        <circle cx="20" cy="15" r="7" fill="#FFFFFF"/>
        <path d="M8 34C8 26.8203 13.3726 21 20 21C26.6274 21 32 26.8203 32 34" fill="#FFFFFF"/>
    </svg>
    `;
    
    // Create feature icons
    const studyIconSvg = `
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35 12.5L20 5L5 12.5L20 20L35 12.5Z" fill="#5865F2"/>
        <path d="M12.5 15V25L20 30L27.5 25V15" stroke="#5865F2" stroke-width="2"/>
        <path d="M35 12.5V27.5" stroke="#5865F2" stroke-width="2"/>
        <path d="M30 30C30 27.5 32.5 25 35 25" stroke="#5865F2" stroke-width="2"/>
    </svg>
    `;
    
    const eventsIconSvg = `
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="7.5" y="10" width="25" height="25" rx="2" stroke="#EB459E" stroke-width="2"/>
        <path d="M7.5 15H32.5" stroke="#EB459E" stroke-width="2"/>
        <path d="M15 5V10" stroke="#EB459E" stroke-width="2"/>
        <path d="M25 5V10" stroke="#EB459E" stroke-width="2"/>
        <circle cx="15" cy="20" r="2" fill="#EB459E"/>
        <circle cx="25" cy="20" r="2" fill="#EB459E"/>
        <circle cx="15" cy="27.5" r="2" fill="#EB459E"/>
        <circle cx="25" cy="27.5" r="2" fill="#EB459E"/>
    </svg>
    `;
    
    const voiceIconSvg = `
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 5V35" stroke="#57F287" stroke-width="2"/>
        <path d="M12.5 10V30" stroke="#57F287" stroke-width="2"/>
        <path d="M5 15V25" stroke="#57F287" stroke-width="2"/>
        <path d="M27.5 10V30" stroke="#57F287" stroke-width="2"/>
        <path d="M35 15V25" stroke="#57F287" stroke-width="2"/>
    </svg>
    `;
    
    const rolesIconSvg = `
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="12.5" r="7.5" stroke="#FEE75C" stroke-width="2"/>
        <path d="M7.5 32.5C7.5 25.5964 13.0964 20 20 20C26.9036 20 32.5 25.5964 32.5 32.5" stroke="#FEE75C" stroke-width="2"/>
        <circle cx="30" cy="10" r="5" fill="#FEE75C"/>
    </svg>
    `;
    
    // Create blob URLs for the SVGs
    const logoBlob = new Blob([logoSvg], {type: 'image/svg+xml'});
    const heroBlob = new Blob([heroSvg], {type: 'image/svg+xml'});
    const avatar1Blob = new Blob([avatar1Svg], {type: 'image/svg+xml'});
    const avatar2Blob = new Blob([avatar2Svg], {type: 'image/svg+xml'});
    const avatar3Blob = new Blob([avatar3Svg], {type: 'image/svg+xml'});
    
    // Set the SVG sources
    document.querySelectorAll('.logo img').forEach(img => {
        img.src = URL.createObjectURL(logoBlob);
    });
    
    document.querySelector('.hero-image img').src = URL.createObjectURL(heroBlob);
    
    const avatars = document.querySelectorAll('.user img');
    if (avatars.length >= 3) {
        avatars[0].src = URL.createObjectURL(avatar1Blob);
        avatars[1].src = URL.createObjectURL(avatar2Blob);
        avatars[2].src = URL.createObjectURL(avatar3Blob);
    }
    
    // Add feature icons
    document.querySelector('.feature-icon.study').innerHTML = studyIconSvg;
    document.querySelector('.feature-icon.events').innerHTML = eventsIconSvg;
    document.querySelector('.feature-icon.voice').innerHTML = voiceIconSvg;
    document.querySelector('.feature-icon.roles').innerHTML = rolesIconSvg;
}
