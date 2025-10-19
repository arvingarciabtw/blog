function Article8() {
  return (
    <>
      <p>
        I took a break from{' '}
        <a
          href="https://www.theodinproject.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Odin Project
        </a>{' '}
        for about a month, but I'm ready to dive back in from where I left off.
        In my last article, I talked about React basics, so this time I'll talk
        about what I've learned so far on state and how rendering works.
      </p>
      <p>
        Since it has been a while, I needed a refresher on React, so this{' '}
        <a
          href="https://react.dev/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          resource
        </a>{' '}
        helped a lot! For people that want to learn React, I recommend taking a
        look at this as it teaches you all that you need to know in greater
        detail than what I will try to explain here.
      </p>
      <p>
        But before we talk about state, it's important to know how "rendering"
        works in React. Before components are displayed on the screen, they have
        to be rendered by React. There's essentially three steps to requesting
        and serving UI:
      </p>
      <ol>
        <li>Triggering a render</li>
        <li>Rendering the component</li>
        <li>Committing to the DOM</li>
      </ol>
      <p>
        For the first step, a render is triggered for the following conditions:
        (1) when it's the component's initial render and (2) the state has been
        updated. More on what state is later!
      </p>
      <p>
        After the render has been triggered, React calls your components, and
        calling these components is what rendering means. On initial render,
        React will call the root component. While for re-renders, React will
        call the component whose state update triggered the render.
      </p>
      <p>
        After rendering or calling your components, React will modify the DOM.
        However, DOM nodes will only change if there's a difference between
        renders. On initial render, all of the DOM nodes React created will be
        put on the screen using the<code>appendChild()</code>DOM API. For
        re-renders, React will do the minimal operations needed to make the DOM
        match the latest rendering output.
      </p>
      <p>
        I mention all of that because it's important to know how rendering
        works, especially since as mentioned, updating the state triggers a
        re-render of that component. So anyways, what is state?
      </p>
      <p>
        We need state because we want to retain data between renders. With local
        variables, this is not possible because they don't persist between
        renders. Also, changing these local variables don't trigger renders (as
        mentioned before, re-renders happen when the <em>state</em> is updated).
      </p>
      <p>
        Alright, so we need something to hold our state, but we also need
        something to update that state. This is where we can use the{' '}
        <code>useState</code>hook. Put simply, a hook is a special function that
        allows developers to use state and other React features.
      </p>
      <p>
        This<code>useState</code>hook provides us two things: (1) a{' '}
        <em>state variable</em> that holds our state, which retains data between
        renders and (2) a <em>state setter function</em> that updates the state
        variable (which again, will trigger a re-render since the state is
        updated).
      </p>
      <p>The syntax for it looks like this:</p>
      <pre>{`
  import { useState } from "react"

  const [number, setNumber] = useState(0)
        `}</pre>
      <p>
        We import the<code>useState</code>hook with a named import. Then, we
        have a state variable called<code>number</code>, and a state setter
        function called<code>setNumber</code>. The argument that we pass in the{' '}
        <code>useState</code>hook will be the value of the state variable on
        initial render. So, in this example, it just means that our{' '}
        <code>number</code>state variable has a value of 0 on initial render.
      </p>
      <p>To use our state setter function, we could do something like this:</p>
      <pre>{`
  function click() {
    setNumber(number + 1);
  }
        `}</pre>
      <p>
        This just means that whenever our<code>click()</code>function is called,
        we will update our
        <code>number</code>state variable, incrementing it by 1. Since our state
        got updated, the component that holds this state will re-render.
      </p>
      <p>
        Put simply, that's basically how state works! But, it can get quite
        complicated. For example:
      </p>
      <pre>{`
  function click() {
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);
  }
        `}</pre>
      <p>
        At first glance, it seems that when this function is called, we update
        our state three times so we get three re-renders, and ultimately the
        value of our state variable gets increased by 3. But, it only actually
        increases by 1!
      </p>
      <p>
        Now, I don't want this article to be too long so I won't explain the
        gist of it, but this{' '}
        <a
          href="https://react.dev/learn/queueing-a-series-of-state-updates"
          target="_blank"
          rel="noopener noreferrer"
        >
          lesson
        </a>{' '}
        from the resource I mentioned before goes into great detail on why this
        is the case. I also urge you to read about the other lessons there
        concerning state, as it is explained very well and there are even
        exercises.
      </p>
      <p>
        And that's about it! I actually wanted to also talk about effects in
        this article, but I noticed it was already getting slightly too lengthy.
        So, I'll talk about it next time once I complete this{' '}
        <a
          href="https://github.com/arvingarciabtw/the-odin-project/tree/main/full-stack-javascript/fsj-04-react/22-memory-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          memory card game
        </a>{' '}
        that I'm building.
      </p>
    </>
  );
}

export default Article8;
