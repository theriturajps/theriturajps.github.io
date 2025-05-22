---
layout: post
title: "How to Add WhatsApp Chat Widget in Blogger (Step-by-Step)"
description: "Learn how to add a WhatsApp Chat Widget to your Blogger site. Boost engagement, increase conversions, and improve customer support easily."
author: "Ritu Raj Pratap Singh"
categories: Guide
tags: [Blogger, Guide]
---

Let me explain to you why your blog is not turning visitors into leads. There are quite a few of them, but possibly the main one is a lack of attachment of the visitors to you, which contributes to the unsuccessful blogging. For one to make money with an audience, it is required to remain in touch via messaging apps and market products/services to them. 

That is why, **Adding WhatsApp Chat Widget to Blogger** is consider as your choice of action to communicate with your audience and increase activities of your Blogger. 

This widget allows the visitors to freely come with questions or feedback, and it will assist in establishing a reliable customer base and business success.

The **WhatsApp Chat Widget** is another useful gadget that enterprises can use on sites to establish a direct line to consumers through WhatsApp. It appears as a small button or a chat bubble in a corner of the Web site the client might click that to commence a chat session in the WhatsApp.

## Benefits of using WhatsApp Chat Widget

Incorporating the **WhatsApp Chat Widget for the Blogger website** can be a spectacular step. It can help boost sending messages, start conversations, and boost conversions, as well as providing satisfaction to the clients. Let's explore its benefits!

- A WhatsApp Chat Widget enables a website owner to engage visitors in a conversation through the application.
- It enhances the relationship with the customers and increases their interaction with your website.
- It lowers the bounce rates and raises the durations of visits for your clients.
- It aids in acquiring leads and hence has enhanced the conversion rate.
- This is a way of improving on the general user experience and at the same time growing trust within the targeted audience.

## How to Add WhatsApp Chat Widget in Blogger (Step-by-Step)

Putting the WhatsApp Chat Widget on your Blogger site is easy and will only take you few minutes. That is why within the few steps you can have the widget in place reaching out to your audience, and the whole system is live. 

