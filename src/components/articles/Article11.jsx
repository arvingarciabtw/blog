function Article11() {
  return (
    <>
      <p>
        I'm now currently on the{' '}
        <a
          href="https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Node.js course
        </a>{' '}
        of The Odin Project curriculum. I've progressed farther than I've
        expected this week. I'm currently doing the file uploader project, which
        involves using the{' '}
        <a
          href="https://www.prisma.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prisma ORM
        </a>
        . But, to keep this article short and simple, I'll just simply talk
        about Node.js!
      </p>
      <p>
        From the actual{' '}
        <a
          href="https://nodejs.org/en/about/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Node.js website
        </a>
        :
      </p>
      <blockquote>
        "As an asynchronous event-driven JavaScript runtime, Node.js is designed
        to build scalable network applications."
      </blockquote>
      <p>
        Node.js is a JavaScript runtime that allows us to write JavaScript code
        outside of the browser. So, it allows us to write server-side code in
        JavaScript. Node.js lets us read and write local files, create HTTP
        connections, and listen to network requests.
      </p>
      <p>
        Going back to its definition, it's a runtime that is asynchronous and
        event-driven. This is where callbacks become crucial to understanding
        how Node.js works.
      </p>
      <p>
        Callbacks are fundamental to Node.js's asynchronous nature. A callback
        is simply a function that gets passed as an argument to another function
        and is executed after some operation completes. Instead of waiting for
        time-consuming operations like file reads or database queries to finish,
        Node.js continues executing other code and calls your callback function
        when the operation is done.
      </p>
      <p>
        For example, when reading a file, you don't want your entire server to
        freeze while waiting for the file system. With callbacks, Node.js can
        handle other requests while the file is being read, then execute your
        callback once the data is ready:
      </p>
      <pre>{`
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File contents:', data);
});

console.log('This runs immediately, without waiting!');
      `}</pre>
      <p>
        This callback pattern is what makes Node.js so efficient for I/O-heavy
        applications. It can handle thousands of concurrent connections without
        creating a new thread for each one. While modern Node.js also supports{' '}
        <code>Promises</code> and <code>async/await</code> syntax, understanding
        callbacks is essential since they're the foundation of Node.js's
        event-driven architecture.
      </p>
      <p>
        The event-driven model means Node.js applications respond to events like
        incoming HTTP requests, file operations completing, or timers expiring
        by executing the appropriate callback functions. This design philosophy
        is what allows Node.js to be so scalable and performant for real-time
        applications.
      </p>
      <p>
        With all of that said, let's write a simple Hello World script and
        execute it with Node.js! In an <code>app.js</code>, write{' '}
        <code>console.log('Hello, World!')</code>.
      </p>
      <p>
        Then, simply write and execute <code>node app.js</code> in your
        terminal, and it should work.
      </p>
      <p>
        I'll talk about{' '}
        <a
          href="https://expressjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Express
        </a>{' '}
        in the article next week!
      </p>
    </>
  );
}

export default Article11;
