// Toggle mobile menu
        function toggleMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.toggle('active');
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Close mobile menu after clicking
                    const navLinks = document.getElementById('navLinks');
                    navLinks.classList.remove('active');
                }
            });
        });

        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all scroll animation elements
        document.querySelectorAll('.scroll-animation').forEach(el => {
            observer.observe(el);
        });

        // Card hover effects
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // News item click animation
        document.querySelectorAll('.news-item').forEach(item => {
            item.addEventListener('click', function() {
                this.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 100);
            });
        });

        // Header scroll effect
        // let lastScrollY = window.scrollY;
        // const header = document.querySelector('header');

        // window.addEventListener('scroll', () => {
        //     const currentScrollY = window.scrollY;
            
        //     if (currentScrollY > 100) {
        //         header.style.background = '#0771A3';
        //         header.style.backdropFilter = 'blur(10px)';
        //     } else {
        //         header.style.background = 'linear-gradient(135deg, 0771A3 0%, #3498db 100%)';
        //         header.style.backdropFilter = 'none';
        //     }
            
        //     lastScrollY = currentScrollY;
        // });

        // Loading animation
        window.addEventListener('load', () => {
            document.body.style.opacity = '1';
        });

        // Form validation and interaction (if you add forms later)
        function validateForm(formData) {
            const errors = [];
            
            if (!formData.name || formData.name.length < 2) {
                errors.push('El nombre debe tener al menos 2 caracteres');
            }
            
            if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
                errors.push('Por favor ingresa un email válido');
            }
            
            return errors;
        }

        // Utility functions
        function showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.textContent = message;
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 15px 20px;
                background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
                color: white;
                border-radius: 5px;
                z-index: 1000;
                transform: translateX(100%);
                transition: transform 0.3s ease;
            `;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.transform = 'translateX(0)';
            }, 100);
            
            setTimeout(() => {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
        }

        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            // Add any initialization code here
            console.log('Página de Facultad de Actividad Física cargada correctamente');
            
            // Add click tracking for analytics (optional)
            document.querySelectorAll('a, button').forEach(element => {
                element.addEventListener('click', function() {
                    // Track clicks here if needed
                });
            });
        });