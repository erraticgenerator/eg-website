---
slug: '/blog/window-not-defined-gatsbyjs-p5js/'
title: Window Is Not Defined Using Gatsbyjs and p5js
subtitle: Here is my solution in 2022
date: 2022-01-11
updated: null
tags:
- p5js
- gatsbyjs
- javascript
- web development
featuredImage: thumb.jpeg
---

Gatsbyjs is a static site generator, which means it does not require backend server to host your website, but when it builds the static site from your local machine (or from the cloud), it does use server-side rendering with Node.js, so when the server building your website is reading and executing your code and it finds you are using the `window` object, it will throw an error because the server is not a browser, and it does not have the `window`.

The workaround is to skip this bit of code when building the website, and by the time your website is executed on the client side by your users, they are using a browser so the `window` will be available.

What was frustrating was that my project was working totally fine when I was developing with `gatsby develop`. The problem will only surface up when you are use `gatsby build`. It's when you are really tired late at night and just trying the wrap up the day by deploying the website right before you go to bed. Then the error message... *Window is not defined!* 

It took a few hours to try many suggestions and solve the issue. The solutions that worked for other people on the forums did not for me. It's probably because the Gatsby, React and other libraries have been updated, and the answers I found were at least two years old.

So, here I am in the early 2022, and here is a solution worked for me.

`React.lazy()`



= gatsby version



