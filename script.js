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

    // Create placeholder SVG images and icons
    createPlaceholderImages();
});

// Function to create placeholder SVG images
function createPlaceholderImages() {
    // Create Discord icon
    const discordIconSvg = `
    <svg width="20" height="20" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="#ffffff"/>
    </svg>
    `;
    
    // Create classroom background
    const classroomBgSvg = `
    <svg width="1440" height="800" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1440" height="800" fill="#F9F9F9"/>
        <rect x="0" y="700" width="1440" height="100" fill="#E0E0E0"/>
        <rect x="100" y="50" width="300" height="200" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="2"/>
        <rect x="1040" y="50" width="300" height="200" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="2"/>
        <rect x="100" y="300" width="300" height="200" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="2"/>
        <rect x="1040" y="300" width="300" height="200" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="2"/>
        <rect x="450" y="150" width="540" height="360" fill="#4A90E2" opacity="0.1"/>
    </svg>
    `;
    
    // Create classroom illustration
    const classroomSvg = `
    <svg width="500" height="400" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="400" height="300" rx="10" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="2"/>
        <rect x="70" y="70" width="360" height="40" rx="5" fill="#4A90E2" opacity="0.2"/>
        <rect x="70" y="130" width="360" height="200" rx="5" fill="#F9F9F9"/>
        <circle cx="100" cy="90" r="10" fill="#4A90E2"/>
        <circle cx="130" cy="90" r="10" fill="#FF9966"/>
        <circle cx="160" cy="90" r="10" fill="#6ECF7F"/>
        
        <!-- Students -->
        <rect x="90" y="150" width="60" height="60" rx="30" fill="#4A90E2" opacity="0.7"/>
        <rect x="170" y="150" width="60" height="60" rx="30" fill="#FF9966" opacity="0.7"/>
        <rect x="250" y="150" width="60" height="60" rx="30" fill="#6ECF7F" opacity="0.7"/>
        <rect x="330" y="150" width="60" height="60" rx="30" fill="#FFD166" opacity="0.7"/>
        
        <!-- Chat bubbles -->
        <path d="M110 230H130L120 250L110 230Z" fill="#FFFFFF"/>
        <rect x="90" y="240" width="60" height="40" rx="10" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="1"/>
        
        <path d="M190 230H210L200 250L190 230Z" fill="#FFFFFF"/>
        <rect x="170" y="240" width="60" height="40" rx="10" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="1"/>
        
        <path d="M270 230H290L280 250L270 230Z" fill="#FFFFFF"/>
        <rect x="250" y="240" width="60" height="40" rx="10" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="1"/>
        
        <path d="M350 230H370L360 250L350 230Z" fill="#FFFFFF"/>
        <rect x="330" y="240" width="60" height="40" rx="10" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="1"/>
    </svg>
    `;
    
    // Create pencil icon
    const pencilSvg = `
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21V27H9L24 12L18 6L3 21Z" fill="#FFD166" stroke="#FF9966" stroke-width="2"/>
        <path d="M18 6L24 12L27 9L21 3L18 6Z" fill="#FF9966" stroke="#FF9966" stroke-width="2"/>
    </svg>
    `;
    
    // Create notebook icon
    const notebookSvg = `
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="3" width="20" height="24" fill="#4A90E2" stroke="#3A7BC8" stroke-width="2"/>
        <line x1="5" y1="9" x2="25" y2="9" stroke="#3A7BC8" stroke-width="2"/>
        <line x1="5" y1="15" x2="25" y2="15" stroke="#3A7BC8" stroke-width="2"/>
        <line x1="5" y1="21" x2="25" y2="21" stroke="#3A7BC8" stroke-width="2"/>
    </svg>
    `;
    
    // Create avatar placeholders
    const avatar1Svg = `
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="25" fill="#4A90E2"/>
        <circle cx="25" cy="20" r="10" fill="#FFFFFF"/>
        <path d="M10 42C10 33.7157 16.7157 27 25 27C33.2843 27 40 33.7157 40 42" fill="#FFFFFF"/>
    </svg>
    `;
    
    const avatar2Svg = `
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="25" fill="#FF9966"/>
        <circle cx="25" cy="20" r="10" fill="#FFFFFF"/>
        <path d="M10 42C10 33.7157 16.7157 27 25 27C33.2843 27 40 33.7157 40 42" fill="#FFFFFF"/>
    </svg>
    `;
    
    const avatar3Svg = `
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="25" fill="#6ECF7F"/>
        <circle cx="25" cy="20" r="10" fill="#FFFFFF"/>
        <path d="M10 42C10 33.7157 16.7157 27 25 27C33.2843 27 40 33.7157 40 42" fill="#FFFFFF"/>
    </svg>
    `;
    
    // Create feature icons
    const studyIconSvg = `
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35 10L10 20L35 30L60 20L35 10Z" fill="#FFFFFF"/>
        <path d="M20 25V45L35 55L50 45V25" stroke="#FFFFFF" stroke-width="2"/>
        <path d="M60 20V45" stroke="#FFFFFF" stroke-width="2"/>
        <path d="M50 50C50 45 55 40 60 40" stroke="#FFFFFF" stroke-width="2"/>
    </svg>
    `;
    
    const eventsIconSvg = `
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="20" width="40" height="40" rx="2" stroke="#FFFFFF" stroke-width="2"/>
        <path d="M15 30H55" stroke="#FFFFFF" stroke-width="2"/>
        <path d="M25 10V20" stroke="#FFFFFF" stroke-width="2"/>
        <path d="M45 10V20" stroke="#FFFFFF" stroke-width="2"/>
        <circle cx="25" cy="40" r="3" fill="#FFFFFF"/>
        <circle cx="45" cy="40" r="3" fill="#FFFFFF"/>
        <circle cx="25" cy="50" r="3" fill="#FFFFFF"/>
        <circle cx="45" cy="50" r="3" fill="#FFFFFF"/>
    </svg>
    `;
    
    const voiceIconSvg = `
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35 15V55" stroke="#FFFFFF" stroke-width="2"/>
        <path d="M25 20V50" stroke="#FFFFFF" stroke-width="2"/>
        <path d="M15 25V45" stroke="#FFFFFF" stroke-width="2"/>
        <path d="M45 20V50" stroke="#FFFFFF" stroke-width="2"/>
        <path d="M55 25V45" stroke="#FFFFFF" stroke-width="2"/>
    </svg>
    `;
    
    const rolesIconSvg = `
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="35" cy="25" r="15" stroke="#FFFFFF" stroke-width="2"/>
        <path d="M15 55C15 44.5066 24.0066 35 35 35C45.9934 35 55 44.5066 55 55" stroke="#FFFFFF" stroke-width="2"/>
        <circle cx="50" cy="20" r="7" fill="#FFFFFF"/>
    </svg>
    `;
    
    // Create blob URLs for the SVGs
    const discordIconBlob = new Blob([discordIconSvg], {type: 'image/svg+xml'});
    const classroomBgBlob = new Blob([classroomBgSvg], {type: 'image/svg+xml'});
    const classroomBlob = new Blob([classroomSvg], {type: 'image/svg+xml'});
    const pencilBlob = new Blob([pencilSvg], {type: 'image/svg+xml'});
    const notebookBlob = new Blob([notebookSvg], {type: 'image/svg+xml'});
    const avatar1Blob = new Blob([avatar1Svg], {type: 'image/svg+xml'});
    const avatar2Blob = new Blob([avatar2Svg], {type: 'image/svg+xml'});
    const avatar3Blob = new Blob([avatar3Svg], {type: 'image/svg+xml'});
    
    // Set the SVG sources
    document.querySelectorAll('.discord-icon').forEach(img => {
        img.src = URL.createObjectURL(discordIconBlob);
    });
    
    document.querySelector('.classroom-bg').style.backgroundImage = `url('${URL.createObjectURL(classroomBgBlob)}')`;
    document.querySelector('.hero-image img').src = URL.createObjectURL(classroomBlob);
    
    // Set section title icons
    const beforeStyle = document.createElement('style');
    beforeStyle.textContent = `
        .section-title::before {
            background-image: url('${URL.createObjectURL(pencilBlob)}') !important;
        }
        .section-title::after {
            background-image: url('${URL.createObjectURL(notebookBlob)}') !important;
        }
    `;
    document.head.appendChild(beforeStyle);
    
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
