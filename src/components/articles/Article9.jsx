function Article9() {
  return (
    <>
      <p>
        This week, I've completed the{' '}
        <a
          href="https://www.theodinproject.com/paths/full-stack-javascript/courses/react"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>{' '}
        course from The Odin Project! The final project for this one is
        developing a single page application that utilizes React Router for
        client-side routing. So, I'll go over what I've learned while doing this
        project.
      </p>
      <p>
        First, let's talk about the difference of a single page application
        (SPA) from a multi-page application (MPA). A SPA is a web application
        that loads and updates content dynamically. So, every time we navigate
        through different pages in our app, the page doesn't need to reload!
      </p>
      <p>
        However, for a MPA, the page would have to reload when we navigate
        through different sections. But, MPAs do have some advantages over SPAs,
        like{' '}
        <a
          href="https://medium.com/@sehban.alam/single-page-applications-spas-vs-multi-page-applications-mpas-advantages-and-challenges-df06bee3fed1"
          target="_blank"
          rel="noopener noreferrer"
        >
          better SEO
        </a>
        . As of writing, I actually refactored this blog of mine to a single
        page React application! I used to simply have different HTML files for
        each blog article.
      </p>
      <p>
        So, where does client-side routing actually come into all of this? Well,
        it's what will help us in creating our SPA! Client-side routing is a
        type of routing where navigation between different pages of a web
        application is managed by the browser using JavaScript.
      </p>
      <p>
        Client-side routing does come with some caveats. For example, you'd need
        to notify screen-readers of route updates manually. Thankfully, we can
        use a routing library for React applications like{' '}
        <a
          href="https://reactrouter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Router
        </a>{' '}
        to help us with our concerns!
      </p>
      <p>
        Let's take a look at some code from a{' '}
        <a
          href="https://www.theodinproject.com/lessons/node-path-react-new-react-router"
          target="_blank"
          rel="noopener noreferrer"
        >
          lesson
        </a>{' '}
        in The Odin Project:
      </p>
      <pre>{`
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Profile from "./Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
      `}</pre>
      <p>
        The <code>createBrowserRouter</code> and <code>RouterProvider</code> are
        the important stuff to take note of here.{' '}
        <code>createBrowserRouter</code> simply creates our router
        configuration. Its configuration will be based on the arguments passed
        into it, which will be an array of routes, represented as objects.
      </p>
      <p>
        Each route has a <code>path</code> and <code>element</code> property. In
        the <code>path</code> property, the value should be its path (what a
        surprise!) in the URL. Then, in the <code>element</code> property, its
        value should be the component you want to render when the user navigates
        to the path you specified prior.
      </p>
      <p>
        However, to make sure the browser does <i>not</i> reload the page
        whenever we navigate through our application, we <em>must</em> use{' '}
        <code>Link</code>, a custom element from React Router, instead of a
        regular <code>a</code> tag. It would look something like this:
      </p>
      <pre>{`
import { Link } from "react-router";

const App = () => {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
      `}</pre>
      <p>
        React Router has another useful custom element called{' '}
        <code>Outlet</code>. An <code>Outlet</code> basically lets us render a
        child route of a parent route. But, what's a child route? Let's take a
        look at an example, taken from the source code of this blog!
      </p>
      <pre>{`  
// These are my routes, located in another file
const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/:url', element: <ArticlePage /> },
    ],
  },
];

// App.jsx
import { Outlet } from 'react-router';

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}
      `}</pre>
      <p>
        So, in our route, we introduced a new property called{' '}
        <code>children</code>. This property has an array of routes inside it.
        By default, it will render a <code>HomePage</code> component. However,
        if our URL changes (in this case, the user clicks on a blog article in
        the home page), then the <code>Outlet</code> will now render the{' '}
        <code>ArticlePage</code> component. Pretty cool!
      </p>
      <p>
        And while we're on the topic of <code>Outlet</code>, it might be worth
        checking out <code>useOutletContext</code>. You can pass any value into
        the <code>context</code> prop of an <code>Outlet</code>, and then you
        can retrieve this value inside any child component using the{' '}
        <code>useOutletContext</code> hook.
      </p>
      <p>
        You might notice as well that one of the child routes in our code above
        points to a path <code>/:url</code>.
      </p>
      <p>
        <code>:</code> turns the path section after it into a “dynamic segment”.
        Dynamic segments will match dynamic values in that URL's position. These
        are called <code>params</code>, which can be used with the help of the{' '}
        <code>useParams</code> hook. If you check out some of my other articles,
        you can see that their paths are dynamic!
      </p>
      <p>
        And that's about it! I also learned some other stuff while doing the
        project like testing with{' '}
        <a href="https://vitest.dev/" target="_blank" rel="noopener noreferrer">
          Vitest
        </a>{' '}
        and styling components with{' '}
        <a
          href="https://github.com/css-modules/css-modules"
          target="_blank"
          rel="noopener noreferrer"
        >
          CSS modules
        </a>
        . But, I wanted to focus on client-side routing for this article. Feel
        free to check out the{' '}
        <a
          href="https://nexus-tech-shop.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          live preview
        </a>{' '}
        and the{' '}
        <a
          href="https://github.com/arvingarciabtw/the-odin-project/tree/main/full-stack-javascript/fsj-04-react/23-shopping-cart"
          target="_blank"
          rel="noopener noreferrer"
        >
          source code
        </a>{' '}
        of my project!
      </p>
      <p>
        I'm now on the databases course of The Odin Project, so I'll talk about
        that next week!
      </p>
    </>
  );
}

export default Article9;
