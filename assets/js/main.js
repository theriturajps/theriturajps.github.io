// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const searchInput = document.getElementById('search-input');
    const postsGrid = document.getElementById('posts-grid');

    // Theme toggle
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Add smooth transition effect
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    });

    // Mobile navigation toggle
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Search functionality
    if (searchInput && postsGrid) {
        const posts = Array.from(postsGrid.querySelectorAll('.post-card'));
        
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            
            posts.forEach(post => {
                const title = post.querySelector('.post-title a').textContent.toLowerCase();
                const excerpt = post.querySelector('.post-excerpt').textContent.toLowerCase();
                const tags = post.getAttribute('data-tags') ? post.getAttribute('data-tags').toLowerCase() : '';
                const category = post.getAttribute('data-category') ? post.getAttribute('data-category').toLowerCase() : '';
                
                const searchContent = `${title} ${excerpt} ${tags} ${category}`;
                
                if (searchContent.includes(searchTerm) || searchTerm === '') {
                    post.style.display = 'block';
                    post.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    post.style.display = 'none';
                }
            });
            
            // Show "No results" message if no posts are visible
            const visiblePosts = posts.filter(post => post.style.display !== 'none');
            const existingMessage = postsGrid.querySelector('.no-results');
            
            if (visiblePosts.length === 0 && searchTerm !== '') {
                if (!existingMessage) {
                    const noResultsMessage = document.createElement('div');
                    noResultsMessage.className = 'no-results';
                    noResultsMessage.innerHTML = `
                        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                            <svg width="64" height="64" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: var(--text-muted); margin-bottom: 1rem;">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                            <h3 style="color: var(--text-primary); margin-bottom: 0.5rem;">No posts found</h3>
                            <p style="color: var(--text-muted);">Try adjusting your search terms or browse all posts.</p>
                        </div>
                    `;
                    postsGrid.appendChild(noResultsMessage);
                }
            } else if (existingMessage) {
                existingMessage.remove();
            }
        });
    }

    // Smooth scrolling for anchor links
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

    // Header scroll effect
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Intersection Observer for animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);

    // Observe all post cards and sections
    const animatedElements = document.querySelectorAll('.post-card, .section-header, .hero-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });

    // Copy to clipboard functionality for code blocks
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        const pre = block.parentElement;
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.innerHTML = `
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
        `;
        
        button.addEventListener('click', async function() {
            try {
                await navigator.clipboard.writeText(block.textContent);
                button.innerHTML = `
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                `;
                setTimeout(() => {
                    button.innerHTML = `
                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                        </svg>
                    `;
                }, 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        });
        
        pre.style.position = 'relative';
        pre.appendChild(button);
    });

    // Reading progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: var(--primary-color);
        z-index: 1001;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });

    // Back to top button
    const backToTopButton = document.createElement('button');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = `
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
    `;
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-color);
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    document.body.appendChild(backToTopButton);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });
});

// Additional styles for copy button and back to top
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    .copy-button {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: var(--card-background);
        border: 1px solid var(--border-color);
        border-radius: 6px;
        padding: 0.5rem;
        cursor: pointer;
        color: var(--text-primary);
        transition: all 0.3s ease;
        opacity: 0.7;
    }
    
    .copy-button:hover {
        opacity: 1;
        background: var(--primary-color);
        color: white;
    }
    
    .back-to-top:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
    }
    
    @media (max-width: 768px) {
        .back-to-top {
            bottom: 1rem;
            right: 1rem;
            width: 45px;
            height: 45px;
        }
    }
`;
document.head.appendChild(additionalStyles);