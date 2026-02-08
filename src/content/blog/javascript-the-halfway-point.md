---
title: "JavaScript: The Halfway Point"
description: "A blog article explaining the author's journey and learnings so far, going through the JavaScript course of The Odin Project."
pubDate: "Aug 24 2025"
---

This week was filled with a _lot_ of JavaScript.

Continuing on from where I left off last week, I moved on forward with the [JavaScript](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript) course in The Odin Project curriculum. There's a lot of concepts to unpack so far: objects, object constructors, factory functions, classes, modules, package managers ([npm](https://docs.npmjs.com/about-npm)), bundlers ([Webpack](https://webpack.js.org/guides/getting-started/)), OOP principles, linting, and asynchronous JavaScript. That's a lot, so I'll do my best to go through my learnings for each of them.

A simple way to organize code is by using objects to group things. Typically, the best way to define objects is using the object literal syntax, which looks like this: `const anObject = { key: value };`. Then, when we want an object that will be duplicated, we can use an object constructor which is essentially just a function that has the first letter uppercased by convention. This concept was put into practice in my [library](https://github.com/arvingarciabtw/the-odin-project/tree/main/full-stack-javascript/fsj-02-javascript/08-library) project.

Moving forward, factory functions and the module pattern was explored. Previously, with an object constructor, you'd need to use the `new` keyword to create an object. But, with factory functions, you set up and _return the new object_ when you invoke the function. My [tic-tac-toe](https://github.com/arvingarciabtw/the-odin-project/tree/main/full-stack-javascript/fsj-02-javascript/09-tic-tac-toe) project uses this concept. An example of a factory function:

```javascript
function createPerson(name) {
  const username = "@" + name;
  return { name, username }; // As you can see, we return an object
}
```

Typically, a factory function is used to make multiple objects. But, there are cases where you would want only _one instance_ of it, and that is where an [Immediately Invoked Function Expression (IIFE)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) comes into play. This is also called the module pattern. A sample code snippet is provided below, taken from a [lesson](https://www.theodinproject.com/lessons/node-path-javascript-factory-functions-and-the-module-pattern) in The Odin Project.

```javascript
const calculator = (function () {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return { add, sub, mul, div };
  })();

  calculator.add(3,5); // 8
  calculator.sub(6,2); // 4
  calculator.mul(14,5534); // 77476
}
```

But personally, I prefer classes much more than factory functions. You can create an object using the `class` keyword, which does the exact same thing as object constructors. I personally find classes to be much more readable and intuitive, and so I used classes in all of the projects moving forward.

Furthermore, ES6 (or ECMAScript 2015) introduced something called [ES6 modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules). It allows you to modularize JavaScript code into modules and make them reusable across your application. Basically, you isolate some code into its own file, then you export whatever it is other files may need. Then, if other files would ever need that isolated code, these files can import it!

Now, there are a lot of third party code out there that can help us with our application. For example, in some of the projects I will mention later, a utility library named `date-fns` can be used to help you format your dates accordingly. To use these external libraries, we can import them through the use of a package manager like [npm](https://docs.npmjs.com/about-npm).

However, having a bunch of individual modules and imported third party files can reduce performance. Thankfully, bundlers like [Webpack](https://webpack.js.org/guides/getting-started/) helps in processing and optimizing our code in various ways. I'm still not entirely confident on how bundling really works, but the documentation explains the necessary stuff to bundle a simple web application. My [restaurant page](https://github.com/arvingarciabtw/the-odin-project/tree/main/full-stack-javascript/fsj-02-javascript/10-restaurant-page) project used Webpack as its bundler.

It is also worth noting that you can have separate configurations for the development and production environment of your application. The [documentation](https://webpack.js.org/guides/production/) for this helps greatly, and you can even use a utility called `webpack-merge` to make the configuration a lot cleaner. My [to-do list](https://github.com/arvingarciabtw/the-odin-project/tree/main/full-stack-javascript/fsj-02-javascript/11-to-do-list) project uses this configuration setup.

By this point, it is important to know about good principles around the object oriented programming (OOP) paradigm since I've been using objects and classes a lot. This [video series](https://www.youtube.com/playlist?list=PLZlA0Gpn_vH9kocFX7R7BAe_CvvOCO_p9) by Web Dev Simplified is a fantastic and concise resource covering the SOLID design principles. I'd say the code quality in my projects currently are far from perfect, but I do plan on working on improving it for each and every project I work on.

Another useful concept explored is linting. Admittedly, I didn't set up a linter and a formatter for the next project (which I'll get to later) because I use a Neovim distribution called [LazyVim](https://www.lazyvim.org/) that comes with a built-in linter and formatter on save. However, just to avoid confusion with other learners when I share my projects, I've decided to implement [ESLint](https://eslint.org/docs/latest/use/getting-started) and [Prettier](https://prettier.io/docs/) configs for future projects.

And now, let's talk about asynchronous functions in JavaScript. Basically, these are functions that happen in the background while the rest of the code executes. This is particularly useful for fetching data from a server to display on a site, just like what I did here in my [weather app](https://github.com/arvingarciabtw/the-odin-project/tree/main/full-stack-javascript/fsj-02-javascript/12-weather-app) project.

The concept that makes asynchronous JavaScript possible is the `Promise` object. This [article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) from MDN web docs talks about the `Promise` object and its syntax. While you can use this syntax to do stuff like fetching data from a server, the use of the `async` and `await` keywords are much more readable and intuitive. This [article](https://javascript.info/async-await) explains it pretty clearly.

On another note, I also want to talk a bit about AI use (not this again...). At the end of this [article](https://blog.arvinagarcia.com/articles/01.html), I mentioned how I used AI to guide me through discovering a solution to a problem. While this is fine, I've realized that it would be a lot better in the long run if I could form those questions myself anyways. If I can't figure out the right questions to ask myself on what is going wrong with my application, then clearly there is something I don't understand about the flow of my program. I need to have the skill of understanding the problem myself, without having to ask AI to guide me.

And when I do decide that I'm quite stuck, I should instead be asking for help from the community on Discord, instead of AI. Doing so would not just help me understand or solve my problem, but also build the skill of asking the right questions. It also fosters my skill of how to communicate properly with other developers, and how to take their advice to heart. It's a bit embarrassing saying all this now, because this was pretty much all said in the beginning of the curriculum. Well anyways, it's time to ban myself from using AI. For real this time.

And that's about it. Next week will be quite the challenge, since I'm expecting to be doing the battleship project. In the first time I was doing The Odin Project, this was where I stopped. I hope to overcome this hurdle this time around.
