---
layout: post
title: "Build a 24-Hour Expiring URL Shortener with Node.js & MongoDB"
summary: "Learn to create a secure, self-destructing URL shortener using Node.js, Express, and MongoDB. Step-by-step guide with code examples."
author: "Ritu Raj Pratap Singh"
categories: Guide
tags: [Guide, APIs]
---

**Tired of permanent short links cluttering your database?** In this hands-on guide, you'll create a time-sensitive URL shortener that automatically expires after 24 hours – perfect for sharing temporary access links, time-sensitive promotions, or confidential documents. 

## Why Build an Expiring URL Shortener?
- Enhance security for sensitive resource sharing
- Reduce database bloat from obsolete links
- Create urgency for marketing campaigns
- Perfect for password reset flows or OTP sharing

## Prerequisites
- [Node.js v18+ installed](https://nodejs.org/en/download)
- MongoDB Atlas account (free tier works)
- Basic JavaScript/[Express](https://expressjs.com/en/starter/installing.html) knowledge
- Postman or curl for testing

## Step 1: Project Setup
Create your project directory and install essential packages:

```bash
mkdir temp-url-shortener && cd temp-url-shortener
npm init -y
npm install express mongoose shortid dotenv
```

## Step 2: Database Configuration
Create `models/Url.js` for our MongoDB schema:

```javascript
const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  fullUrl: {
    type: String,
    required: true
  },
  shortId: {
    type: String,
    unique: true,
    default: () => shortid.generate()
  },
  expiresAt: {
    type: Date,
    default: () => new Date(Date.now() + 24 * 60 * 60 * 1000) // 24h expiration
  }
});

module.exports = mongoose.model('Url', urlSchema);
```

**Pro Tip:** Add indexing for better performance:
```javascript
urlSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });
```

## Step 3: Create Express Routes
Set up core functionality in `routes/index.js`:

```javascript
const express = require('express');
const router = express.Router();
const Url = require('../models/Url');

// Generate short URL
router.post('/shorten', async (req, res) => {
  try {
    const newUrl = await Url.create({ fullUrl: req.body.url });
    res.json({ shortUrl: `${process.env.BASE_URL}/${newUrl.shortId}` });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Redirect to original URL
router.get('/:shortId', async (req, res) => {
  try {
    const url = await Url.findOne({ shortId: req.params.shortId });
    
    if (!url || url.expiresAt < Date.now()) {
      return res.status(404).send('Link expired or invalid');
    }
    
    res.redirect(url.fullUrl);
  } catch (error) {
    res.status(500).send('Server error');
  }
});
```

## Step 4: Add Automatic Expiration
MongoDB's TTL (Time-To-Live) feature automatically removes expired documents:

```javascript
// Add to models/Url.js
urlSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });
```

**Security Note:** Always validate URLs:
```javascript
const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};
```

## Testing Your Shortener
Use curl to test your API:

```bash
# Create short URL
curl -X POST -H "Content-Type: application/json" \
-d '{"url":"https://your-long-url.com"}' \
http://localhost:3000/shorten

# Response: {"shortUrl":"http://your-domain/abc123"}
```

## Deployment Best Practices
1. Use environment variables for sensitive data
2. Add rate limiting (express-rate-limit)
3. Implement error handling middleware
4. Add HTTPS support
5. Set up monitoring for expired links

## FAQ: Common Questions Answered

**Q: Can I customize the expiration time?**  
A: Absolutely! Modify the `expiresAt` default value in the schema.

**Q: How to handle massive traffic spikes?**  
A: Use Redis for caching frequent requests and implement connection pooling.

**Q: Is this production-ready?**  
A: Add input validation, rate limiting, and error logging for production use.