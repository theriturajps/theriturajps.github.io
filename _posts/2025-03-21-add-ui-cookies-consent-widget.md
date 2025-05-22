---
layout: post
title: "How to Add a UI Cookies Consent Widget in Your Blogger Site 2025?"
description: "Learn how to add a cookies consent widget into Blogger site. Ensure legal compliance and build user trust with this step-by-step guide"
author: "Ritu Raj Pratap Singh"
categories: Guide
tags: [Blogger, Guide]
---

Whenever you use a website and encounter a message that says, '**Do you agree to allow cookies on your browser?**' Oh wait, that is a cookies consent widget! It is a tiny but powerful instrument that keeps your site legal and helps to gain the audience's confidence at the same time. However, if your site is based on **Blogger**, it is wise that you integrate a **cookies consent widget**. The following is a stepwise depiction of why you ought to have one and how you can include it on your **Blogger blog**.

## Why You Need a Cookies Consent Widget

### Legal Compliance
A large number of areas, such as the **EU**, demand websites to explain about cookies through their **GDPR policy** or as it is in California with their **CCPA policy**. Lack of the cookies consent widget results in fines, legal issues, and loads of dollars lost.

### Building Trust with Users
Apart from legal necessities, a cookies consent widget is the evidence of the fact that you value your visitors' privacy. It is an unhiddden method of conveying the fact that one is gathering information and puts the fate of personal information in the hand of users. That can help to build trust and customer's porosity, and that is always good for any web-site owner.

## Understanding Cookies Consent Widgets

### What is a Cookies Consent Widget?
**Cookies consent widget is a message that shows up on the website usually as a cookies banner or cookies pop-up**. It tells the users that your site is using cookies and at times offer them a chance to approve or decline the usage.

### How Does It Work?
Once a user comes to your website, **the widget is displayed to let them know what cookies are and how they work**. Preferences that follow include accepting all cookies, not accepting any non-essential cookies, and other options between them. This widget will recall their choice and make certain that your site obeys their decision.

## Choosing the Right Cookies Consent Widget for Your Blogger Site

### Free vs. Paid Widgets
Indeed, there is no shortage of tools, starting from basic ones with little to no cost all the way to paid and advanced ones. **The open-source widgets are usually adequate for mere compliance**, whereas there are paid versions that come with more options and support together with advanced tools like analytics.

### Key Features to Look For
When choosing a widget following characteristics should be considered; flexibility in terms of styling, mobile friendliness and suitability to your website. Indeed, some widgets are even richly featured and support multilingual and detailed consent logs, which are very helpful.

## Step-by-Step Guide to Adding a Cookies Consent Widget in Blogger

Now comes the fun part—adding the code to your Blogger site. There are two main steps to do this:

### 1. Adding Code via Blogger Theme

