// Theme Management
class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'light';
    this.init();
  }

  init() {
    this.setTheme(this.theme);
    this.bindEvents();
  }

  setTheme(theme) {
    this.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.updateThemeIcons();
  }

  toggleTheme() {
    const newTheme = this.theme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  updateThemeIcons() {
    const icons = document.querySelectorAll('#theme-icon, .theme-toggle i');
    icons.forEach(icon => {
      icon.className = this.theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    });
  }

  bindEvents() {
    const toggleButtons = document.querySelectorAll('.theme-toggle');
    toggleButtons.forEach(button => {
      button.addEventListener('click', () => this.toggleTheme());
    });
  }
}

// Search Functionality
class SearchManager {
  constructor() {
    this.postsData = [];
    this.searchInput = document.getElementById('search-input');
    this.searchResults = document.getElementById('search-results');
    this.searchResultsContainer = document.getElementById('search-results-container');
    this.postsGrid = document.getElementById('posts-grid');
    this.clearButton = document.getElementById('search-clear');
    
    if (this.searchInput) {
      this.init();
    }
  }

  async init() {
    await this.loadPostsData();
    this.bindEvents();
  }

  async loadPostsData() {
    try {
      const response = await fetch('/articles.json');
      if (!response.ok) throw new Error('Failed to load articles');
      
      this.postsData = await response.json();
      
      if (this.searchInput) {
        this.searchInput.placeholder = `Search among ${this.postsData.length} articles...`;
        this.searchInput.disabled = false;
      }
    } catch (error) {
      console.error('Error loading posts data:', error);
      if (this.searchInput) {
        this.searchInput.placeholder = 'Search unavailable';
      }
    }
  }

  bindEvents() {
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
    }
    
    if (this.clearButton) {
      this.clearButton.addEventListener('click', () => this.clearSearch());
    }
  }

  handleSearch(query) {
    const trimmedQuery = query.toLowerCase().trim();
    
    if (this.clearButton) {
      this.clearButton.style.display = trimmedQuery ? 'block' : 'none';
    }
    
    if (!trimmedQuery) {
      this.showAllPosts();
      return;
    }
    
    const results = this.postsData.filter(post => 
      post.title.toLowerCase().includes(trimmedQuery) || 
      post.excerpt.toLowerCase().includes(trimmedQuery)
    );
    
    this.showSearchResults(results, trimmedQuery);
  }

  showSearchResults(results, query) {
    if (!this.searchResults || !this.searchResultsContainer || !this.postsGrid) return;
    
    this.postsGrid.style.display = 'none';
    this.searchResults.style.display = 'block';
    
    if (results.length === 0) {
      this.searchResultsContainer.innerHTML = `
        <div class="no-results">
          <i class="fas fa-search"></i>
          <h3>No articles found</h3>
          <p>No articles found for "${query}". Try different keywords.</p>
        </div>
      `;
      return;
    }
    
    const resultsHTML = results.map(post => this.createPostHTML(post)).join('');
    this.searchResultsContainer.innerHTML = resultsHTML;
  }

  createPostHTML(post) {
    const imageHTML = post.image ? 
      `<div class="post-image">
         <a href="${post.url}">
           <img src="${post.image}" alt="${post.title}" loading="lazy">
         </a>
       </div>` : '';
    
    return `
      <article class="post-card">
        ${imageHTML}
        <div class="post-content">
          <div class="post-meta">
            <time><i class="far fa-calendar"></i> ${post.date}</time>
          </div>
          <h3 class="post-title">
            <a href="${post.url}">${post.title}</a>
          </h3>
          <p class="post-excerpt">${post.excerpt}</p>
          <a href="${post.url}" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
        </div>
      </article>
    `;
  }

  showAllPosts() {
    if (this.postsGrid && this.searchResults) {
      this.postsGrid.style.display = 'grid';
      this.searchResults.style.display = 'none';
    }
  }

  clearSearch() {
    if (this.searchInput) {
      this.searchInput.value = '';
    }
    if (this.clearButton) {
      this.clearButton.style.display = 'none';
    }
    this.showAllPosts();
  }
}

// Smooth Scrolling
class SmoothScroll {
  constructor() {
    this.init();
  }

  init() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
}

// Back to Top Button
class BackToTop {
  constructor() {
    this.button = document.getElementById('back-to-top');
    if (this.button) {
      this.init();
    }
  }

