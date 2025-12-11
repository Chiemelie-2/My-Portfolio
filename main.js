document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav a');

    // Hamburger Menu Toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header')) {
            nav.classList.remove('active');
        }
    });

    // Learn More Button Functionality
    const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const serviceId = button.getAttribute('data-service');
            const serviceDetails = document.getElementById(serviceId);

            if (serviceDetails) {
                const isVisible = serviceDetails.style.display === 'block';
                serviceDetails.style.display = isVisible ? 'none' : 'block';

                // Change button text
                button.innerHTML = isVisible
                    ? `Learn More <i class="fas fa-arrow-right"></i>`
                    : `Learn Less <i class="fas fa-arrow-up"></i>`;
            }
        });
    });

    // View All Work Button Functionality
    const viewAllBtn = document.getElementById('view-all-btn');
    const morePortfolioItems = document.getElementById('more-portfolio-items');

    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', () => {
            const isVisible = morePortfolioItems.classList.contains('active');
            morePortfolioItems.classList.toggle('active');

            // Change button text
            viewAllBtn.innerHTML = isVisible
                ? `View All Work <i class="fas fa-arrow-right"></i>`
                : `Show Less <i class="fas fa-arrow-up"></i>`;
        });
    }

    // Smooth scrolling for anchor links (if any)
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

    // Simple scroll animation for sections (optional, for a more dynamic feel)
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            } else {
                // Optional: reset opacity/transform when out of view
                // entry.target.style.opacity = '0';
                // entry.target.style.transform = 'translateY(20px)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0'; // Start invisible
        section.style.transform = 'translateY(20px)'; // Start slightly below
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        sectionObserver.observe(section);
    });
});


