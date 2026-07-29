document.addEventListener('DOMContentLoaded', () => {
        // Dynamic text animation for the mockup AI assistant box
        const aiMessage = document.querySelector(".ai-message");

        if (aiMessage) {
                const messages = [
                        "Votre rendez-vous est confirmé pour demain à 14h.",
                        "Votre consultation avec Dr. Martin est prévue lundi à 9h.",
                        "Votre rendez-vous a été modifié avec succès."
                ];

                let index = 0;

                setInterval(() => {
                        index = (index + 1) % messages.length;

                        aiMessage.style.opacity = '0';

                        setTimeout(() => {
                                aiMessage.textContent = messages[index];
                                aiMessage.style.opacity = '1';
                        }, 300);

                }, 4000);
        }
});

document.addEventListener('DOMContentLoaded', () => {

        /* ==========================================================================
           1. SMOOTH SCROLLING FOR NAVIGATION LINKS
           ========================================================================== */
        const navLinks = document.querySelectorAll('.nav-link, .navbar-brand');

        navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                        const targetId = link.getAttribute('href');

                        // Only handle anchor links
                        if (targetId && targetId.startsWith('#')) {
                                e.preventDefault();

                                if (targetId === '#') {
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                } else {
                                        const targetElement = document.querySelector(targetId);
                                        if (targetElement) {
                                                // Offset for sticky navbar height
                                                const headerOffset = 80;
                                                const elementPosition = targetElement.getBoundingClientRect().top;
                                                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                                                window.scrollTo({
                                                        top: offsetPosition,
                                                        behavior: 'smooth'
                                                });
                                        }
                                }

                                // Close mobile menu if open
                                const nav = document.getElementById('navbarNav');
                                if (nav && nav.classList.contains('active')) {
                                        nav.classList.remove('active');
                                }
                        }
                });
        });


        /* ==========================================================================
           2. STICKY NAVBAR SCROLL SHADOW / TINT EFFECT
           ========================================================================== */
        const navbar = document.getElementById('navbar');

        window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                        navbar.classList.add('navbar-scrolled');
                } else {
                        navbar.classList.remove('navbar-scrolled');
                }
        });


        /* ==========================================================================
           3. SECTION TRANSITIONS (FADE-IN ON SCROLL)
           ========================================================================== */
        const sections = document.querySelectorAll('section, .hero, .mockup-section, .cta-section');

        // Add initial transition hidden class
        sections.forEach(section => {
                section.classList.add('reveal-on-scroll');
        });

        const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                        if (entry.isIntersecting) {
                                entry.target.classList.add('revealed');
                                // Optional: Stop observing once revealed
                                observer.unobserve(entry.target);
                        }
                });
        }, {
                root: null,
                threshold: 0.12, // Triggers when 12% of the section is visible
                rootMargin: "0px 0px -50px 0px"
        });

        sections.forEach(section => {
                revealObserver.observe(section);
        });


        /* ==========================================================================
           4. MOBILE MENU TOGGLE
           ========================================================================== */
        const menuToggle = document.getElementById('menuToggle');
        const navbarNav = document.getElementById('navbarNav');

        if (menuToggle && navbarNav) {
                menuToggle.addEventListener('click', () => {
                        navbarNav.classList.toggle('active');
                        const icon = menuToggle.querySelector('i');
                        if (icon) {
                                icon.classList.toggle('bi-list');
                                icon.classList.toggle('bi-x-lg');
                        }
                });
        }

});

document.addEventListener('DOMContentLoaded', () => {

        /* ==========================================================================
           YOUTUBE DEMO VIDEO MODAL HANDLER
           ========================================================================== */
        const watchDemoBtn = document.getElementById('btnWatchDemo');
        const videoModal = document.getElementById('videoModal');
        const closeVideoModal = document.getElementById('closeVideoModal');
        const youtubeIframe = document.getElementById('youtubeIframe');

        // YouTube Video ID for "n8n WhatsApp Trigger Fix"
        const youtubeVideoId = "X6KU2gntwbU";

        if (watchDemoBtn && videoModal && youtubeIframe) {
                // Open Modal & Autoplay Video
                watchDemoBtn.addEventListener('click', () => {
                        youtubeIframe.src = `https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&rel=0`;
                        videoModal.classList.add('active');
                        document.body.style.overflow = 'hidden'; // Prevent background scrolling
                });

                // Close Modal Function
                const closeModal = () => {
                        videoModal.classList.remove('active');
                        youtubeIframe.src = ''; // Stop video playback
                        document.body.style.overflow = '';
                };

                closeVideoModal.addEventListener('click', closeModal);

                // Close when clicking overlay backdrop
                videoModal.addEventListener('click', (e) => {
                        if (e.target === videoModal) {
                                closeModal();
                        }
                });

                // Close on Escape key press
                document.addEventListener('keydown', (e) => {
                        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
                                closeModal();
                        }
                });
        }

});


// Ensure smooth scroll only intercepts internal anchor links starting with "#"
document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href');
                if (targetId && targetId.startsWith('#') && targetId.length > 1) {
                        e.preventDefault();
                        const targetElement = document.querySelector(targetId);
                        if (targetElement) {
                                targetElement.scrollIntoView({ behavior: 'smooth' });
                        }
                }
        });
});
