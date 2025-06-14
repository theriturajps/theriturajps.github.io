---
layout: post
title: "Vercel Custom Domain Setup: Complete Guide for GoDaddy, Hostinger & Google Domains"
description: "Learn how to connect your custom domain to Vercel projects with step-by-step instructions for GoDaddy, Hostinger, Google Domains, and other providers. Includes HTTPS setup and troubleshooting tips."
author: "Ritu Raj Pratap Singh"
categories: Guide
tags: [DNS, Vercel, Domain, Safely, GoDaddy, Hostinger]
---

Are you looking to add a professional touch to your Vercel - hosted project with a custom domain? 

Whether you've purchased your domain from **GoDaddy**, **Hostinger**, **Google Domains**, or any other registrar, this comprehensive guide will walk you through the entire process. 

By the end of this tutorial, you'll have your custom domain properly configured and secured with HTTPS.

## What You'll Learn

In this comprehensive guide, you'll discover:
- How to connect any domain to your Vercel project
- Step-by-step DNS configuration for major providers
- Setting up both www and non-www domains
- Securing your site with free HTTPS
- Resolving common domain issues

## Before You Start

### Requirements Checklist
✅ A Vercel account with a deployed project  
✅ A registered domain name  
✅ Access to your domain provider's dashboard  
✅ Basic understanding of DNS (helpful but not required)

### Supported Domain Types
- Root domains (`example.com`)
- WWW subdomains (`www.example.com`)
- Custom subdomains (`blog.example.com`)
- Multiple domains per project

## Domain Configuration Steps

### 1. Initial Vercel Setup

```bash
# Add domain in Vercel dashboard
Settings → Domains → Add Domain → Enter your domain name
```

### 2. Basic DNS Configuration

```dns
# Root Domain (example.com)
Type: A
Name: @
Value: 76.76.21.21

# WWW Subdomain
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Provider-Specific Instructions

### GoDaddy Domain Setup

1. **Access DNS Management**
   ```text
   My Products → DNS → Manage DNS
   ```

2. **Configure Records**
   ```text
   Add Record → Type: A
   Host: @
   Points to: 76.76.21.21
   TTL: 600
   ```

3. **Add WWW Record**
   ```text
   Add Record → Type: CNAME
   Host: www
   Points to: cname.vercel-dns.com
   TTL: 600
   ```

### Hostinger Setup Process

1. **Open DNS Zone Editor**
   ```text
   Domains → Manage → DNS Zone
   ```

2. **Add Required Records**
   ```text
   A Record:
   Type: A
   Name: @
   Content: 76.76.21.21

   CNAME Record:
   Type: CNAME
   Name: www
   Content: cname.vercel-dns.com
   ```

### Google Domains Configuration

1. **Access DNS Settings**
   ```text
   DNS → Manage Custom Records
   ```

2. **Create DNS Entries**
   ```text
   Root Domain:
   Type: A
   Host: @
   Data: 76.76.21.21
   TTL: 1h

   WWW Config:
   Type: CNAME
   Host: www
   Data: cname.vercel-dns.com
   TTL: 1h
   ```

## HTTPS Setup Guide

### Automatic SSL Configuration
1. Vercel handles SSL automatically
2. Certificate provisioning begins after DNS verification
3. HTTPS becomes active within minutes

### Verification Steps
1. Check domain status in Vercel dashboard
2. Verify SSL certificate in browser
3. Test both HTTP and HTTPS access

## Common Issues & Solutions

### 1. DNS Propagation Issues
- **Symptom**: Domain not working immediately
- **Solution**: Wait 15-30 minutes (up to 48 hours maximum)
- **Verification**: Use `dig` or online DNS checker

### 2. HTTPS Problems
- **Symptom**: SSL certificate not active
- **Solution**: Verify DNS records and wait
- **Check**: Use SSL checker tools

### 3. Domain Conflicts
- **Symptom**: Domain verification failed
- **Solution**: Remove conflicting DNS records
- **Prevention**: Audit existing DNS settings

## Expert Tips & Best Practices

### 1. Domain Management
- Use consistent TTL values
- Document all DNS changes
- Regular backup of DNS settings

### 2. Performance Optimization
- Enable Vercel's CDN
- Configure proper redirects
- Monitor domain health

### 3. Security Best Practices
- Enable HSTS after HTTPS verification
- Regular SSL certificate monitoring
- Implement security headers

## Frequently Asked Questions

**Q: How long until my domain works with Vercel?**  
A: Usually 5-30 minutes after DNS configuration.

**Q: Do I need to pay for HTTPS?**  
A: No, Vercel provides free SSL certificates.

**Q: Can I use multiple domains?**  
A: Yes, Vercel supports multiple domains per project.

## Next Steps

After setting up your domain:
1. Test all domain variations (`www` and `non-www`)
2. Verify HTTPS functionality
3. Set up domain monitoring
4. Configure additional security measures

## Conclusion

Setting up a custom domain with Vercel is straightforward when you follow these steps. Remember to:
- Double-check DNS records
- Allow time for propagation
- Verify HTTPS setup
- Monitor domain health

---
> **Pro Tip**: Bookmark this guide for future reference when setting up additional domains with Vercel.
---