  init() {
    this.bindEvents();
    this.handleScroll(); // Initial check
  }

  bindEvents() {
    window.addEventListener('scroll', () => this.handleScroll());
    this.button.addEventListener('click', () => this.scrollToTop());
  }

  handleScroll() {
    if (window.pageYOffset > 300) {
      this.button.classList.add('visible');
    } else {
      this.button.classList.remove('visible');
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

// Mobile Menu
class MobileMenu {
  constructor() {
    this.toggle = document.getElementById('mobile-menu-toggle');
    this.menu = document.getElementById('navbar-menu');
    
    if (this.toggle && this.menu) {
      this.init();
    }
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    this.toggle.addEventListener('click', () => this.toggleMenu());
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.navbar')) {
        this.closeMenu();
      }
    });
    
    // Close menu when clicking on nav links
    this.menu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => this.closeMenu());
    });
  }

  toggleMenu() {
    this.menu.classList.toggle('active');
    this.toggle.classList.toggle('active');
  }

  closeMenu() {
    this.menu.classList.remove('active');
    this.toggle.classList.remove('active');
  }
}

// Performance Monitoring
class PerformanceMonitor {
  constructor() {
    this.init();
  }

  init() {
    // Monitor page load performance
    window.addEventListener('load', () => {
      if ('performance' in window) {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
      }
    });

    // Monitor Core Web Vitals
    this.monitorCoreWebVitals();
  }

  monitorCoreWebVitals() {
    // Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  }
}

// Lazy Loading Images
class LazyLoader {
  constructor() {
    this.images = document.querySelectorAll('img[loading="lazy"]');
    this.init();
  }

  init() {
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.add('loaded');
            this.observer.unobserve(img);
          }
        });
      });

      this.images.forEach(img => this.observer.observe(img));
    }
  }
}

// Reading Progress Bar
class ReadingProgress {
  constructor() {
    this.progressBar = this.createProgressBar();
    this.init();
  }

  createProgressBar() {
    const bar = document.createElement('div');
    bar.className = 'reading-progress';
    bar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: 3px;
      background: var(--accent-color);
      z-index: 1000;
      transition: width 0.3s ease;
    `;
    document.body.appendChild(bar);
    return bar;
  }

  init() {
    if (document.querySelector('.post-content')) {
      window.addEventListener('scroll', () => this.updateProgress());
    }
  }

  updateProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    this.progressBar.style.width = scrolled + '%';
  }
}

// Copy to Clipboard Enhancement
class ClipboardManager {
  constructor() {
    this.init();
  }

  init() {
    // Add copy buttons to code blocks
    document.querySelectorAll('pre code').forEach((codeBlock, index) => {
      const button = this.createCopyButton(codeBlock, index);
      codeBlock.parentNode.style.position = 'relative';
      codeBlock.parentNode.appendChild(button);
    });
  }

  createCopyButton(codeBlock, index) {
    const button = document.createElement('button');
    button.className = 'copy-code-btn';
    button.innerHTML = '<i class="fas fa-copy"></i>';
    button.style.cssText = `
      position: absolute;
      top: 10px;
      right: 10px;
      background: var(--bg-secondary);
      border: 1px solid var(--border-color);
      border-radius: 4px;
      padding: 8px;
      cursor: pointer;
      opacity: 0.7;
      transition: opacity 0.3s ease;
    `;

    button.addEventListener('click', () => this.copyCode(codeBlock, button));
    return button;
  }

  async copyCode(codeBlock, button) {
    const code = codeBlock.textContent;
    
    try {
      await navigator.clipboard.writeText(code);
      button.innerHTML = '<i class="fas fa-check"></i>';
      button.style.background = 'var(--accent-color)';
      button.style.color = 'white';
      
      setTimeout(() => {
        button.innerHTML = '<i class="fas fa-copy"></i>';
        button.style.background = 'var(--bg-secondary)';
        button.style.color = 'var(--text-primary)';
      }, 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  }
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();
  new SearchManager();
  new SmoothScroll();
  new BackToTop();
  new MobileMenu();
  new PerformanceMonitor();
  new LazyLoader();
  new ReadingProgress();
  new ClipboardManager();
});

// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ThemeManager,
    SearchManager,
    SmoothScroll,
    BackToTop,
    MobileMenu
  };
}