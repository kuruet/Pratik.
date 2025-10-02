document.addEventListener('DOMContentLoaded', function() {
    
    const sidebar = document.getElementById('sidebar');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileClose = document.getElementById('mobileClose');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const scrollToTopBtn = document.getElementById('scrollToTop');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const modal = document.getElementById('portfolioModal');
    const modalClose = document.getElementById('modalClose');
    const themeToggle = document.getElementById('themeToggle');

    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-theme');
        const icon = themeToggle.querySelector('i');
        
        if (document.body.classList.contains('light-theme')) {
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'light');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'dark');
        }
    });

    mobileMenuToggle.addEventListener('click', function() {
        sidebar.classList.add('active');
    });

    mobileClose.addEventListener('click', function() {
        sidebar.classList.remove('active');
    });

    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
            
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                const sectionId = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    const statNumbers = document.querySelectorAll('.stat-number');
    let statsAnimated = false;

    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsAnimated) {
                statsAnimated = true;
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    animateCounter(stat, 0, target, 2000);
                });
            }
        });
    }, observerOptions);

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        statsObserver.observe(aboutSection);
    }

    function animateCounter(element, start, end, duration) {
        let startTime = null;
        
        function animation(currentTime) {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const current = Math.floor(progress * (end - start) + start);
            element.textContent = current + (end > 10 ? '+' : '');
            
            if (progress < 1) {
                requestAnimationFrame(animation);
            }
        }
        
        requestAnimationFrame(animation);
    }

    const skillBars = document.querySelectorAll('.skill-progress');
    let skillsAnimated = false;

    const skillsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !skillsAnimated) {
                skillsAnimated = true;
                skillBars.forEach(bar => {
                    const progress = bar.getAttribute('data-progress');
                    bar.style.setProperty('--progress-width', progress + '%');
                    bar.classList.add('animate');
                    setTimeout(() => {
                        bar.style.width = progress + '%';
                    }, 100);
                });
            }
        });
    }, observerOptions);

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }

    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const projectData = {
        '1': {
            title: 'E-Commerce Platform',
            description: 'A comprehensive full-stack e-commerce platform built with the MERN stack. Features include user authentication, product catalog with search and filtering, shopping cart functionality, secure checkout with payment integration (Stripe), order management, and admin dashboard for managing products and orders. The platform is fully responsive and optimized for performance.',
            badge: 'MERN Stack',
            image: 'assets/images/project1.svg'
        },
        '2': {
            title: 'Social Media Dashboard',
            description: 'An advanced analytics dashboard for social media management with real-time data visualization. Built with React for the frontend and Node.js/Express for the backend API. Features include user authentication, role-based access control, interactive charts and graphs using Chart.js, real-time updates with WebSockets, and comprehensive user management system.',
            badge: 'React & Node',
            image: 'assets/images/project2.svg'
        },
        '3': {
            title: 'Task Management App',
            description: 'A collaborative project management application inspired by tools like Trello and Asana. Features include drag-and-drop task boards, team collaboration tools, real-time notifications, file attachments, task comments and activity logs, and deadline tracking. Built with React, Node.js, Express, and MongoDB with Socket.io for real-time features.',
            badge: 'Full Stack',
            image: 'assets/images/project3.svg'
        },
        '4': {
            title: 'Weather Forecast App',
            description: 'A beautiful and intuitive weather application providing real-time weather information and 7-day forecasts. Features include location-based weather detection using geolocation API, search functionality for any city worldwide, detailed weather metrics (temperature, humidity, wind speed, etc.), weather alerts and notifications, and responsive design with animated weather icons.',
            badge: 'React & API',
            image: 'assets/images/project4.svg'
        }
    };

    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const project = projectData[projectId];
            
            if (project) {
                document.getElementById('modalTitle').textContent = project.title;
                document.getElementById('modalDescription').textContent = project.description;
                document.getElementById('modalBadge').textContent = project.badge;
                
                const modalImage = document.getElementById('modalImage');
                modalImage.src = project.image;
                modalImage.alt = project.title;
                modalImage.onerror = function() {
                    this.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='400'%3E%3Crect fill='%23111111' width='900' height='400'/%3E%3Crect fill='%23f9b234' x='350' y='150' width='200' height='100' rx='10'/%3E%3Ctext fill='%23ffffff' font-family='Poppins,sans-serif' font-size='24' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3E${project.title}%3C/text%3E%3C/svg%3E`;
                };
                
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    modalClose.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    const heroSection = document.getElementById('home');
    if (heroSection) {
        heroSection.classList.add('visible');
    }

    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            if (window.innerWidth > 768) {
                document.body.style.paddingTop = '0';
            }
        }
        
        lastScroll = currentScroll;
    });
});
