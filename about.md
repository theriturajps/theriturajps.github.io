---
layout: page
title: About Ritu Raj Pratap Singh
permalink: /about/
description: "Learn about Ritu Raj Pratap Singh - Full-Stack Developer, Tech Writer, and MCA student specializing in web development and backend technologies."
---

<div class="about-page">
  <div class="about-hero">
    <div class="about-content">
      <h1>Hello, I'm Ritu Raj Pratap Singh</h1>
      <p class="about-subtitle">Full-Stack Developer & Tech Writer</p>
      <p class="about-description">
        Passionate about creating efficient, scalable web solutions and sharing knowledge through comprehensive technical writing.
      </p>
    </div>
    <div class="about-image">
      <img src="{{ site.baseurl }}/assets/img/profile.jpg" alt="Ritu Raj Pratap Singh" loading="lazy">
    </div>
  </div>
  
  <div class="about-sections">
    <!-- Background Section -->
    <section class="about-section">
      <h2><i class="fas fa-user"></i> Background</h2>
      <p>
        Currently pursuing MCA after completing B.Sc. IT (2025), I specialize in backend and web development with a focus on creating robust, scalable applications. My journey in technology has been driven by curiosity and a passion for solving complex problems through code.
      </p>
    </section>
    
    <!-- Skills Section -->
    <section class="about-section">
      <h2><i class="fas fa-code"></i> Technical Skills</h2>
      
      <div class="skills-grid">
        <div class="skill-category">
          <h3>Backend Development</h3>
          <div class="skills-list">
            <span class="skill">Node.js</span>
            <span class="skill">Express.js</span>
            <span class="skill">REST APIs</span>
            <span class="skill">CRUD Operations</span>
            <span class="skill">Python</span>
          </div>
        </div>
        
        <div class="skill-category">
          <h3>Frontend Technologies</h3>
          <div class="skills-list">
            <span class="skill">JavaScript</span>
            <span class="skill">HTML5</span>
            <span class="skill">CSS3</span>
            <span class="skill">Responsive Design</span>
            <span class="skill">jQuery</span>
          </div>
        </div>
        
        <div class="skill-category">
          <h3>Databases & Tools</h3>
          <div class="skills-list">
            <span class="skill">MongoDB</span>
            <span class="skill">MySQL</span>
            <span class="skill">Git</span>
            <span class="skill">Linux</span>
            <span class="skill">Windows</span>
          </div>
        </div>
        
        <div class="skill-category">
          <h3>Other Skills</h3>
          <div class="skills-list">
            <span class="skill">Technical Writing</span>
            <span class="skill">Microsoft Excel</span>
            <span class="skill">Problem Solving</span>
            <span class="skill">System Design</span>
          </div>
        </div>
      </div>
    </section>
    
    <!-- What I Do Section -->
    <section class="about-section">
      <h2><i class="fas fa-laptop-code"></i> What I Do</h2>
      
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">
            <i class="fas fa-server"></i>
          </div>
          <h3>Backend Development</h3>
          <p>Building robust APIs and server-side applications using Node.js, Express, and modern backend technologies.</p>
        </div>
        
        <div class="service-card">
          <div class="service-icon">
            <i class="fas fa-globe"></i>
          </div>
          <h3>Web Development</h3>
          <p>Creating responsive, user-friendly websites and web applications with modern frontend technologies.</p>
        </div>
        
        <div class="service-card">
          <div class="service-icon">
            <i class="fas fa-database"></i>
          </div>
          <h3>Database Design</h3>
          <p>Designing efficient database schemas and implementing data management solutions for various applications.</p>
        </div>
        
        <div class="service-card">
          <div class="service-icon">
            <i class="fas fa-pen-nib"></i>
          </div>
          <h3>Technical Writing</h3>
          <p>Creating comprehensive tutorials, guides, and documentation to help developers learn and grow.</p>
        </div>
      </div>
    </section>
    
    <!-- Blog Focus Section -->
    <section class="about-section">
      <h2><i class="fas fa-blog"></i> Blog Focus</h2>
      <p>
        Through this blog, I share practical insights and tutorials on:
      </p>
      <ul class="focus-list">
        <li><strong>Web Development:</strong> Modern techniques and best practices</li>
        <li><strong>Backend Technologies:</strong> Node.js, Express, and API development</li>
        <li><strong>JavaScript:</strong> From basics to advanced concepts</li>
        <li><strong>Database Management:</strong> MongoDB, MySQL, and data modeling</li>
        <li><strong>Development Tools:</strong> Git, Linux, and productivity tips</li>
        <li><strong>Career Guidance:</strong> Tips for aspiring developers</li>
      </ul>
    </section>
    
    <!-- Contact Section -->
    <section class="about-section">
      <h2><i class="fas fa-envelope"></i> Let's Connect</h2>
      <p>
        I'm always interested in discussing new opportunities, collaborating on projects, or simply connecting with fellow developers. Feel free to reach out!
      </p>
      
      <div class="contact-links">
        <a href="mailto:iamriturajps@gmail.com" class="contact-link">
          <i class="fas fa-envelope"></i>
          Email Me
        </a>
        <a href="https://github.com/theriturajps" target="_blank" rel="noopener noreferrer" class="contact-link">
          <i class="fab fa-github"></i>
          GitHub
        </a>
        <a href="https://linkedin.com/in/iamriturajps" target="_blank" rel="noopener noreferrer" class="contact-link">
          <i class="fab fa-linkedin"></i>
          LinkedIn
        </a>
        <a href="https://twitter.com/riturajps" target="_blank" rel="noopener noreferrer" class="contact-link">
          <i class="fab fa-twitter"></i>
          Twitter
        </a>
      </div>
    </section>
  </div>
</div>

<style>
.about-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.about-hero {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
  align-items: center;
}

.about-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.about-subtitle {
  font-size: 1.3rem;
  color: var(--accent-color);
  font-weight: 600;
  margin-bottom: 1rem;
}

.about-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.about-image {
  text-align: center;
}

.about-image img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--accent-color);
}

.about-sections {
  display: grid;
  gap: 3rem;
}

.about-section {
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

.about-section h2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  font-size: 1.5rem;
}

.about-section p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-category h3 {
  margin-bottom: 1rem;
  color: var(--text-primary);
  font-size: 1.1rem;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill {
  padding: 0.4rem 0.8rem;
  background: var(--accent-color);
  color: white;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.service-card {
  text-align: center;
  padding: 1.5rem;
  background: var(--bg-primary);
  border-radius: 8px;
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-4px);
}

.service-icon {
  font-size: 2.5rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
}

.service-card h3 {
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.service-card p {
  color: var(--text-secondary);
  line-height: 1.5;
}

.focus-list {
  list-style: none;
  padding: 0;
}

.focus-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-secondary);
}

.focus-list li:last-child {
  border-bottom: none;
}

.focus-list strong {
  color: var(--text-primary);
}

.contact-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--accent-color);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.contact-link:hover {
  background: var(--accent-color-dark);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .about-hero {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  
  .about-content h1 {
    font-size: 2rem;
  }
  
  .skills-grid,
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-links {
    justify-content: center;
  }
}
</style>