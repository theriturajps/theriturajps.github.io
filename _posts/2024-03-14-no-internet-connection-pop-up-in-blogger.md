---
layout: post
title: "How to Add No Internet Connection Pop-up and Toast Notification to Blogger"
description: "Learn to add a 'No Internet Connection' pop-up widget to your Blogger site. Easy steps to enhance user experience!"
author: "Ritu Raj Pratap Singh"
categories: Guide
tags: [Widget, Blogger, Internet]
---

This will be interesting to notify your visitors about internet connection. Suppose, if a visitor is browsing through the contents of your website and in the worst and unfortunately case the internet connection goes off, it will inform the user that there is no internet connection and thus the users can check their connection. 

Adding No Internet Connection Pop-up Widget is going to become quite easy as in this article we are going to guide you to add it to any Blogger Website. This will display a '**No Internet Connection**' pop-up if the device internet of your visitors goes off. 

## How to Add No Internet Connection Pop-up?

Here, I shall be recommending that you add No Internet Connection Pop-up Widget to Your Blogger Website; you do not need to know much about **HTML**, **CSS**, or **JS** because we have developed one for you. What you have to do is to place the codes at right place of your **Blogger Theme XML**.

> As we are going to introduce some codes in XML of the Blogger Theme, I will suggest you to make a **Backup of your current Theme**. If by chance any problem is encountered then it can be rectified later on.

### Step 1:- Go to Blogger Dashboard

