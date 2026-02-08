---
title: "React: The Basics"
description: "A blog article explaining the fundamentals of React."
pubDate: "Sep 14 2025"
---

So far, I'm currently on the [React course](https://www.theodinproject.com/paths/full-stack-javascript/courses/react) of The Odin Project curriculum.

React is a JavaScript library that lets you build user interfaces out of individual pieces called components. You can create your own components and combine these components into entire screens, pages, and apps.

There's good reason why React is one of the most powerful and widely used JavaScript libraries. Some reasons why React is useful is due to components being reusable, React being unopinionated, and it being well-supported due to the large community.

There's many ways to set up React in a project, but [Vite](https://vite.dev/guide/) specifically was used in The Odin Project. Vite is essentially a fast tool that simplifies bundling and development server setup for web applications.

To scaffold a Vite project, just type and execute `npm create vite@latest` in the terminal and follow the prompts. The project name and the template can also be specified with additional command line options. For example:

The command `npm create vite@latest my-react-app -- --template react` would scaffold a Vite + React project.

Now, let's talk about React components. Components are simply independent reusable chunks that make up a user interface. So, you could have something like: an `App` component that represents the main application,`NavBar` which is the navigation bar, `MainContent` which contains the main content, and `Footer` which will be the footer.

React components are just JavaScript functions. It's important to remember though that React components _must_ be capitalized. So, a component would look like this:

```javascript
function Footer() {
  return <p>This is a footer</p>;
}
```

If the component was not capitalized, it would not work as expected.

We're able to write HTML markup inside a JavaScript because of [JSX](https://legacy.reactjs.org/docs/introducing-jsx.html), a syntax extension for JavaScript. However, it's essential to know that JSX has some rules that must be followed:

1. Return a single root element.
2. Close all tags.
3. camelCase most things.

This [lesson](https://www.theodinproject.com/lessons/node-path-react-new-what-is-jsx) goes through the rules in a little bit more detail.

Sometimes, we'd want components to display different things depending on different conditions. We can conditionally render JSX using JavaScript syntax like `if` statements, `&&`, and `? :` operators. I don't want to make this article too long so I won't go into detail on those, but this [article](https://react.dev/learn/conditional-rendering) from the React documentation explains it well.

There are also times where we'd want to display multiple similar components from a collection of data. We can use the built-in JavaScript array methods to manipulate an array of data. This [article](https://react.dev/learn/rendering-lists) from the React documentation goes over how to use `filter()` and `map()` to filter and transform an array of data into an array of components.

That's about it for now. I'll talk more about state once I've finished the [CV Application](https://www.theodinproject.com/lessons/node-path-react-new-cv-application) project, as I'm currently on it right now. Hoping I'll finish it next week!
