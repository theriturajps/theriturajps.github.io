---
layout: post
title: "Build a Professional Morse Code API Using Express.js : Step-by-Step Guide"
summary: "Learn to create a professional Morse Code API using Express.js. Step-by-step guide covers setup, encoding, testing, and deployment for developers."
author: "Ritu Raj Pratap Singh"
categories: Guide
tags: [Guide, APIs]
---

**Morse code**, the classic communication system invented in the 1830s, is making a comeback in modern tech projects. In this hands-on tutorial, you'll learn to build a **professional REST API** that converts text to Morse code using **Express.js**. This project is perfect for developers looking to enhance their backend skills while creating something uniquely practical.

![Morse Code API Illustration](https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)

## Why Build a Morse Code API?
- **Stand out in interviews** with an unconventional project
- Master **REST principles**, middleware, and error handling
- Explore real-world use cases for legacy systems integration
- Create a **portfolio piece** that combines history and tech

## Prerequisites
- Basic knowledge of [Node.js](https://nodejs.org/docs/latest/api/)/[Express.js](https://expressjs.com/en/starter/installing.html)
- [Node.js v18+ installed](https://nodejs.org/en/download)
- REST client like Postman
- A code editor ([VS Code](https://code.visualstudio.com/) recommended)

## Step 1: Project Setup
Initialize your Express.js application:
```bash
mkdir morse-api && cd morse-api
npm init -y
npm install express dotenv morgan helmet
```

Create the core server file:
```javascript
// server.js
const express = require('express');
const app = express();
app.use(express.json());
app.use(require('morgan')('dev'));
app.use(require('helmet')());

app.get('/', (req, res) => {
  res.json({ message: 'Morse API Ready 📻' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

## Step 2: Create the Morse Encoder

### Morse Dictionary Setup
```javascript
const morseCode = {
  'A': '.-', 'B': '-...', 'C': '-.-.', /* Full alphabet */
  '1': '.----', '2': '..---', /* Numbers 0-9 */
  ' ': '/' // Word separation
};
```

**NOTE:** Get complete morse code from the gist "[morseCode.json](https://gist.github.com/theriturajps/96dd63555f2e754a68bc813dbe519e22)".

### Encoding Logic with Validation
```javascript
function textToMorse(text) {
  if(typeof text !== 'string') throw new Error('Invalid input type');
  
  return text.toUpperCase().split('').map(char => {
    if(!morseCode[char]) throw new Error(`Unsupported character: ${char}`);
    return morseCode[char];
  }).join(' ');
}
```

## Step 3: Build the API Endpoint

### Robust POST Endpoint
```javascript
app.post('/encode', (req, res) => {
  try {
    const { text } = req.body;
    
    if(!text) return res.status(400).json({ error: 'Text parameter required' });
    if(text.length > 100) return res.status(413).json({ error: 'Text too long' });

    const morse = textToMorse(text);
    res.json({ original: text, morse, timestamp: new Date() });
    
  } catch (error) {
    res.status(500).json({ 
      error: 'Encoding failed',
      details: error.message
    });
  }
});
```

## Step 4: Test Your API
Use Postman to send a POST request:
```json
{
  "text": "SOS 911"
}
```

Expected response:
```json
{
  "original": "SOS 911",
  "morse": "... --- ... / ----. .---- .----",
  "timestamp": "2024-02-20T14:30:00.000Z"
}
```

## Step 5: Deployment Ready Setup

### Add Rate Limiting
```bash
npm install express-rate-limit
```

```javascript
const rateLimit = require('express-rate-limit');
app.use('/encode', rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // Limit each IP to 100 requests per window
}));
```

### Environment Configuration
Create `.env`:
```ini
NODE_ENV=production
PORT=8080
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX=100
```

## Use Cases for Your Morse API
1. **IoT Devices**: Enable communication with legacy systems
2. **Accessibility Tools**: Create learning aids for Morse enthusiasts
3. **Security Systems**: Add encoded alert notifications
4. **Gaming**: Implement puzzle mechanics using Morse

## Next-Level Enhancements
1. Add WebSocket support for real-time encoding
2. Implement audio generation for Morse playback
3. Create decoding functionality
4. Add JWT authentication for premium features

## Frequently Asked Questions

**Q: Can I use this API commercially?**  
A: Yes, this code is MIT licensed - modify as needed!

**Q: How accurate is the encoding?**  
A: Implements ITU standard Morse code with strict validation.

**Q: What about non-English characters?**  
A: Currently supports A-Z, 0-9, and basic punctuation.

## Conclusion

You've now built a fully functional Morse code API with professional features like rate limiting, error handling, and deployment readiness. This project demonstrates **core Express.js competencies** while solving an unusual technical challenge.

**Ready to level up?** Try adding these features:
- [ ] Morse decoding endpoint
- [ ] Audio output generation
- [ ] API key authentication