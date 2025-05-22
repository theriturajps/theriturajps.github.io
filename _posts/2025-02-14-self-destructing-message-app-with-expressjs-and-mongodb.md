---
layout: post
title: "Build a Self-Destructing Message App with Express.js & MongoDB"
description: "Learn to build a secure self-destructing message app using Express.js and MongoDB. Step-by-step guide with code examples for developers."
author: "Ritu Raj Pratap Singh"
categories: Guide
tags: [APIs, Express, MongoDB]
---

**Ephemeral messaging** is booming, with users prioritizing privacy. In this tutorial, you’ll create a self-destructing message app that automatically deletes messages after they’re viewed. Perfect for developers seeking to enhance their full-stack skills while addressing real-world privacy concerns.

## Why Build a Self-Destructing Message App?
- **Privacy Demand**: Users want control over sensitive data.
- **Skill Boost**: Master [Express.js routing](https://expressjs.com/en/guide/routing.html), [MongoDB TTL indexes](https://www.mongodb.com/docs/manual/core/index-ttl/), and frontend integration.
- **Portfolio Potential**: Stand out with a unique project that showcases security awareness.

## Prerequisites
- Basic [Node.js](https://nodejs.org/docs/latest/api/)/[Express.js](https://expressjs.com/en/starter/installing.html) knowledge
- [MongoDB](https://www.mongodb.com/) installed or a [free Atlas account](https://www.mongodb.com/products/platform/atlas-database)
- REST API familiarity
- Terminal/command line experience

## Step 1: Project Setup

### Initialize Express.js
```bash
mkdir self-destruct-app && cd self-destruct-app
npm init -y
npm install express mongoose dotenv
```

### Folder Structure
```
├── models/Message.js
├── routes/messages.js
├── views/ (for frontend)
├── app.js
└── .env
```

## Step 2: Configure MongoDB with TTL Indexes

MongoDB’s **TTL (Time-To-Live)** feature automatically deletes documents after a set time.  

1. **Create a Message Schema** (`models/Message.js`):
```javascript
const messageSchema = new mongoose.Schema({
  content: { type: String, required: true },
  expiresAt: { type: Date, default: Date.now, index: { expires: '1m' } }
});
```

2. **Set Expiration Logic**:  
The `expires` property (e.g., `'1m'` for 1 minute) determines when the message self-destructs.

## Step 3: Create API Endpoints

### POST Route to Save Messages
```javascript
// routes/messages.js
router.post('/', async (req, res) => {
  try {
    const newMessage = await Message.create({ content: req.body.content });
    res.json({ id: newMessage._id, expiresAt: newMessage.expiresAt });
  } catch (error) {
    res.status(500).send('Error saving message');
  }
});
```

### GET Route to Retrieve and Delete Messages
```javascript
router.get('/:id', async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    if (!message) return res.status(404).send('Message expired or not found');
    
    await Message.deleteOne({ _id: req.params.id }); // Immediate deletion after fetch
    res.json({ content: message.content });
  } catch (error) {
    res.status(500).send('Error retrieving message');
  }
});
```

## Step 4: Build the Frontend

Create a simple HTML/JS interface (`views/index.html`):

```html
<form id="messageForm">
  <textarea id="content" required></textarea>
  <button type="submit">Create Self-Destruct Link</button>
</form>

<script>
  document.getElementById('messageForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const response = await fetch('/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: e.target.content.value })
    });
    const { id } = await response.json();
    alert(`Share this link (expires in 1 minute): ${window.location.href}${id}`);
  });
</script>
```

## Step 5: Test Your App

1. Start the server: `node app.js`
2. Visit `http://localhost:3000`, submit a message, and share the generated link.
3. When the recipient opens the link, the message displays once and then deletes.

## Security Best Practices
- **HTTPS**: Deploy with HTTPS to encrypt data in transit.
- **Input Sanitization**: Use libraries like `express-validator` to prevent XSS attacks.
- **Rate Limiting**: Block brute-force attacks with `express-rate-limit`.

## Use Cases for Your App
- **Sensitive Data Sharing**: Passwords, confidential documents.
- **Ephemeral Notifications**: Time-bound alerts or updates.
- **Privacy-First Chat**: Add real-time features with Socket.io.

## Troubleshooting Common Issues
- **TTL Not Working**: Ensure MongoDB’s TTL worker is running (runs every 60 seconds).
- **CORS Errors**: Use the `cors` middleware if hosting frontend separately.
- **Deletion Failures**: Add error logging to your GET route.

## Conclusion

You’ve built a self-destructing message app that combines Express.js for backend logic, MongoDB for automated data deletion, and a minimalist frontend. This project demonstrates your ability to solve privacy-centric challenges—a valuable addition to your developer portfolio.

**Next Steps**:
- Add user [authentication](https://github.com/expressjs/express/tree/master/examples/auth) with Passport.js
- Implement end-to-end encryption using [crypto](https://www.npmjs.com/package/crypto-js)
- Extend expiration time options (e.g., 5 minutes, 1 hour)