---
layout: post
title: "Create a Professional Contact Form with Telegram Bot API (No Node.js Required)"
description: "Step-by-step guide to create a secure, serverless Telegram contact form using JavaScript. Perfect step-by-step guide for beginners"
author: "Ritu Raj Pratap Singh"
categories: Guide
tags: [APIs, Telegram]
---

**Tired of paying for server hosting just to handle contact forms?** In this guide, you’ll learn to create a sleek, spam-resistant contact form that sends messages directly to your Telegram inbox using pure JavaScript — **no backend setup or monthly fees**. Ideal for portfolios, static sites, or small businesses!

![Telegram Bot API Contact Form](https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)

## Why Telegram Bots Are Perfect for Contact Forms

- **Free forever**: No Heroku, Firebase, or AWS bills.
- **Zero maintenance**: Telegram handles uptime and security.
- **Mobile-friendly**: Receive messages instantly on your phone.
- **SEO-friendly**: Lightweight code improves page load speed.

## Step 1: Set Up Your Telegram Bot

1. Open Telegram and search for [@BotFather](https://t.me/BotFather) (Telegram’s official bot creator).
2. Type `/newbot` and follow the prompts to name your bot (e.g., `MyPortfolioBot`).
3. Copy the **API token** provided (looks like `123456:ABCdef1234GHIklmNOPqr56`).

🔒 **Pro Tip**: This token is like a password. For testing, we’ll use it temporarily, but **never expose it publicly on live websites**. Later, I’ll show you how to secure it.

## Step 2: Find Your Telegram Chat ID

1. Start a chat with your new bot and send a `/start` message.
2. Visit this URL in your browser (replace `YOUR_TOKEN`) with the API token:

   ```bash
   https://api.telegram.org/botYOUR_TOKEN/getUpdates
   ```
3. Look for the `"chat":{"id":-123456789}` value in the JSON response. This is your Chat ID.

## Step 3: Design the HTML Form (Beginner-Friendly)

```html
<!-- Simple, clean form design -->
<form id="telegramForm" class="contact-form">
  <div class="form-group">
    <input type="text" name="name" placeholder="Your Name" required>
  </div>
  <div class="form-group">
    <input type="email" name="email" placeholder="your@email.com" required>
  </div>
  <div class="form-group">
    <textarea name="message" rows="5" placeholder="How can I help you?" required></textarea>
  </div>
  <button type="submit" class="submit-btn">Send Message</button>
</form>
<p id="formStatus"></p>

<style>
  .contact-form { max-width: 500px; margin: 0 auto; }
  .form-group { margin-bottom: 1rem; }
  input, textarea { width: 100%; padding: 0.5rem; border: 1px solid #ddd; }
  .submit-btn { background: #0088cc; color: white; padding: 0.75rem 1.5rem; border: none; cursor: pointer; }
</style>
```

## Step 4: Add JavaScript to Send Messages to Telegram

```javascript
const form = document.getElementById('telegramForm');
const statusEl = document.getElementById('formStatus');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  statusEl.textContent = 'Sending...';

  // Replace these with your credentials
  const BOT_TOKEN = '123456:ABCdef1234GHIklmNOPqr56';
  const CHAT_ID = '-123456789';

  const formData = new FormData(form);
  const message = `
    New Contact Request 🚀
    Name: ${formData.get('name')}
    Email: ${formData.get('email')}
    Message: ${formData.get('message')}
  `;

  try {
    const apiUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message
      })
    });

    if (response.ok) {
      statusEl.textContent = 'Message sent! ✅';
      form.reset();
    } else {
      statusEl.textContent = 'Failed to send. ❌';
    }
  } catch (error) {
    statusEl.textContent = 'Network error. Check your connection.';
  }
});
```

## Step 5: Secure Your Bot Token (Must-Do!)

Exposing your bot token in client-side code lets anyone spam your bot. Here’s how to fix it:

### **Option A: Use Netlify Functions (Free)**

1. **Create a Netlify account and set up a site.**

   * You can deploy a simple site from GitHub or start from a template on [netlify.com](https://www.netlify.com/).

2. **Create a Netlify function file at `netlify/functions/send-telegram.js`:**

   ```javascript
   exports.handler = async (event) => {
     const { name, email, message } = JSON.parse(event.body);
     const text = `New message from ${name} (${email}): ${message}`;
     
     await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({
         chat_id: process.env.CHAT_ID,
         text: text
       })
     });
     
     return {
       statusCode: 200,
       body: JSON.stringify({ success: true })
     };
   };
   ```

3. **Set up environment variables in Netlify:**

   * Go to your Netlify **Site Settings → Environment Variables**.
   * Add:

     * `BOT_TOKEN` = your Telegram bot token
     * `CHAT_ID` = the chat ID from the `/getUpdates` step

### Option B: Add Google reCAPTCHA

1. Get keys from [Google reCAPTCHA](https://www.google.com/recaptcha).
2. Add to your HTML:

  ```html
  <div class="g-recaptcha" data-sitekey="YOUR_SITE_KEY"></div>
  ```
3. Validate the CAPTCHA in your JavaScript before sending the message.

## Step 6: Test and Debug

1. **Test locally**: Open your HTML file in a browser and submit a message.
2. **Check Telegram**: You’ll receive the message in seconds.
3. **Common issues**:
   - Token invalid? Re-generate via @BotFather.
   - No messages? Double-check your Chat ID and API URL.

## FAQs

**Q: Can I customize the Telegram message format?**  
A: Absolutely! Modify the `message` variable in the JavaScript to include emojis, links, or formatted text.

**Q: Will this work on WordPress/Shopify/Wix?**  
A: Yes! Embed the HTML/JS code in any platform that allows custom code blocks.

**Q: How do I handle file uploads?**  
A: Use Telegram’s `sendDocument` API method. Users can upload files up to 20MB.