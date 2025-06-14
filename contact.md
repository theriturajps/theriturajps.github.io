---
layout: page
title: Contact
permalink: /contact/
description: "Get in touch with Ritu Raj Pratap Singh. Let's discuss web development projects, collaborations, or technical writing opportunities."
---

<div class="contact-page">
  <div class="contact-header">
    <h1>Let's Connect</h1>
    <p>Have a project in mind? Want to collaborate? Or just want to say hello? I'd love to hear from you!</p>
  </div>
  
  <div class="contact-content">
    <!-- Contact Form -->
    <div class="contact-form-section">
      <h2><i class="fas fa-paper-plane"></i> Send a Message</h2>
      
      <form class="contact-form" id="contact-form" action="#" method="post">
        <div class="form-group">
          <label for="name">Name *</label>
          <input type="text" id="name" name="name" required>
        </div>
        
        <div class="form-group">
          <label for="email">Email *</label>
          <input type="email" id="email" name="email" required>
        </div>
        
        <div class="form-group">
          <label for="subject">Subject *</label>
          <input type="text" id="subject" name="subject" required>
        </div>
        
        <div class="form-group">
          <label for="message">Message *</label>
          <textarea id="message" name="message" rows="6" required></textarea>
        </div>
        
        <button type="submit" class="btn btn-primary">
          <i class="fas fa-paper-plane"></i>
          Send Message
        </button>
      </form>
    </div>
    
    <!-- Contact Information -->
    <div class="contact-info-section">
      <h2><i class="fas fa-address-card"></i> Contact Information</h2>
      
      <div class="contact-info">
        <div class="contact-item">
          <div class="contact-icon">
            <i class="fas fa-envelope"></i>
          </div>
          <div class="contact-details">
            <h3>Email</h3>
            <a href="mailto:iamriturajps@gmail.com">iamriturajps@gmail.com</a>
          </div>
        </div>
        
        <div class="contact-item">
          <div class="contact-icon">
            <i class="fas fa-clock"></i>
          </div>
          <div class="contact-details">
            <h3>Response Time</h3>
            <p>Usually within 24 hours</p>
          </div>
        </div>
        
        <div class="contact-item">
          <div class="contact-icon">
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <div class="contact-details">
            <h3>Location</h3>
            <p>India (Remote Work Available)</p>
          </div>
        </div>
      </div>
      
      <!-- Social Links -->
      <div class="social-section">
        <h3>Connect on Social Media</h3>
        <div class="social-links">
          <a href="https://github.com/theriturajps" target="_blank" rel="noopener noreferrer" class="social-link github">
            <i class="fab fa-github"></i>
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/iamriturajps" target="_blank" rel="noopener noreferrer" class="social-link linkedin">
            <i class="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a href="https://twitter.com/riturajps" target="_blank" rel="noopener noreferrer" class="social-link twitter">
            <i class="fab fa-twitter"></i>
            <span>Twitter</span>
          </a>
        </div>
      </div>
      
      <!-- Services -->
      <div class="services-section">
        <h3>Services I Offer</h3>
        <ul class="services-list">
          <li><i class="fas fa-check"></i> Web Development</li>
          <li><i class="fas fa-check"></i> Backend API Development</li>
          <li><i class="fas fa-check"></i> Database Design</li>
          <li><i class="fas fa-check"></i> Technical Writing</li>
          <li><i class="fas fa-check"></i> Code Review & Consultation</li>
          <li><i class="fas fa-check"></i> Mentoring & Training</li>
        </ul>
      </div>
    </div>
  </div>
  
  <!-- FAQ Section -->
  <div class="faq-section">
    <h2><i class="fas fa-question-circle"></i> Frequently Asked Questions</h2>
    
    <div class="faq-grid">
      <div class="faq-item">
        <h3>What's your typical response time?</h3>
        <p>I usually respond to emails within 24 hours. For urgent matters, feel free to mention it in the subject line.</p>
      </div>
      
      <div class="faq-item">
        <h3>Do you work on freelance projects?</h3>
        <p>Yes! I'm open to freelance web development projects, especially those involving backend development and API creation.</p>
      </div>
      
      <div class="faq-item">
        <h3>Can you help with technical writing?</h3>
        <p>Absolutely! I enjoy creating technical documentation, tutorials, and blog posts on web development topics.</p>
      </div>
      
      <div class="faq-item">
        <h3>Are you available for mentoring?</h3>
        <p>I'm happy to help aspiring developers with guidance on web development, career advice, and technical skills.</p>
      </div>
    </div>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Create mailto link
    const mailtoLink = `mailto:iamriturajps@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Thank you for your message! Your email client should open now. If not, please email me directly at iamriturajps@gmail.com');
    
    // Reset form
    contactForm.reset();
  });
});
</script>

<style>
.contact-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.contact-header {
  text-align: center;
  margin-bottom: 3rem;
}

.contact-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.contact-header p {
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.contact-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

.contact-form-section,
.contact-info-section {
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

.contact-form-section h2,
.contact-info-section h2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.contact-form {
  display: grid;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 500;
  color: var(--text-primary);
}

.form-group input,
.form-group textarea {
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background: var(--bg-primary);
  color: var(--text-primary);
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent-color);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.contact-info {
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.contact-icon {
  width: 40px;
  height: 40px;
  background: var(--accent-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-details h3 {
  margin: 0 0 0.25rem 0;
  color: var(--text-primary);
  font-size: 1rem;
}

.contact-details p,
.contact-details a {
  margin: 0;
  color: var(--text-secondary);
  text-decoration: none;
}

.contact-details a:hover {
  color: var(--accent-color);
}

.social-section {
  margin-bottom: 2rem;
}

.social-section h3 {
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.social-links {
  display: grid;
  gap: 0.75rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  text-decoration: none;
  color: var(--text-primary);
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--accent-color);
  color: white;
  transform: translateX(5px);
}

.social-link i {
  font-size: 1.2rem;
}

.services-section h3 {
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.services-list {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 0.5rem;
}

.services-list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
}

.services-list i {
  color: var(--accent-color);
}

.faq-section {
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

.faq-section h2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  color: var(--text-primary);
  text-align: center;
  justify-content: center;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.faq-item {
  background: var(--bg-primary);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.faq-item h3 {
  margin: 0 0 1rem 0;
  color: var(--text-primary);
  font-size: 1.1rem;
}

.faq-item p {
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.5;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .contact-header h1 {
    font-size: 2rem;
  }
  
  .faq-grid {
    grid-template-columns: 1fr;
  }
}
</style>