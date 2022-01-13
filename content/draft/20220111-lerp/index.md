---
slug: '/blog/linear-interpolation-and-easing/'
title: How to Use Lerp and Easing Correctly
subtitle: Let's keep linear interpolation linear
date: 2022-12-11
updated: null
tags:
- p5js
- animation
- easing
- javascript
- creative coding
featuredImage: thumb.jpeg
---

- easing makes animation look more natural.
- many types of easing available
  - link to easings.net
- a quick way to apply easing is by self-updating a value little by little every time.
```js
x = lerp(x, s, e)
```
- the problem with self-updating is that linear interpolation is now no longer linear, making it hard to control. Also, the value will never reach the end it will always be 99.9999....% there. It's also hard to apply different types of easing.

- Instead, we keep the time running linearly, and apply easing on top of that. We will use `deltaTime` to update the lerp `t`, and use easing function to manipulate the spacing between each frame.

- example of applying easing in/out