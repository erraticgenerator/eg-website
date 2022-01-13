---
slug: '/blog/p5js-animate-with-deltatime/'
title: A Better Way to Animate With deltaTime in p5js
subtitle: Still using frameCount for your animation?
date: 2022-01-08
updated: null
tags:
- p5js
- javascript
- animation
- creative coding
featuredImage: thumb.jpeg
---

![A photo by https://unsplash.com/photos/UAvYasdkzq8](thumb.jpeg)

## What's wrong with `frameCount` or frame-based animation?
Here is what I (and probably some of you) have been doing when creating animation with p5js or Processing. Say, I want to use the `sin()` function to control the x position of an ellipse. I need a variable to update the angle of the sine function. Because I want to quickly see the result, I usually use `frameCount` system variable. This variable increments by 1 every frame. Then I multiply some number to `frameCount` until I get the speed that I like.

```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  const x = width/2 + sin(frameCount * 0.05) * 100
  ellipse(x, height/2, 100, 100)
}
```

This approach may be fine for quick and simple experiments, but there is a very important problem here. The speed the ellipse is moving on your screen may not be the same speed the users see on *their* screens. In other words, the *frame rate* that your sketch is running at may not be the same depending on the devices and also the complexity of your sketch.

Relying on `frameCount` works great if you can *control* the frame rate. Pre-rendered videos are a great example. You export frames out of your program to create a video with a fixed frame rate (ie. 24fps or 30fps). But in the interactive context such as web or video games, you can never be sure of the frame rate. It depends on the users' device - it could be a brand new MacbookPro or a ten year-old netbook. Also, if your software dynamically generates a lot of graphic elements in real time, it will eventually burden even a powerful machine.

The p5js will try to run your sketch at 60 frames per second by default, but it's not a guarantee. You can check the current frame rate by calling `frameRate()` function.

```js
function draw() {
  // ...
  console.log(frameRate())
}
```

You will see the frame rate shifts quite a bit, therefore, it's not a reliable metric to use when determining the timing of your animation. Then how can we ensure that our animation plays at the same speed no matter the frame rate or the device people use? We have to use the delta time.

## What is delta time?
The delta time represents the time it takes between rendering the previous frame and the current frame. Now, we have to think of the speed in terms of time, instead of frames. 

For example, if you have a circle that moves 400 pixels in 1 second, it will move 6.666 pixel (400px/60frames) per frame at 60 frames per second, and will move 13.333 pixel (400px/30frames) per frame at 30 fps. It now covers different distance each frame based on the frame rate, but they will all reach the same destination in 1 second.

Okay, then how do we apply this concept in a p5js sketch?

## How to use deltaTime in p5js?
If you were to implement the delta time yourself, this is how it will look like:

```js
let last
let angle
let dt

function setup() {
  createCanvas(400, 400)
  last = new Date().getTime() // returned in milliseconds
  angle = 0
}

function draw() {
  // calculate delta time (dt)
  const now = new Date().getTime()
  dt = now - last
  last = now
  
  background(220)

  // convert ms to sec. (this is optional)
  dt *= 0.001

  // use dt in animation update
  angle += dt * 5
  const x = width/2 + sin(angle) * 100
  ellipse(x, height/2, 100, 100)
}
```

In the code above, `new Date().getTime()` will return you the number of milliseconds since Jan 1, 1970. If you are curious, [check out more info on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime). Then, in the `draw()` loop, we compare the current time to the last time to get the delta time or `dt`. Converting milliseconds to seconds is optional. I dot it because I prefer to count the time in seconds. 

And now we can use `dt` whenever we update our animation. `angle += dt * 5` means for each frame, the angle will update by 5. So 5 is the speed of the angle updating. Change it to 10 and it will update twice faster.

In fact, this approach of using the delta time is important enough that the p5js library provides us with the system variable called `deltaTime`, which does exactly the same thing as what we've done above. If you're interested in, check out [the p5js source code](https://github.com/processing/p5.js/blob/5d4fd14e57a0102448dbd0231bd031a4016b137c/src/core/main.js#L383) for how it's implemented.

So let's rewrite our example by using this `deltaTime` variable.

```js
let angle

function setup() {
  createCanvas(400, 400)
  angle = 0
}

function draw() {  
  background(220)

  // convert ms to sec. (this is optional)
  const dt = deltaTime * 0.001

  // use dt in animation update
  angle += dt * 5
  const x = width/2 + sin(angle) * 100
  ellipse(x, height/2, 100, 100)
}
```

Our code is more compact and there are less things to worry about. With this approach, animation may look choppy if the current frame rate is too low, but you can be sure that the time it takes for the same animation will always be the same.

## Conclusion
You have to think in *time*, not in *frames*. Instead of thinking about how much my circle will move in a frame, start thinking about how much it will move in a second. Again, this works in situations where you cannot control the frame rate. In a more traditional settings like hand-drawn or After Effects animation, you can control the frame rate so frame-based animation will work great. Also, if you go into physics simulation such as collision detection, then you will need a more advanced solution than the simple `deltaTime * speed`. I may write another post about that when I get a chance later.

If you liked my post, please follow me to get more stories like this. I write about creative coding for artists and designers. Thank you for reading and hope this was helpful!