Log in to your [Blogger Dashboard](https://www.blogger.com/?ref=exonoob.in).

### Step 2:- Open Theme Editor Page

From **Blogger Dashboard** click on **Theme** -> **Edit HTML** then **Theme Editor will be open**.

### Step 3:- Search for `]]></b:skin>` or `/*]]>*/</style>`.

Now search the code `]]></b:skin>` or `/*]]>*/</style>` and paste the following CSS Codes just above to it.

#### Style 1

> Change `.drK` in above **CSS** code with your respective **dark mode class** code.

```css
/* Pop-Up Box (Style 1) */
.noIntPCn{position:fixed;z-index:99980;top:0;bottom:0;left:0;right:0;padding:20px;background:#f3f5fe;display:flex;justify-content:center;align-items:center}
.noIntPCn.hidden{display:none}
.noIntPCn .noIntPBx{position:relative;background:#fff;max-width:400px;display:flex;justify-content:center;align-items:center;flex-direction:column;padding:30px;border-radius:30px}
.noIntPCn .noIntPBx svg{display:block;width:50px;height:50px;fill:none !important;stroke:#08102b;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5}
.noIntPCn .noIntPBx h2{margin:10px 0 15px 0;font-size:1.2rem;font-weight:800;color:#08102b}
.noIntPCn .noIntPBx p{margin:0;line-height:1.7em;font-size:0.9rem;color:#08102b}
.noIntPCn .noIntPBx .noIntPBtn{display:inline-flex;justify-content:center;align-items:center;height:50px;width:50px;outline:none;border:none;background:#f3f5fe;border-radius:50%;margin-top:20px;transition:all .2s ease;-webkit-transition:all .2s ease}
.noIntPCn .noIntPBx .noIntPBtn:hover{transform:scale(1.05);-webkit-transform:scale(1.05)}
.noIntPCn .noIntPBx .noIntPBtn svg{width:24px;height:24px;flex-shrink:0;opacity:.8}
.noIntPCn .noIntPBx .noIntPBtn svg.r{animation:rotateIcn 1.5s infinite linear;-webkit-animation:rotateIcn 1.5s infinite linear}
.drK .noIntPCn, .drK .noIntPCn .noIntPBx .noIntPBtn{background:#1f1f1f}
.drK .noIntPCn .noIntPBx{background:#2c2d31}
.drK .noIntPCn .noIntPBx svg{stroke:#fefefe}
.drK .noIntPCn .noIntPBx p, .drK .noIntPCn .noIntPBx  h2{color:#fefefe}
@keyframes rotateIcn{from{transform:rotate(0deg)} to{transform:rotate(359deg)}}
@-webkit-keyframes rotateIcn{from{-webkit-transform:rotate(0deg)} to{-webkit-transform:rotate(359deg)}}

/* Toast Notification */
.tNtf span{position:fixed;left:24px;bottom:-70px;display:inline-flex;align-items:center;text-align:center;justify-content:center;margin-bottom:20px;z-index:99981;background:#323232;color:rgba(255,255,255,.8);font-size:14px;font-family:inherit;border-radius:3px;padding:13px 24px; box-shadow:0 5px 35px rgba(149,157,165,.3);opacity:0;transition:all .1s ease;animation:slideinwards 2s ease forwards;-webkit-animation:slideinwards 2s ease forwards}
@media screen and (max-width:500px){.tNtf span{margin-bottom:20px;left:20px;right:20px;font-size:13px}}
@keyframes slideinwards{0%{opacity:0}20%{opacity:1;bottom:0}50%{opacity:1;bottom:0}80%{opacity:1;bottom:0}100%{opacity:0;bottom:-70px;visibility:hidden}}
@-webkit-keyframes slideinwards{0%{opacity:0}20%{opacity:1;bottom:0}50%{opacity:1;bottom:0}80%{opacity:1;bottom:0}100%{opacity:0;bottom:-70px;visibility:hidden}}
.drK .tNtf span{box-shadow:0 10px 40px rgba(0,0,0,.2)}
```

#### Style 2

> Change `.drK` in above **CSS** code with your respective **dark mode class** code.

```css
/* Pop-Up Box (Style 2) */
.noIntPCn{position:fixed;top:0;bottom:0;left:0;right:0;padding:20px;background:rgba(255, 255, 255, 0.1);z-index:99980;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);display:flex;justify-content:center;align-items:center}
.noIntPCn.hidden{display:none}
.noIntPCn .noIntPBx{position:relative;background:rgba(255, 255, 255, 0.8);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);max-width:400px;display:flex;justify-content:center;align-items:center;flex-direction:column;padding:30px;border-radius:20px;box-shadow:0 5px 25px rgb(0 0 0 / 20%)}
.noIntPCn .noIntPBx svg{display:block;width:50px;height:50px;fill:none !important;stroke:#08102b;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5}
.noIntPCn .noIntPBx h2{margin:10px 0 15px 0;font-size:1.2rem;font-weight:800;color:#08102b}
.noIntPCn .noIntPBx p{margin:0;line-height:1.7em;font-size:0.9rem;color:#08102b}
.noIntPCn .noIntPBx .noIntPBtn{display:inline-flex;justify-content:center;align-items:center;height:50px;width:50px;outline:none;border:none;background:#482dff;border-radius:50%;margin-top:20px;transition:all .2s ease;-webkit-transition:all .2s ease}
.noIntPCn .noIntPBx .noIntPBtn:hover{transform:scale(1.05);-webkit-transform:scale(1.05)}
.noIntPCn .noIntPBx .noIntPBtn svg{width:24px;height:24px;stroke:#fff;flex-shrink:0}
.noIntPCn .noIntPBx .noIntPBtn svg.r{animation:rotateIcn 1.5s infinite linear;-webkit-animation:rotateIcn 1.5s infinite linear}
.noIntPCn{animation:popupBlur .3s ease-in; -webkit-animation:popupBlur .3s}
.noIntPCn >*{animation:popupScale .3s ease-in; -webkit-animation:popupScale .3s}
.drK .noIntPCn{background:rgba(0, 0, 0, 0.1)}
.drK .noIntPCn .noIntPBx{background:rgba(50, 50, 50, 0.8)}
.drK .noIntPCn .noIntPBx svg{stroke:#fefefe}
.drK .noIntPCn .noIntPBx p, .drK .noIntPCn .noIntPBx h2{color:#fefefe}
@keyframes popupBlur {from{opacity:0}to{opacity:1}}
@-webkit-keyframes popupBlur{from{opacity:0}to{opacity:1}}
@keyframes popupScale{from{transform:scale(0);animation-timing-function:ease-in;opacity:0}to{transform:scale(1);opacity:1}}
@-webkit-keyframes popupScale{from{-webkit-transform:scale(0);-webkit-animation-timing-function: ease-in;opacity:0}to{-webkit-transform:scale(1);opacity:1}}
@keyframes rotateIcn{from{transform:rotate(0deg)} to{transform:rotate(359deg)}}
@-webkit-keyframes rotateIcn{from{-webkit-transform:rotate(0deg)} to{-webkit-transform:rotate(359deg)}}

/* Toast Notification */
.tNtf span{position:fixed;left:24px;bottom:-70px;display:inline-flex;align-items:center;text-align:center;justify-content:center;margin-bottom:20px;z-index:99981;background:#323232;color:rgba(255,255,255,.8);font-size:14px;font-family:inherit;border-radius:3px;padding:13px 24px; box-shadow:0 5px 35px rgba(149,157,165,.3);opacity:0;transition:all .1s ease;animation:slideinwards 2s ease forwards;-webkit-animation:slideinwards 2s ease forwards}
@media screen and (max-width:500px){.tNtf span{margin-bottom:20px;left:20px;right:20px;font-size:13px}}
@keyframes slideinwards{0%{opacity:0}20%{opacity:1;bottom:0}50%{opacity:1;bottom:0}80%{opacity:1;bottom:0}100%{opacity:0;bottom:-70px;visibility:hidden}}
@-webkit-keyframes slideinwards{0%{opacity:0}20%{opacity:1;bottom:0}50%{opacity:1;bottom:0}80%{opacity:1;bottom:0}100%{opacity:0;bottom:-70px;visibility:hidden}}
.drK .tNtf span{box-shadow:0 10px 40px rgba(0,0,0,.2)}
```

### Step 4:- Search for `<body>` or `&lt;body&gt;`.

Paste the following HTML just below to `<body>` tag. If you don't find it, it is probably already parsed which is `&lt;body&gt;`

```html
<!--[ Toast Notification ]-->
<div id='toastNotif' class='tNtf'></div>
<script>/*<![CDATA[*/ /* No Internet Connection Script */ function pageReload(){var n=document.querySelector("#noIntP .noIntPBx .noIntPBtn svg");null!=n&&n.classList.add("r"),setTimeout(function(){window.location.reload()},500)};window.addEventListener("offline",function(){document.querySelector("#noIntP").classList.remove("hidden"),document.querySelector("#toastNotif").innerHTML="<span>No internet connection!</span>"}),window.addEventListener("online",function(){document.querySelector("#noIntP").classList.add("hidden"),document.querySelector("#toastNotif").innerHTML="<span>Internet connection restored!</span>"}); /*]]>*/</script>
```

### Step 5:- Again Search for `</body>` or `&lt;/body&gt;`.

Now add the following HTML just above to `</body>` tag. If you cannot find it, then it is most likely that it has been parsed which normally is `&lt;/body&gt;`.

```html
<!--[ No Internet Connection Pop-up ]-->
<div id='noIntP' class='noIntPCn hidden'>
  <div class='noIntPBx'>
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><line x1='1' x2='23' y1='1' y2='23'/><path d='M16.72 11.06A10.94 10.94 0 0 1 19 12.55'/><path d='M5 12.55a10.94 10.94 0 0 1 5.17-2.39'/><path d='M10.71 5.05A16 16 0 0 1 22.58 9'/><path d='M1.42 9a15.91 15.91 0 0 1 4.7-2.88'/><path d='M8.53 16.11a6 6 0 0 1 6.95 0'/><line x1='12' x2='12.01' y1='20' y2='20'/></svg>
    <h2>Oops! No Internet!</h2>
    <p>Looks like you are facing a temporary network interruption.<br/>Or check your network connection.</p>
    <button class='noIntPBtn' onclick='pageReload()'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><polyline points='23 4 23 10 17 10'/><path d='M20.49 15a9 9 0 1 1-2.12-9.36L23 10'/></svg></button>
  </div>
</div>
```

### Step 6:- Save the Changes

To retain the modifications made in the theme, click at the **Save Button** present there.

That's done! Your website will now have a checker where it will give a message of '**No Internet Connection**' if there is no internet in the device of the visitor. 

## What is the approach to add only No Internet Toast Notification?

Now, if you want to only Toast Notification instead of Pop-up what would you do? Never mind you can just add Toast Notification as well. For that, please replace the above Java Script Code with the following Java Script Code mailed below. 

```js
<script>/*<![CDATA[*/ /* No Internet Connection Script (Only Toast) */ window.addEventListener("offline",function(){document.querySelector("#toastNotif").innerHTML="<span>No internet connection!</span>"}),window.addEventListener("online",function(){document.querySelector("#toastNotif").innerHTML="<span>Internet connection restored!</span>"}); /*]]>*/</script>
```

## Conclusion

This is all about steps on How to Add the **No Internet Connection Pop-up widget to the Blogger Website**. I wish you to benefit from this article. Well, I'd like to stress that this article is one that you shouldn't hesitate to share. And if you find difficulty in any of the section or if you have any query then do mention that in the comment box.
