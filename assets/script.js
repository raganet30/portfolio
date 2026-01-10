
// Simple scroll animation
document.addEventListener('DOMContentLoaded', function () {
    const fadeElements = document.querySelectorAll('.fade-in');

    const fadeInOnScroll = function () {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    };

    // Initial check
    fadeInOnScroll();

    // Check on scroll
    window.addEventListener('scroll', fadeInOnScroll);

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function () {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        });
    });
});


// Modal functionality
document.addEventListener('DOMContentLoaded', function () {
    const viewDetailButtons = document.querySelectorAll('.view-details-btn');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.modal-close');
    const fullscreenViewer = document.querySelector('.fullscreen-viewer');
    const fullscreenClose = document.querySelector('.fullscreen-close');
    const fullscreenImg = document.querySelector('.fullscreen-img');
    const screenshotItems = document.querySelectorAll('.screenshot-item img');

    // Open modal when clicking "View Details"
    viewDetailButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal when clicking close button
    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modal = this.closest('.modal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Close modal when clicking outside modal content
    modals.forEach(modal => {
        modal.addEventListener('click', function (e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Open fullscreen viewer when clicking on screenshot
    screenshotItems.forEach(img => {
        img.addEventListener('click', function () {
            fullscreenImg.src = this.src;
            fullscreenViewer.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close fullscreen viewer
    fullscreenClose.addEventListener('click', function () {
        fullscreenViewer.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Close fullscreen viewer when clicking outside image
    fullscreenViewer.addEventListener('click', function (e) {
        if (e.target === this) {
            this.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Close modals with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                modal.classList.remove('active');
            });
            fullscreenViewer.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});



