---
slug: '/blog/video-export-from-p5js-sketch/'
title: 'Video Export from p5.js Sketch'
subtitle: 'Save mp4 videos from within a browser. No server needed.'
date: 2020-12-05
tags:
- javascript
- p5js
- creative coding
- canvas
- html5
featuredImage: thumb.png
---

The p5.js library itself does not have a way to export a video out of a sketch but because everything you do is simply drawing on an HTML5 Canvas, if you can find a library to export what’s on the Canvas, you should be able to use it. I recently stumbled upon a really good and simple library that exports to H.264 mp4 video straight out of a browser (no server needed) and made a simple example to make it work with a p5js sketch.

If you would rather check out the original library, here is the link, and I will also link to a few other resources at the end of this post.

https://github.com/TrevorSundberg/h264-mp4-encoder

I only spent a little time with the library, but by far, this has been the easiest and most reliable way to export a video out of a p5js sketch. I have tried a few other libraries that will export to either image sequences or .webm videos, but this library directly exports to .mp4 format, which I think is still better supported than .webm, and also supports the current version of p5js (v1.x)

The example included in the original repo explains everything for general use, but I made two quick examples if you just want to take it and use it in your p5js sketch.

## Fixed-length Animation Loop

The first one is when you have a fixed-length animation. You can first define `numFrames` and play and record the animation. The only difference between a regular p5js sketch and this one is that I created the `anim()` function to replace `draw()` so I can loop it when I want to. You can just treat it like the draw function and do everything you need to inside. The UI is very minimal. If you only want to preview the animation, check the box, *preview only*. Here is the code:

`gist:erraticgenerator/aef25bc40b0bda91690c7f3d150c61e7`

## Within the Regular Draw Loop

The second example is when you want to record a video while the animation is being played. It won’t loop but will just capture the frames as it plays.

`gist:erraticgenerator/4e416428c1f04063ab6958afae11ff7b`

It’s just amazing to think about how much a web browser can do these days. And thanks to people who generously share these libraries, I can have more fun with coding. Here are some resources that I found useful:

- The original repo: https://github.com/TrevorSundberg/h264-mp4-encoder
- Mattdesl’s fork: https://github.com/mattdesl/h264-mp4-encoder (I haven’t tried but it says it will be faster than the original)
- An Observable notebook: https://observablehq.com/@rreusser/h264-mp4-encoder