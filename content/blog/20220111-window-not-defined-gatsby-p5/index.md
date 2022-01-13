---
slug: '/blog/window-not-defined-gatsbyjs-p5js/'
title: Window Is Not Defined
subtitle: An error while using gatsbyjs and p5js together
date: 2022-01-13
updated: null
tags:
- p5js
- gatsbyjs
- reactjs
- javascript
- web development
featuredImage: thumb.jpeg
---

![Photo by https://unsplash.com/photos/eQQI_HzT9RE](thumb.jpeg)

You may have encountered the error, `window is not defined` while working with gatsbyjs/reactjs and frontend libraries such as p5js that relies on `window` object to draw graphics. Here is how I was able to get around the issue without relying on another package.

## A bit of background
I use `react-p5-wrapper` module when I work with p5js and React together. (I will maybe make another post on how to use this module.) I have not had this `window` issue so far, probably because React does clien-side rendering. But Gatsbyjs is a bit different.

Gatsbyjs is a static site generator, which means it does not require backend server to host your website, but when it builds the static site from your local machine (or from the cloud), it does use [server-side rendering](https://www.gatsbyjs.com/docs/glossary/server-side-rendering/) with Node.js, so when the server building your website is reading and executing your code and it finds you are using the `window` object, it will throw an error because the server is not a browser, and it does not have the `window`.

The workaround is to skip this bit of code running when building the website. By the time your website is executed on the client side by your users, they are using a browser so the `window` will be available and the code will run fine.

## It worked when I was developing, though.
What was frustrating to me was that my project was working totally fine when I was developing with `gatsby develop`. The problem will only surface up when you `gatsby build`. It's usually when you are really tired late at night and just trying the wrap up the day by deploying the website right before you go to bed. Then the error message... *Window is not defined!* 

There were many suggestions online, which I will link to below. One used `loadable` package, etc., but I did not want to add another dependency just to solve this problem. So I ended up using `React.lazy` method. I used Gatsby version 4.

## How I solved it
I said earlier that I use `react-p5-wrapper`. Typically this is how I would import it:

```js
import { ReactP5Wrapper } from 'react-p5-wrapper'
```

But because `p5` relies on `window` and Gatsbyjs will try to import this with server at build time, it will throw an error, `window is not defined`.

So we will use `React.lazy()`.

```js
const ReactP5Wrapper = React.lazy(() => 
  import('react-p5-wrapper).then(module => ({
    default: module.ReactP5Wrapper
  }))
)
```
I have to admit this looks kinda crazy for just a simple import statement, but there is a reason. According to the [React Documentation](https://reactjs.org/docs/code-splitting.html#reactlazy), the `React.lazy` function lets you render a dynamic import as a regular component. But the component has to be `default` export, and our `react-p5-wrapper` is not a default export. That's why we need `then` statement to get the proper module.

So, the import works now, then how do we use the component in our app? It's also well-documented in the React website. Just wrap the component around with `<Suspense>`.

```js
import React from 'react'
import sketch from '../mysketch' // p5js sketch
const ReactP5Wrapper = React.lazy(() => 
  import('react-p5-wrapper).then(module => ({
    default: module.ReactP5Wrapper
  }))
)

//... in some component
function MyComponent() {
  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <ReactP5Wrapper sketch={sketch} />
      </React.Suspense>
    </>
  );
}
```

You should also check whether it's currently rendering server side or not by adding a condition:

```js
function MyComponent() {
  const isSSR = typeof window === 'undefined'

  return (
    <>
      {!isSSR && (
        <React.Suspense fallback={<div>Loading...</div>}>
          <ReactP5Wrapper sketch={sketch} />
        </React.Suspense>
      )}
    </>
  );
}
```
## Other possible solutions
Here are resources I found online. My solution is based on Gatsby's guides. Other solutions, unfortunately, were too complex for my liking or did not work for me, but I will leave theme here for future reference.

- General guides from Gatsby (very helpful): 
  - https://www.gatsbyjs.com/docs/debugging-html-builds/
  - https://www.gatsbyjs.com/docs/using-client-side-only-packages/
- Here is a discussion on the problem from ReactP5Wrapper repo: https://github.com/P5-wrapper/react/issues/37
- A discussion on p5js repo: https://github.com/processing/p5.js/issues/3926

