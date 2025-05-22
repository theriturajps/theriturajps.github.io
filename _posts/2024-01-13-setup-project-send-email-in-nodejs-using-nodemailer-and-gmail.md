---
layout: post
title: "How to Setup a Project and Send Email in Node.js Using Nodemailer & Gmail"
description: "Learn how to set up a Node.js project and send emails using Nodemailer and Gmail. Step-by-step guide for seamless email integration."
author: "Ritu Raj Pratap Singh"
categories: Guide
tags: [emails, Nodemailer, Gmail, Node]
---

Sending emails programmatically is a common requirement for modern web applications. Whether it's for user verification, password resets, or notifications, integrating email functionality into your Node.js application can be a game-changer. In this guide, we'll walk you through setting up a Node.js project and sending emails using Nodemailer and Gmail.

## Search Description
Learn how to set up a Node.js project and send emails using Nodemailer and Gmail. Step-by-step guide for seamless email integration.

## Introduction
Node.js is a powerful runtime environment that allows developers to build scalable and efficient web applications. One of the many tasks you might need to accomplish is sending emails. Nodemailer is a popular Node.js module that makes sending emails a breeze. In this article, we'll guide you through the process of setting up a Node.js project and sending emails using Nodemailer and Gmail.

## Prerequisites
Before we dive into the code, make sure you have the following installed on your machine:

-   [Node.js installed](https://nodejs.org/en/download) (version 12 or higher)
-   A Gmail account
-   Basic understanding of JavaScript and [Node.js](https://nodejs.org/docs/latest/api/)
-   A text editor ([VS Code](https://code.visualstudio.com/) recommended)

## Setting Up the Node.js Project

First, let's create a new directory for our project and initialize it with npm.

```bash
# Create a new directory
mkdir nodejs-email-project
cd nodejs-email-project

# Initialize a new Node.js project
npm init -y
```

This will create a `package.json` file in your project directory, which will keep track of your project's dependencies and scripts.

## Installing Nodemailer

Next, we need to install Nodemailer. You can do this by running the following command:

```bash
# Install Nodemailer
npm install nodemailer
```

This will add Nodemailer to your project's dependencies.

## Configuring Gmail for Nodemailer

To send emails using Gmail, you'll need to configure your Gmail account to allow less secure apps to access it. Follow these steps:

1. Go to your [Google Account Settings](https://myaccount.google.com/).
2. Navigate to the "**Security**" tab.
3. Scroll down to the "**Less secure app access**" section and turn it on.

**Note:** If you have 2-Step Verification enabled, you'll need to [create an App Password](#create-an-app-password-for-gmail) instead of using your regular Gmail password.

### Create an App Password for Gmail
This is where many developers get stuck. You'll need to [create an App Password](https://myaccount.google.com/apppasswords) for Gmail:

1.  Go to your [Google Account Settings](https://myaccount.google.com/).
2.  Navigate to "**Security**" ➟ **2-Step Verification**
3.  Scroll down and select "**[App passwords](https://myaccount.google.com/apppasswords)**"
4.  Choose "**Mail**" and "**Other**" from the dropdowns
5.  Generate the app password and save it securely


**Pro Tip:** Never hardcode your email credentials directly in the code. Use environment variables for security.


## Environment Variables

Install `dotenv` for secure credential management:

```bash
npm install dotenv
```

Create a `.env` file in your project root:

```
EMAIL_AUTH_USER=youremail@gmail.com
EMAIL_AUTH_PASS=your-app-password
```

Add `.env` to your `.gitignore` file to prevent credential exposure.

## Sending Your First Email

Now that everything is set up, let's write the code to send an email. Create a new file called `index.js` in your project directory and add the following code:

```javascript
const nodemailer = require('nodemailer');

// Create a transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
		user: process.env.EMAIL_AUTH_USER,
		pass: process.env.EMAIL_AUTH_PASS,
	},
});

// Email options
let mailOptions = {
    from: {
			name: "Contact Manager", // Sender name
			address: process.env.EMAIL_AUTH_USER, // Sender address
    },
    to: 'recipient-email@example.com', // List of recipients
    subject: 'Hello from Node.js', // Subject line
    text: 'This is a test email sent from a Node.js application using Nodemailer by ExoNoob.In.' // Plain text body
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
```

Replace `'recipient-email@example.com'` with the email address of the recipient.

To run the script, use the following command:

```bash
node index.js
```

If everything is set up correctly, you should see a message in the console indicating that the email was sent successfully and you should receive an email in the recipient's inbox.

## Common Challenges and Solutions

### 1. Authentication Errors

-   Always use App Password, not your regular Gmail password
-   Ensure 2-Step Verification is enabled
-   Double-check your credentials

### 2. Rate Limiting

Gmail has sending limits. For high-volume emails, consider:

-   Sending services like SendGrid
-   Multiple Gmail accounts
-   Professional email services

## Conclusion

Congratulations! You've successfully set up a Node.js project and sent an email using Nodemailer and Gmail. This is just the beginning—Nodemailer offers a wide range of features, including [HTML Email Templates](https://github.com/theriturajps/Email-Notification-Templates), attachments, and more. Explore the [Nodemailer documentation](https://nodemailer.com/about/) to unlock its full potential.

By following this guide, you've taken a significant step towards enhancing your Node.js applications with email functionality. Happy coding!