**Step 1:** Go to your [Blogger Dashboard](https://www.blogger.com/).

**Step 2:** Click on "**Theme**".

**Step 3:** Select "**Edit HTML**".

**Step 4:** Now search the code `]]></b:skin>` and paste the following **CSS** code just above to it.

```css
/* Cookies Consent Notice by @riturajps*/
.ckWrap{position:fixed;right:0;left:0;bottom:-600px;z-index:50;width:100%;padding:20px;background:rgba(255, 255, 255, 0.8);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:30px 30px 0 0;box-shadow:0 -10px 25px -5px rgba(0,0,0,.1);align-items:center;justify-content:center;text-align:center;animation:ckUp 2.5s forwards;animation-delay:1s;-webkit-animation:ckUp 2.5s forwards;-webkit-animation-delay:1s}
.ckWrap.acptd{animation:ckDn 2.5s backwards;animation-delay:.3s;-webkit-animation:ckDn 2.5s backwards;-webkit-animation-delay:.3s}
.ckWrap.hidden{display:none}
.ckWrap .ckCont svg{width:50px;height:50px;fill:#08102b;stroke:#08102b;stroke-width:.8}
.ckCont h2{margin:0;color:#08102b;font-size:1.5rem;font-weight:800;font-family:inherit}
.ckCont p{margin:10px 0;line-height:1.7em;color:#08102b;font-size:0.9rem;font-weight:400;font-family:inherit}
.ckWrap .btn{display:inline-flex;align-items:center;margin:0;padding:10px 15px;outline:0;border:0;border-radius:2px;line-height:20px;color:#fefefe;background-color:#482dff;font-size:13px;font-family:inherit;text-decoration:none;white-space:nowrap;overflow:hidden;max-width:100%;cursor:pointer;transition:all 0.3s ease}
.ckWrap .btn:hover{opacity:.8;transform:scale(0.97)}
.ckWrap .btn.outl{color:#08102b;margin-left:8px;background-color:transparent;border:1px solid #767676}
.ckWrap .btn.outl:hover{border-color:#482dff}
@media screen and (min-width:768px){.ckWrap{max-width:450px;border-radius:10px;left:auto;right:30px;bottom:-500px;box-shadow:0 5px 35px rgba(0,0,0,.1);animation:ckdeskUp 2.5s forwards;animation-delay:1s;-webkit-animation:ckdeskUp 2.5s forwards;-webkit-animation-delay:1s}.ckWrap.acptd{animation:ckdeskDn 2.5s backwards;animation-delay:.3s;-webkit-animation:ckdeskDn 2.5s backwards;-webkit-animation-delay:0.3s}}
@-webkit-keyframes ckUp{100%{bottom:0}}
@keyframes ckUp{100%{bottom:0}}
@-webkit-keyframes ckdeskUp{100%{bottom:30px}}
@keyframes ckdeskUp{100%{bottom:30px}}
@-webkit-keyframes ckDn{0%{bottom:0}100%{bottom:-600px}}
@keyframes ckDn{0%{bottom:0}100%{bottom:-600px}}
@-webkit-keyframes ckdeskDn{0%{bottom:30px}100%{bottom:-600px}}
@keyframes ckdeskDn{0%{bottom:30px}100%{bottom:-600px}}
.darkMode .ckWrap{background:rgba(50, 50, 50, 0.8)}
.darkMode .ckWrap .ckCont svg{fill:#fefefe;stroke:#fefefe}
.darkMode .ckCont h2, .darkMode .ckCont p, .darkMode .btn.outl{color:#fefefe}
```

> Change `.darkMode` text with your own dark mode style css code.

**Step 5:** Disable the Blogger default Cookie Notice by adding the **JavaScript** code just above to `</head>`.

```javascript
<script>/*<![CDATA[*/ /* Disable default Blogger cookie notice */ cookieChoices = {}; /*]]>*/</script>
```

**Step 6:** At last add the below JavaScript Code just above to `</body>` or `&lt;/body&gt;` tag.

```javascript
<script>/*<<![CDATA[*/ /* Cookies Consent Notice Script by @riturajps */ var ckBox=document.querySelector("#ckBox"),ckAcptBtn=document.querySelector("#ckAcptBtn"),ckErrMes="Cookie can't be set! Please unblock this site from the cookie setting of your browser.";if(null!=ckBox){ckAcptBtn.onclick=()=>{document.cookie="CookieConsentByRituRaj=Accepted; max-age=2592000; path=/",document.cookie?ckBox.classList.add("acptd"):alert(ckErrMes)};let e=document.cookie.indexOf("CookieConsentByRituRaj=Accepted");-1!=e?ckBox.classList.add("hidden"):ckBox.classList.remove("hidden")} /*]]>>*/</script>
```

> Change the marked no. in above code as per your need (in seconds). For eg. 5184000 = 60 days

**Step 7:** Save the changes by clicking on this 💾 icon.

### 2. Adding Code via Blogger Layout

**Step 1:** Go to your [Blogger Dashboard](https://www.blogger.com/).

**Step 2:** Click on "**Layout**".

**Step 3:** Add a new **HTML/JavaScript** gadget.

**Step 4:** Paste the code into the content box.

```html
<!--[ Cookies Consent Widget by @riturajps ]-->
<div class='ckWrap hidden' id='ckBox'>
  <div class='ckCont'>
    <!--[ Cookies Icon ]-->
    <svg viewbox='0 0 50 50'><path d='M 25 4 C 13.414063 4 4 13.414063 4 25 C 4 36.585938 13.414063 46 25 46 C 36.585938 46 46 36.585938 46 25 C 46 24.378906 45.960938 23.78125 45.910156 23.203125 C 45.878906 22.855469 45.671875 22.546875 45.359375 22.390625 C 45.042969 22.234375 44.671875 22.253906 44.375 22.441406 C 43.824219 22.792969 43.191406 23 42.5 23 C 41.015625 23 39.769531 22.082031 39.253906 20.792969 C 39.148438 20.527344 38.933594 20.320313 38.667969 20.222656 C 38.398438 20.125 38.101563 20.144531 37.847656 20.28125 C 37.003906 20.738281 36.035156 21 35 21 C 31.675781 21 29 18.324219 29 15 C 29 13.964844 29.261719 12.996094 29.71875 12.152344 C 29.855469 11.898438 29.875 11.601563 29.777344 11.332031 C 29.679688 11.066406 29.472656 10.851563 29.207031 10.746094 C 27.917969 10.230469 27 8.984375 27 7.5 C 27 6.808594 27.207031 6.175781 27.558594 5.625 C 27.746094 5.328125 27.765625 4.957031 27.609375 4.640625 C 27.453125 4.328125 27.144531 4.121094 26.796875 4.089844 C 26.21875 4.039063 25.621094 4 25 4 Z M 38 4 C 36.894531 4 36 4.894531 36 6 C 36 7.105469 36.894531 8 38 8 C 39.105469 8 40 7.105469 40 6 C 40 4.894531 39.105469 4 38 4 Z M 25 6 C 25.144531 6 25.292969 6.015625 25.4375 6.023438 C 25.285156 6.519531 25 6.953125 25 7.5 C 25 9.4375 26.136719 10.984375 27.660156 11.960938 C 27.269531 12.90625 27 13.917969 27 15 C 27 19.40625 30.59375 23 35 23 C 36.082031 23 37.09375 22.730469 38.039063 22.339844 C 39.015625 23.863281 40.5625 25 42.5 25 C 43.046875 25 43.480469 24.714844 43.980469 24.5625 C 43.984375 24.707031 44 24.855469 44 25 C 44 35.503906 35.503906 44 25 44 C 14.496094 44 6 35.503906 6 25 C 6 14.496094 14.496094 6 25 6 Z M 36.5 12 C 35.671875 12 35 12.671875 35 13.5 C 35 14.328125 35.671875 15 36.5 15 C 37.328125 15 38 14.328125 38 13.5 C 38 12.671875 37.328125 12 36.5 12 Z M 21.5 15 C 20.671875 15 20 15.671875 20 16.5 C 20 17.328125 20.671875 18 21.5 18 C 22.328125 18 23 17.328125 23 16.5 C 23 15.671875 22.328125 15 21.5 15 Z M 45 15 C 44.449219 15 44 15.449219 44 16 C 44 16.550781 44.449219 17 45 17 C 45.550781 17 46 16.550781 46 16 C 46 15.449219 45.550781 15 45 15 Z M 15 20 C 13.34375 20 12 21.34375 12 23 C 12 24.65625 13.34375 26 15 26 C 16.65625 26 18 24.65625 18 23 C 18 21.34375 16.65625 20 15 20 Z M 24.5 24 C 23.671875 24 23 24.671875 23 25.5 C 23 26.328125 23.671875 27 24.5 27 C 25.328125 27 26 26.328125 26 25.5 C 26 24.671875 25.328125 24 24.5 24 Z M 17 31 C 15.894531 31 15 31.894531 15 33 C 15 34.105469 15.894531 35 17 35 C 18.105469 35 19 34.105469 19 33 C 19 31.894531 18.105469 31 17 31 Z M 30.5 32 C 29.121094 32 28 33.121094 28 34.5 C 28 35.878906 29.121094 37 30.5 37 C 31.878906 37 33 35.878906 33 34.5 C 33 33.121094 31.878906 32 30.5 32 Z'/></svg>
    <!--[ Cookies Notice Heading ]-->
    <h2>Cookies Consent</h2>
    <!--[ Cookies Notice Detail ]-->
    <p>This website uses cookies to ensure you get the best experience on our website.</p>
  </div>
  <button class='btn' id='ckAcptBtn'>Accept Cookies!</button>
  <a class='btn outl' href='https://policies.google.com/technologies/cookies'>Learn More</a>
</div>
```

**Step 5:** Save your changes and rearrange the gadget if necessary.

## Testing Your Cookies Consent Widget

### Previewing Your Site
Once input the code, go to the preview page to check if the widget is display. Confirm that the messges are fine and properly displayed and all the clickable areas run smoothly.

### Ensuring Functionality Across Devices
Run the widget in different gadgets and Web browsers you have. It should display well and be beautiful no matter if a user is using a laptop/PC, a tablet, or a mobile phone.

## Troubleshooting Common Issues

### Widget Not Showing Up
If the widget is not displayed, ensure that you have copied the code correctly for the widget and saved the change that you made. Sometimes it does the trick and an example is clearing your browser cache.

### Widget Causing Site Performance Issues
If you find that this widget is causing your site to be sluggish, you should think about finding another service, or you should strip down the capabilities of the widget. However, one can always turn to the support team of the particular service for assistance.

## Best Practices for Using Cookies Consent Widgets

### Clear and Concise Messaging
When writing your message ensure that it is simple and easy to understand so that when your widget is positioned next to it, people will not have a hard time understanding what you want to convey. It informs the users about cookies, their purpose of use, and the ways to customize the settings. Disregard technical terms used in business and explain as much as possible.

### Regularly Updating Your Widget
Laws and Regulations may change over time, therefore, you have to update your widget periodically. This way, ensure that you are up-to-date with your widget provider and make any changes that are required to be in compliance.

## Conclusion
It is essential to implement the cookies consent widget concerning the **legal regulations on your Blogger site** as well as the trust of the visitors. By following this guide, you will be guaranteeing that your site has a good understanding of user's privacy apart from following the law. Of course, the cookies consent widget is not just a legal requirement but also an indication of a company's reliability and adherence to the principles of user experience.