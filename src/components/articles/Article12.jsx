function Article12() {
  return (
    <>
      <p>
        I'm continuing with the{' '}
        <a
          href="https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Node.js course
        </a>{' '}
        from The Odin Project curriculum. Last week, I talked about what Node.js
        is and how its asynchronous, event-driven nature works. This week, I'm
        diving into Express.js, which is a web framework for Node.js that makes
        building web servers so much easier.
      </p>
      <p>
        From the{' '}
        <a
          href="https://expressjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Express.js documentation
        </a>
        :
      </p>
      <blockquote>
        "Express is a minimal and flexible Node.js web application framework
        that provides a robust set of features for web and mobile applications."
      </blockquote>
      <p>
        Essentially, Express.js is a framework that sits on top of Node.js and
        gives us a clean, simple way to handle HTTP requests and responses.
        While you could build a web server using just Node.js's built-in{' '}
        <code>http</code> module, Express makes it significantly more
        straightforward and gives us a lot of useful features out of the box.
      </p>
      <p>
        Let's talk about why Express is so popular. For one, it simplifies
        routing. Without Express, handling different routes and HTTP methods
        with plain Node.js can get messy pretty quickly. Express gives us a
        clean API to handle routes. It also has middleware support, which I'll
        get into later. Plus, it's unopinionated, meaning it doesn't force you
        into a specific way of structuring your application.
      </p>
      <p>
        To get started with Express, you first need to install it. In your
        project directory, simply run <code>npm install express</code> in your
        terminal. Then, you can create a basic server like this:
      </p>
      <pre>{`
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
      `}</pre>
      <p>
        That's it! Just run <code>node app.js</code> (or whatever you named your
        file), and you have a web server running on port 3000. Pretty
        straightforward, right?
      </p>
      <p>
        Now, let's break down what's happening here. We're importing Express and
        creating an application instance with <code>express()</code>. Then,
        we're defining a route using <code>app.get()</code>. The first argument
        is the path (<code>'/'</code> in this case, which is the root), and the
        second argument is a callback function that gets executed when someone
        visits that route.
      </p>
      <p>
        The callback function has two parameters: <code>req</code> (request) and{' '}
        <code>res</code> (response). The <code>req</code> object contains
        information about the incoming HTTP request, while the <code>res</code>{' '}
        object is used to send a response back to the client. In this example,
        we're just sending back the text "Hello, World!" with{' '}
        <code>res.send()</code>.
      </p>
      <p>
        Express supports all the standard HTTP methods. Apart from{' '}
        <code>app.get()</code>, you can also use <code>app.post()</code>,{' '}
        <code>app.put()</code>, <code>app.delete()</code>, and so on. Here's a
        simple example:
      </p>
      <pre>{`
app.post('/submit', (req, res) => {
  res.send('Form submitted!');
});
      `}</pre>
      <p>
        One of the most powerful features of Express is middleware. Put simply,
        middleware are functions that have access to the request and response
        objects, and they can execute code, modify these objects, end the
        request-response cycle, or call the next middleware in the stack.
      </p>
      <p>
        Middleware functions are executed sequentially, and each middleware can
        either end the request or pass control to the next middleware using{' '}
        <code>next()</code>. Here's an example:
      </p>
      <pre>{`
app.use((req, res, next) => {
  console.log(\`\${req.method} request to \${req.url}\`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
      `}</pre>
      <p>
        In this example, every time a request comes in, our middleware logs the
        HTTP method and URL, then calls <code>next()</code> to pass control to
        the next handler. This middleware will run before any of our route
        handlers.
      </p>
      <p>
        Express also has built-in middleware for common tasks. For example, to
        parse JSON data from POST requests, you can use{' '}
        <code>express.json()</code>:
      </p>
      <pre>{`
app.use(express.json());

app.post('/api/data', (req, res) => {
  console.log(req.body); // this will contain the parsed JSON
  res.json({ message: 'Data received!' });
});
      `}</pre>
      <p>
        Route parameters are another useful feature in Express. Sometimes, you
        want dynamic segments in your URLs. For example, if you're building a
        blog and want to access different articles by their ID, you can do this:
      </p>
      <pre>{`
app.get('/article/:id', (req, res) => {
  const articleId = req.params.id;
  res.send(\`You requested article \${articleId}\`);
});
      `}</pre>
      <p>
        The <code>:id</code> syntax creates a route parameter, and you can
        access its value through <code>req.params.id</code>. This is similar to
        how dynamic routing works in React Router, which I talked about in a{' '}
        <a
          href="https://blog.arvingarcia.com/client-side-routing-with-react-router"
          target="_blank"
          rel="noopener noreferrer"
        >
          previous article
        </a>
        !
      </p>
      <p>
        Error handling in Express is also quite straightforward. You can create
        error-handling middleware by defining a function with four parameters
        instead of three:
      </p>
      <pre>{`
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
      `}</pre>
      <p>
        This middleware should be defined after all your other routes and
        middleware. When an error occurs, Express will automatically skip to
        this error handler.
      </p>
      <p>
        That's about it for this week! Express.js makes building web servers so
        much more approachable than working with raw Node.js. Next week, I'll go
        over authentication with{' '}
        <a
          href="https://www.passportjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Passport.js
        </a>
        !
      </p>
    </>
  );
}

export default Article12;