**Step 1 :-** Go to your [Blogger Dashboard](https://www.blogger.com/).

**Step 2 :-** Now go to **Theme Section** -> **Edit HTML**.

**Step 3 :-** Copy the below **CSS** code and paste it into the CSS section of your theme.

```css
/* WhatsApp Chat Widget by exonoob.in */
:root {
--warna-background: #4dc247; /* Change header and background color */
--warna-bg-chat: #f0f5fb;
--warna-icon: #fff; /* Change icon color */
--warna-text: #505050;
--warna-text-alt: #989b9f;
--lebar-chatbox: 320px;
}

svg{width: 22px;height: 22px;vertical-align: middle;fill: var(--warna-icon)}
.chatMenu, .chatButton .svg-2{display: none}

.chatButton{position: fixed;background-color: var(--warna-background);bottom: 20px;left: 20px;border-radius: 50px;z-index: 20;overflow: hidden;display: flex;align-items: center;justify-content: center;width: 50px;height: 50px;-webkit-transition: all .2s ease-out;transition: all .2s ease-out}
.chatButton svg{margin: auto;fill: var(--warna-icon)}
  
.chatBox{position: fixed;bottom: 70px;left: 20px;width: var(--lebar-chatbox);-webkit-transition: all .2s ease-out;transition: all .2s ease-out;z-index: 21;opacity: 0;visibility: hidden;line-height: normal}
.chatContent{border-radius: 15px;background-color: #fff;box-shadow: 0 5px 15px 0 rgba(0,0,0,.05);overflow: hidden}
.chatHeader{position: relative;display: flex;align-items: center;padding: 15px 20px;background-color: var(--warna-background);overflow: hidden}
.chatHeader svg{width: 32px;height: 32px;flex-shrink: 0;fill: var(--warna-icon)}
.chatHeader .chatTitle{padding-left: 15px;font-size: 14px;color: var(--warna-icon)}
.chatHeader .chatTitle span{font-size: 11.5px;display: block;line-height: 1.58em}
  
.chatText{display: flex;flex-wrap: wrap;margin: 25px 20px;font-size: 12px;color: var(--warna-text)}
.chatText span{display: inline-block;margin-right: auto;padding: 10px 10px 10px 20px;background-color: var(--warna-bg-chat);border-radius: 3px 15px 15px}
.chatText span:after{content: 'Just now';margin-left: 15px;font-size: 9px;color: var(--warna-text-alt)}
.chatText .typing{margin: 15px 0 0 auto;padding: 10px 20px 10px 10px;border-radius: 15px 3px 15px 15px}
.chatText .typing: after{display: none}
  
.chatStart{display: flex;align-items: center;margin-top: 15px;padding: 18px 20px;border-radius: 10px;background-color: #fff;overflow: hidden;font-size: 12px;color: var(--warna-text)}
.chatMenu:checked + .chatButton{-webkit-transform: rotate(360deg);transform: rotate(360deg)}
.chatMenu:checked + .chatButton .svg-1{display: none}
.chatMenu:checked + .chatButton .svg-2{display: block}
.chatMenu:checked ~ .chatBox{bottom: 90px;opacity: 1;visibility: visible}
```

**Step 4 :-** At last add the below **HTML** Code just before to `</body>` or `&lt;/body&gt;` tag.

```html
<input class='chatMenu hidden' id='offchatMenu' type='checkbox' />
<label class='chatButton' for='offchatMenu'>
  <svg class='svg-1' viewBox='0 0 32 32'><g><path d='M16,2A13,13,0,0,0,8,25.23V29a1,1,0,0,0,.51.87A1,1,0,0,0,9,30a1,1,0,0,0,.51-.14l3.65-2.19A12.64,12.64,0,0,0,16,28,13,13,0,0,0,16,2Zm0,24a11.13,11.13,0,0,1-2.76-.36,1,1,0,0,0-.76.11L10,27.23v-2.5a1,1,0,0,0-.42-.81A11,11,0,1,1,16,26Z'></path><path d='M19.86,15.18a1.9,1.9,0,0,0-2.64,0l-.09.09-1.4-1.4.09-.09a1.86,1.86,0,0,0,0-2.64L14.23,9.55a1.9,1.9,0,0,0-2.64,0l-.8.79a3.56,3.56,0,0,0-.5,3.76,10.64,10.64,0,0,0,2.62,4A8.7,8.7,0,0,0,18.56,21a2.92,2.92,0,0,0,2.1-.79l.79-.8a1.86,1.86,0,0,0,0-2.64Zm-.62,3.61c-.57.58-2.78,0-4.92-2.11a8.88,8.88,0,0,1-2.13-3.21c-.26-.79-.25-1.44,0-1.71l.7-.7,1.4,1.4-.7.7a1,1,0,0,0,0,1.41l2.82,2.82a1,1,0,0,0,1.41,0l.7-.7,1.4,1.4Z'></path></g></svg>
  <svg class='svg-2' viewBox='0 0 512 512'><path d='M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z'></path></svg>
</label>

<div class='chatBox'>
  <div class='chatContent'>
    <div class='chatHeader'>
      <svg viewbox='0 0 32 32'><path d='M24,22a1,1,0,0,1-.64-.23L18.84,18H17A8,8,0,0,1,17,2h6a8,8,0,0,1,2,15.74V21a1,1,0,0,1-.58.91A1,1,0,0,1,24,22ZM17,4a6,6,0,0,0,0,12h2.2a1,1,0,0,1,.64.23L23,18.86V16.92a1,1,0,0,1,.86-1A6,6,0,0,0,23,4Z'></path><rect height='2' width='2' x='19' y='9'></rect><rect height='2' width='2' x='14' y='9'></rect><rect height='2' width='2' x='24' y='9'></rect><path d='M8,30a1,1,0,0,1-.42-.09A1,1,0,0,1,7,29V25.74a8,8,0,0,1-1.28-15,1,1,0,1,1,.82,1.82,6,6,0,0,0,1.6,11.4,1,1,0,0,1,.86,1v1.94l3.16-2.63A1,1,0,0,1,12.8,24H15a5.94,5.94,0,0,0,4.29-1.82,1,1,0,0,1,1.44,1.4A8,8,0,0,1,15,26H13.16L8.64,29.77A1,1,0,0,1,8,30Z'></path></svg>
      <div class='chatTitle'> Please chat with our team <span> Admin will reply in few minutes</span></div>
    </div>
    <div class='chatText'>
      <span>Hello! How can we help you?</span>
      <span class='typing'>...</span>
    </div>
  </div>
  
  <a class='chatStart' href='https://api.whatsapp.com/send?phone=+911234567890&text=Hello,%20How%20can%20i%20help%20you' rel='nofollow noreferrer' target='_blank'>
    <span>Start chatting...</span>        
  </a>
</div>
```

> Change the `+911234567890` with the number and text `Hello,%20How%20can%20i%20help%20you` in above code with your own wishes.

**Step 5 :-** Save the changes by clicking on this 💾 icon.

## Conclusion

Thus, the **WhatsApp Chat Widget for Blogger is a perfect tool** that enhances the user value and often the dialogue between the website owner and the visitor. Due to its flexibility and SEO possibilities, the widget can raise the levels of attendance, sale and customer satisfaction. It cannot be overemphasized that it is quite vital for any blogger who aims at reaching out to his or her fans and clients in extending his or her business.