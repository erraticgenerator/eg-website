---
slug: '/blog/react-p5-wrapper/'
title: Using p5js and React together
subtitle: Best of both worlds?
date: 2022-12-10
updated: null
tags:
- p5js
- reactjs
- javascript
- creative coding
featuredImage: thumb.jpeg
---

The p5js library lets you quickly create HTML5 Canvas-based graphics and animation. 

- there are several react p5js templates available on github. i have only tried a few but this one seems well-maintained, updated and flexible.
  - why i picked this one: refer to creator's comment on gh issues.
- why use react and p5 together?
  - handle UI separate from sketch code.
- how to use p5js react wrapper
  - p5 itself is great, the functions and variables it provides help create Canvas-based graphics and it has many DOM-related functionsbut if you try to build UI with it, it can quickly get unruly.
- example
  - slider control
  - sending props up and down
