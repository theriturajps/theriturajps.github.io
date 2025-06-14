// Main JavaScript functionality
(function() {
    'use strict';
    
    // DOM elements
    const themeToggle = document.getElementById('theme-toggle');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const searchToggle = document.getElementById('search-toggle');
    const searchOverlay = document.getElementById('search-overlay');
    const searchClose = document.getElementById('search-close');
    const globalSearch = document.getElementById('global-search');
    const searchResults = document.getElementById('search-results');
    const siteHeader = document.getElementById('site-header');
    
    // Theme Management
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = savedTheme || (prefersDark ? 'dark' : 'light');
        
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }
    
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Add transition effect
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }
    
    // Navigation Management
    function toggleNavigation() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }
    
    function closeNavigation() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Search Management
    function openSearch() {
        searchOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        setTimeout(() => globalSearch.focus(), 100);
    }
    
    function closeSearch() {
        searchOverlay.classList.remove('active');
        document.body.style.overflow = '';
        globalSearch.value = '';
        searchResults.innerHTML = '<div class="search-placeholder"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg><p>Start typing to search articles...</p></div>';
    }
    
    // Header Scroll Effect
    let lastScrollTop = 0;
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            siteHeader.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            siteHeader.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    }
    
    // Search functionality
    function performSearch(query) {
        if (!query.trim()) {
            searchResults.innerHTML = '<div class="search-placeholder"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg><p>Start typing to search articles...</p></div>';
            return;
        }
        
        // Simulate search results (in a real implementation, this would query your posts)
        const mockResults = [
            {
                title: 'Building Scalable RESTful APIs',
                excerpt: 'A comprehensive guide to creating well-designed, scalable RESTful APIs...',
                url: '/2024/01/05/building-restful-apis/',
                category: 'Development'
            },
            {
                title: 'Essential Security Practices for Node.js',
                excerpt: 'Security practices every Node.js developer should understand...',
                url: '/2024/01/10/securing-nodejs-applications/',
                category: 'Security'
            }
        ];
        
        const filteredResults = mockResults.filter(result => 
            result.title.toLowerCase().includes(query.toLowerCase()) ||
            result.excerpt.toLowerCase().includes(query.toLowerCase())
        );
        
        if (filteredResults.length === 0) {
            searchResults.innerHTML = '<div class="search-no-results"><p>No results found for "' + query + '"</p></div>';
            return;
        }
        
        const resultsHTML = filteredResults.map(result => `
            <div class="search-result">
                <div class="search-result-category">${result.category}</div>
                <h3 class="search-result-title"><a href="${result.url}">${result.title}</a></h3>
                <p class="search-result-excerpt">${result.excerpt}</p>
            </div>
        `).join('');
        
        searchResults.innerHTML = '<div class="search-results-list">' + resultsHTML + '</div>';
    }
    
    // Filter functionality for posts
    function initPostFilters() {
        const filterTabs = document.querySelectorAll('.filter-tab');
        const postCards = document.querySelectorAll('.post-card');
        const searchInput = document.getElementById('search-input');
        
        if (!filterTabs.length || !postCards.length) return;
        
        // Filter by category
        filterTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const filter = this.dataset.filter;
                
                // Update active tab
                filterTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                // Filter posts
                postCards.forEach(card => {
                    const category = card.dataset.category || '';
                    const tags = card.dataset.tags || '';
                    const searchContent = category + ' ' + tags;
                    
                    if (filter === 'all' || searchContent.includes(filter)) {
                        card.style.display = 'block';
                        card.style.animation = 'fadeInUp 0.5s ease';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
        
        // Search functionality
        if (searchInput) {
            let searchTimeout;
            searchInput.addEventListener('input', function() {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    const query = this.value.toLowerCase().trim();
                    
                    postCards.forEach(card => {
                        const title = card.querySelector('.post-title a').textContent.toLowerCase();
                        const excerpt = card.querySelector('.post-excerpt').textContent.toLowerCase();
                        const category = card.dataset.category || '';
                        const tags = card.dataset.tags || '';
                        const searchContent = title + ' ' + excerpt + ' ' + category + ' ' + tags;
                        
                        if (!query || searchContent.includes(query)) {
                            card.style.display = 'block';
                            card.style.animation = 'fadeInUp 0.5s ease';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                    
                    // Show no results message
                    const visiblePosts = Array.from(postCards).filter(card => card.style.display !== 'none');
                    const postsGrid = document.getElementById('posts-grid');
                    let noResultsMsg = postsGrid.querySelector('.no-results-message');
                    
                    if (visiblePosts.length === 0 && query) {
                        if (!noResultsMsg) {
                            noResultsMsg = document.createElement('div');
                            noResultsMsg.className = 'no-results-message';
                            noResultsMsg.style.cssText = 'grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-secondary);';
                            noResultsMsg.innerHTML = `
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="color: var(--text-tertiary); margin-bottom: 1rem;">
                                    <circle cx="11" cy="11" r="8"/>
                                    <path d="m21 21-4.35-4.35"/>
                                </svg>
                                <h3 style="color: var(--text-primary); margin-bottom: 0.5rem;">No articles found</h3>
                                <p>Try adjusting your search terms or browse all articles.</p>
                            `;
                            postsGrid.appendChild(noResultsMsg);
                        }
                    } else if (noResultsMsg) {
                        noResultsMsg.remove();
                    }
                }, 300);
            });
        }
    }
    
    // Table of Contents
    function generateTableOfContents() {
        const tocNav = document.querySelector('.toc-nav');
        const headings = document.querySelectorAll('.prose h2, .prose h3, .prose h4');
        
        if (!tocNav || !headings.length) return;
        
        const tocList = document.createElement('ul');
        let currentLevel = 2;
        let currentList = tocList;
        const listStack = [tocList];
        
        headings.forEach((heading, index) => {
            const level = parseInt(heading.tagName.charAt(1));
            const id = heading.id || `heading-${index}`;
            const text = heading.textContent;
            
            if (!heading.id) {
                heading.id = id;
            }
            
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = `#${id}`;
            link.textContent = text;
            listItem.appendChild(link);
            
            if (level > currentLevel) {
                const newList = document.createElement('ul');
                const lastItem = currentList.lastElementChild;
                if (lastItem) {
                    lastItem.appendChild(newList);
                }
                listStack.push(newList);
                currentList = newList;
            } else if (level < currentLevel) {
                while (listStack.length > 1 && level < currentLevel) {
                    listStack.pop();
                    currentLevel--;
                }
                currentList = listStack[listStack.length - 1];
            }
            
            currentList.appendChild(listItem);
            currentLevel = level;
        });
        
        tocNav.appendChild(tocList);
        
        // Highlight current section
        const tocLinks = tocNav.querySelectorAll('a');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    tocLinks.forEach(link => link.classList.remove('active'));
                    const activeLink = tocNav.querySelector(`a[href="#${entry.target.id}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        }, { rootMargin: '-20% 0px -80% 0px' });
        
        headings.forEach(heading => observer.observe(heading));
    }
    
    // Copy to clipboard functionality
    function initCopyToClipboard() {
        window.copyToClipboard = function(text) {
            navigator.clipboard.writeText(text).then(() => {
                // Show success feedback
                const button = event.target.closest('.share-btn');
                const originalHTML = button.innerHTML;
                button.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 6L9 17L4 12"/></svg>';
                setTimeout(() => {
                    button.innerHTML = originalHTML;
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        };
    }
    
    // Smooth scrolling for anchor links
    function initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerHeight = siteHeader.offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Intersection Observer for animations
    function initAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        const animatedElements = document.querySelectorAll('.post-card, .hero-content, .section-title-wrapper');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            observer.observe(el);
        });
    }
    
    // Back to top button
    function initBackToTop() {
        const backToTopButton = document.createElement('button');
        backToTopButton.className = 'back-to-top';
        backToTopButton.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M18 15L12 9L6 15"/>
            </svg>
        `;
        backToTopButton.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: var(--color-primary);
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
            box-shadow: var(--shadow-lg);
        `;
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        document.body.appendChild(backToTopButton);
        
        // Show/hide based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.style.opacity = '1';
                backToTopButton.style.visibility = 'visible';
            } else {
                backToTopButton.style.opacity = '0';
                backToTopButton.style.visibility = 'hidden';
            }
        });
        
        // Hover effect
        backToTopButton.addEventListener('mouseenter', () => {
            backToTopButton.style.transform = 'translateY(-2px)';
            backToTopButton.style.boxShadow = 'var(--shadow-xl)';
        });
        
        backToTopButton.addEventListener('mouseleave', () => {
            backToTopButton.style.transform = 'translateY(0)';
            backToTopButton.style.boxShadow = 'var(--shadow-lg)';
        });
    }
    
    // Reading progress indicator
    function initReadingProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: var(--color-primary);
            z-index: 1001;
            transition: width 0.3s ease;
        `;
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }
    
    // Event Listeners
    function initEventListeners() {
        // Theme toggle
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }
        
        // Navigation toggle
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', toggleNavigation);
            
            // Close navigation when clicking on links
            navMenu.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', closeNavigation);
            });
        }
        
        // Search functionality
        if (searchToggle && searchOverlay) {
            searchToggle.addEventListener('click', openSearch);
        }
        
        if (searchClose) {
            searchClose.addEventListener('click', closeSearch);
        }
        
        if (searchOverlay) {
            searchOverlay.addEventListener('click', (e) => {
                if (e.target === searchOverlay) {
                    closeSearch();
                }
            });
        }
        
        if (globalSearch) {
            let searchTimeout;
            globalSearch.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    performSearch(e.target.value);
                }, 300);
            });
        }
        
        // Dropdown menus
        document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            const menu = dropdown.querySelector('.dropdown-menu');
            
            if (toggle && menu) {
                toggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    menu.style.opacity = menu.style.opacity === '1' ? '0' : '1';
                    menu.style.visibility = menu.style.visibility === 'visible' ? 'hidden' : 'visible';
                });
            }
        });
        
        // Scroll events
        window.addEventListener('scroll', handleScroll);
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Escape key closes search and navigation
            if (e.key === 'Escape') {
                closeSearch();
                closeNavigation();
            }
            
            // Ctrl/Cmd + K opens search
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                openSearch();
            }
        });
        
        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-dropdown')) {
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.style.opacity = '0';
                    menu.style.visibility = 'hidden';
                });
            }
        });
    }
    
    // Initialize everything when DOM is loaded
    function init() {
        initTheme();
        initEventListeners();
        initPostFilters();
        generateTableOfContents();
        initCopyToClipboard();
        initSmoothScrolling();
        initAnimations();
        initBackToTop();
        initReadingProgress();
        
        // Remove no-js class
        document.documentElement.classList.remove('no-js');
        
        console.log('🚀 Blog initialized successfully!');
    }
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();