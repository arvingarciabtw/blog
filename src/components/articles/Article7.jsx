function Article7() {
  return (
    <>
      <p>
        So far, I'm currently on the{' '}
        <a
          href="https://www.theodinproject.com/paths/full-stack-javascript/courses/react"
          target="_blank"
          rel="noopener noreferrer"
        >
          React course
        </a>{' '}
        of The Odin Project curriculum.
      </p>
      <p>
        React is a JavaScript library that lets you build user interfaces out of
        individual pieces called components. You can create your own components
        and combine these components into entire screens, pages, and apps.
      </p>
      <p>
        There's good reason why React is one of the most powerful and widely
        used JavaScript libraries. Some reasons why React is useful is due to
        components being reusable, React being unopinionated, and it being
        well-supported due to the large community.
      </p>
      <p>
        There's many ways to set up React in a project, but{' '}
        <a
          href="https://vite.dev/guide/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite
        </a>{' '}
        specifically was used in The Odin Project. Vite is essentially a fast
        tool that simplifies bundling and development server setup for web
        applications.
      </p>
      <p>
        To scaffold a Vite project, just type and execute{' '}
        <code>npm create vite@latest</code> in the terminal and follow the
        prompts. The project name and the template can also be specified with
        additional command line options. For example:
      </p>
      <p>
        The command{' '}
        <code>npm create vite@latest my-react-app -- --template react</code>{' '}
        would scaffold a Vite + React project.
      </p>
      <p>
        Now, let's talk about React components. Components are simply
        independent reusable chunks that make up a user interface. So, you could
        have something like: an <code>App</code> component that represents the
        main application,<code>NavBar</code> which is the navigation bar,{' '}
        <code>MainContent</code> which contains the main content, and{' '}
        <code>Footer</code> which will be the footer.
      </p>
      <p>
        React components are just JavaScript functions. It's important to
        remember though that React components <em>must</em> be capitalized. So,
        a component would look like this:
      </p>
      <pre>{`
function Footer() {
  return <p>This is a footer</p>;
}
        `}</pre>
      <p>
        If the component was not capitalized, it would not work as expected.
      </p>
      <p>
        We're able to write HTML markup inside a JavaScript because of{' '}
        <a
          href="https://legacy.reactjs.org/docs/introducing-jsx.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          JSX
        </a>
        , a syntax extension for JavaScript. However, it's essential to know
        that JSX has some rules that must be followed:
      </p>
      <ol>
        <li>Return a single root element.</li>
        <li>Close all tags.</li>
        <li>camelCase most things.</li>
      </ol>
      <p>
        This{' '}
        <a
          href="https://www.theodinproject.com/lessons/node-path-react-new-what-is-jsx"
          target="_blank"
          rel="noopener noreferrer"
        >
          lesson
        </a>{' '}
        goes through the rules in a little bit more detail.
      </p>
      <p>
        Sometimes, we'd want components to display different things depending on
        different conditions. We can conditionally render JSX using JavaScript
        syntax like <code>if</code> statements, <code>&amp;&amp;</code>, and{' '}
        <code>? :</code> operators. I don't want to make this article too long
        so I won't go into detail on those, but this{' '}
        <a
          href="https://react.dev/learn/conditional-rendering"
          target="_blank"
          rel="noopener noreferrer"
        >
          article
        </a>{' '}
        from the React documentation explains it well.
      </p>
      <p>
        There are also times where we'd want to display multiple similar
        components from a collection of data. We can use the built-in JavaScript
        array methods to manipulate an array of data. This{' '}
        <a
          href="https://react.dev/learn/rendering-lists"
          target="_blank"
          rel="noopener noreferrer"
        >
          article
        </a>{' '}
        from the React documentation goes over how to use <code>filter()</code>{' '}
        and <code>map()</code> to filter and transform an array of data into an
        array of components.
      </p>
      <p>
        That's about it for now. I'll talk more about state once I've finished
        the{' '}
        <a
          href="https://www.theodinproject.com/lessons/node-path-react-new-cv-application"
          target="_blank"
          rel="noopener noreferrer"
        >
          CV Application
        </a>{' '}
        project, as I'm currently on it right now. Hoping I'll finish it next
        week!
      </p>
    </>
  );
}

export default Article7;
