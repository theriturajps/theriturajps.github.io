---
layout: post
title: "How to Create Auto (ToC) Table of Contents in Blogger 2025?"
description: "Learn how to create an automatic Table of Contents in Blogger 2025 to improve user experience, boost SEO, and make your content more navigable."
author: "Ritu Raj Pratap Singh"
categories: Guide
tags: [Blogger, Widgets]
---

Sure you have, there are moments when one feels that they are literally drowning in text while going through lengthy blog posts. That's why the **Table of Contents (ToC)** is so useful! Imagine it as a kind of a plan, helping readers go through your masterfully written text.

As 2025 is still in sight, it says that having a ToC is no longer a mere luxury but an indispensable element if you are a Blogger user.
 
When you go for an automatic ToC, you are thus not just making the work easier for your readers. You are also enhancing the blog's search engine optimization, organization, and user engagement to the blog. It's a win-win situation!

## What is a ToC?

A **Table of Contents** is also as simple as what the term suggests, it is a list of some of the major divisions of your blog post. But an automatic ToC? That's the real magic. They generate themselves depending on the headings of your post and change in real time when you are writing.

## How it improves user experience

When you run an article, blog, website, social page, or blog post, what do you think would happen if you offered your readers their own tour guide to your content? That is the purpose of any ToC we create. It helps them to quickly move to areas which they deem relevant; hence, making your content easily digestible.

## Backing up your current template

Before we go on let's be a little cautious. Go to your [Blogger Dashboard](https://www.blogger.com/?ref=https://theriturajps.github.io/) and find the "**Theme**" tab, choose "**Backup/Restore**" It will be useful to download the current template's copy. You couldn't agree more - It's like planning on having a safety net while dealing with change, something that is always welcome especially when implementing change.

## Steps to Create Auto (ToC) Table of Contents in Blogger

Now, let's get our hands dirty. In the Theme menu, click "Edit HTML." Don't worry if it looks intimidating - we'll guide you through it step by step.

### Step 1:- Go to Blogger Dashboard

Log in to your [Blogger Dashboard](https://www.blogger.com/?ref=https://theriturajps.github.io/).

### Step 2:- Open Theme Editor Page

From **Blogger Dashboard** click on **Theme** -> **Edit HTML** then **Theme Editor will be open**.

### Step 3:- Search for `</head>` or `&lt;/head&gt;`.

Search the code `</head>` and paste the following Javascript Codes just above to it.

```javascript
<script type='text/javascript'>
//<![CDATA[
function mbtTOC() {var mbtTOC=i=headlength=gethead=0;           
headlength = document.getElementById("post-toc").getElementsByTagName("h2").length;for (i = 0; i < headlength; i++)           
{gethead = document.getElementById("post-toc").getElementsByTagName("h2")[i].textContent;document.getElementById("post-toc").getElementsByTagName("h2")[i].setAttribute("id", "point"+i);mbtTOC = "<li><a href='#point"+i+"'>"+gethead+"</a></li>";document.getElementById("mbtTOC").innerHTML += mbtTOC;}}function mbtToggle() {var mbt = document.getElementById('mbtTOC');if (mbt .style.display === 'none') {mbt .style.display = 'block';} else {mbt .style.display = 'none';}}           
//]]>        
</script>
```

### Step 4:- Search for `]]&gt;&lt;/b:skin&gt;` or `/*]]&gt;*/&lt;/style&gt;`.

Now search the code `]]&gt;&lt;/b:skin&gt;` or `/*]]&gt;*/&lt;/style&gt;` and paste the following CSS Codes just above to it.

```css
.mbtTOC{border:5px solid #f7f0b8;box-shadow:1px 1px 0 #EDE396;background-color:#FFFFE0;color:#707037;line-height:1.4em;margin:30px auto;padding:20px 30px 20px 10px;font-family:oswald,arial;display:block;width:70%}
.mbtTOC ol,.mbtTOC ul{margin:0;padding:0}
.mbtTOC ul{list-style:none}
.mbtTOC ol li,.mbtTOC ul li{padding:15px 0 0;margin:0 0 0 30px;font-size:15px}
.mbtTOC a{color:#0080ff;text-decoration:none}
.mbtTOC a:hover{text-decoration:underline}
.mbtTOC button{background:#FFFFE0;font-family:oswald,arial;font-size:20px;position:relative;outline:none;cursor:pointer;border:none;color:#707037;padding:0 0 0 15px}
.mbtTOC button:after{content:"\f0dc";font-family:FontAwesome;position:relative;left:10px;font-size:20px}
```

### Step 5:- Search for `&lt;data:post.body/&gt;`.

At Last Search for `&lt;data:post.body/&gt;` and replace this with the below code.

```html
<div id="post-toc"><data:post.body/></div>
```

### Step 6:- Save the Changes

To retain the modifications made in the theme, click at the **Save Button** present there.

To **add a Table of Contents (TOC)** to your blog post or article, switch it to `HTML` mode when writing the post.

Now After the first paragraph or before the first heading, paste the below TOC code. This will generate a clickable TOC based on your headings or Placing it just before the `&lt;h2&gt;` tag.

```html
<div class="mbtTOC">
    <button onclick="mbtToggle()">Contents</button>
    <ol id="mbtTOC"></ol>
</div>
<script>mbtTOC();</script>
```

## Conclusion

Congratulations! You've just leveled up your Blogger game by adding an automatic Table of Contents. Your readers will thank you for making your content more navigable, and search engines will appreciate the improved structure. Keep experimenting and refining your ToC to make it perfect for your blog's unique style.