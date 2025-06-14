---
layout: post
title: "Build a Ghost Messenger API with Node.js for Delayed Emails"
description: "Learn to create a Node.js Express API that schedules and sends future emails automatically. Step-by-step guide with code examples and best practices."
author: "Ritu Raj Pratap Singh"
categories: Guide
tags: [APIs, JavaScript, Node, SMTP]
---

**Have you ever wanted to schedule emails to send themselves days, weeks, or even months later?** Whether it’s for birthday reminders, timed marketing campaigns, or automated follow-ups, a "**Ghost Messenger**" API can handle it. In this guide, you’ll learn to build a secure, scalable Node.js [Express.js](https://expressjs.com/en/starter/installing.html) API that queues and sends emails in the future—perfect for developers.

## Why Build a Ghost Messenger API?
- Automate time-sensitive communications without manual intervention
- Improve user engagement with perfectly timed emails
- Solve real-world problems like event reminders or subscription renewals
- Ideal for startups, SaaS products, or personal projects

## Prerequisites
1. Basic knowledge of JavaScript and [Node.js](https://nodejs.org/docs/latest/api/)
2. [Node.js v18+ installed](https://nodejs.org/en/download)
3. [MongoDB](https://mongoosejs.com/docs/guide.html) (or any database for storing scheduled jobs)
4. SMTP credentials (Gmail, [SendGrid](https://sendgrid.com/en-us), or [Mailgun](https://www.mailgun.com/))

## Step 1: Set Up the Project
```bash
mkdir ghost-messenger && cd ghost-messenger
npm init -y
npm install express mongoose node-cron nodemailer dotenv
```

## Step 2: Build the Core API Structure
Create `app.js`:
```javascript
const express = require('express');
const mongoose = require('mongoose');
const cron = require('node-cron');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection failed:', err));

// Define Email Schema
const emailSchema = new mongoose.Schema({
  recipient: String,
  subject: String,
  body: String,
  sendAt: Date,
  status: { type: String, default: 'scheduled' }
});

const EmailJob = mongoose.model('EmailJob', emailSchema);
```

## Step 3: Create the Email Service
Add SMTP configuration in `.env`:
```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email@domain.com
SMTP_PASS=your_password
```

Implement the email sender:
```javascript
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Cron job to check every minute
cron.schedule('* * * * *', async () => {
  const jobs = await EmailJob.find({
    sendAt: { $lte: new Date() },
    status: 'scheduled'
  });

  jobs.forEach(async (job) => {
    await transporter.sendMail({
      from: '"Ghost Messenger" <noreply@ghostmessenger.com>',
      to: job.recipient,
      subject: job.subject,
      text: job.body
    });
    
    job.status = 'sent';
    await job.save();
  });
});
```

## Step 4: Create API Endpoints
```javascript
app.post('/schedule-email', async (req, res) => {
  try {
    const { recipient, subject, body, sendAt } = req.body;
    const newJob = new EmailJob({ recipient, subject, body, sendAt });
    await newJob.save();
    res.status(201).json({ message: 'Email scheduled successfully', id: newJob._id });
  } catch (error) {
    res.status(500).json({ error: 'Scheduling failed' });
  }
});

app.get('/jobs/:id', async (req, res) => {
  try {
    const job = await EmailJob.findById(req.params.id);
    res.json(job);
  } catch (error) {
    res.status(404).json({ error: 'Job not found' });
  }
});
```

## Step 5: Test and Deploy
1. Test locally with Postman:
```json
POST http://localhost:3000/schedule-email
{
  "recipient": "user@example.com",
  "subject": "Your Future Message",
  "body": "This email was sent from the past!",
  "sendAt": "2024-12-31T23:59:00"
}
```

2. Deploy to Heroku/DigitalOcean with:
```bash
git push heroku main
```

## Best Practices for Production
1. **Security**: Use JWT authentication for API endpoints
2. **Error Handling**: Implement retries for failed emails
3. **Logging**: Track sent emails and failures
4. **Scalability**: Use [Redis BullMQ](https://docs.bullmq.io/) for job queues in high-traffic apps

## FAQs
**Q: Can I use this with free email providers like Gmail?**  
A: Yes, but enable "Less Secure Apps" in Gmail settings or use OAuth2.

**Q: How far in advance can I schedule emails?**  
A: Years! The cron job checks every minute for due emails.

**Q: Will this work after server restart?**  
A: Yes—jobs are stored in MongoDB and processed automatically.

**Ready to automate your future communications?** Deploy your Ghost Messenger API today and never miss perfect timing again! 👻📨