function Article13() {
  return (
    <>
      <p>
        Continuing with the{' '}
        <a
          href="https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Node.js course
        </a>
        , this week I'll dive into authentication! Specifically,{' '}
        <a
          href="https://www.passportjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Passport.js
        </a>
        , which is authentication middleware for Node.js.
      </p>
      <p>
        Authentication is one of those topics that initially seemed quite
        intimidating to me. There's sessions, cookies, tokens, hashing,
        salting... it can get overwhelming pretty quickly. But, breaking it down
        into smaller concepts made it a lot more manageable.
      </p>
      <p>
        From the{' '}
        <a
          href="https://www.passportjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Passport.js documentation
        </a>
        :
      </p>
      <blockquote>
        "Passport is authentication middleware for Node.js. Extremely flexible
        and modular, Passport can be unobtrusively dropped in to any
        Express-based web application."
      </blockquote>
      <p>
        Essentially, Passport.js provides a clean way to handle authentication
        in your Express applications. It supports over 500 authentication
        strategies, but the ones I've used are <em>local strategy</em> (username
        and password) and <em>JWT strategy</em> (JSON Web Tokens). I implemented
        both of these while doing my projects, so I'll go over how each of them
        works.
      </p>
      <p>
        Before we dive into the strategies though, it's important to understand
        what authentication actually is. Put simply, authentication is the
        process of verifying who a user is. When you log in to a website with
        your username and password, you're being <em>authenticated</em>. After
        you're authenticated, the application needs a way to remember who you
        are as you navigate through different pages. This is where sessions and
        tokens come into play.
      </p>
      <p>
        Now, let's talk about the local strategy first. This is the traditional
        username and password authentication that you've probably seen countless
        times. To get started, you'll need to install a few packages:
      </p>
      <pre>{`
npm install passport passport-local express-session bcryptjs
      `}</pre>
      <p>
        The <code>passport</code> package is the core library,{' '}
        <code>passport-local</code> is the strategy we'll use,{' '}
        <code>express-session</code> handles sessions, and <code>bcryptjs</code>{' '}
        is for hashing passwords. You should <em>never</em> store passwords in
        plain text!
      </p>
      <p>Here's how you'd set up a basic local strategy:</p>
      <pre>{`
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// let's assume we have a User model from our database
const User = require('./models/user');

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username: username });
      if (!user) {
        return done(null, false, { message: 'Incorrect username' });
      }
      
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return done(null, false, { message: 'Incorrect password' });
      }
      
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);
      `}</pre>
      <p>
        Let's break down what's happening here. We're defining a new local
        strategy that Passport will use. The strategy takes three parameters:{' '}
        <code>username</code>, <code>password</code>, and <code>done</code>.
      </p>
      <p>
        The <code>done</code> callback is what you call to signal whether
        authentication succeeded or failed. If the user is found and the
        password matches, we call <code>done(null, user)</code>. If there's an
        error, we call <code>done(err)</code>. If authentication fails, we call{' '}
        <code>done(null, false)</code> with an optional message.
      </p>
      <p>
        Now, we also need to tell Passport how to serialize and deserialize
        users. Serialization is the process of converting the user object into a
        format that can be stored in the session, while deserialization is the
        reverse process. This is necessary because sessions store data as
        strings, not JavaScript objects.
      </p>
      <pre>{`
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});
      `}</pre>
      <p>
        When a user logs in, <code>serializeUser</code> stores their ID in the
        session. Then, on subsequent requests, <code>deserializeUser</code> uses
        that ID to fetch the full user object from the database.
      </p>
      <p>
        To actually use this in your Express app, you need to initialize the
        session middleware and Passport:
      </p>
      <pre>{`
const express = require('express');
const session = require('express-session');
const passport = require('passport');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
      `}</pre>
      <p>
        The order here is important! The session middleware must come before
        Passport's middleware. Also, never hardcode your secret key like I did
        in this example. Use environment variables instead!
      </p>
      <p>
        Now, to handle login and registration, you'd create routes like this:
      </p>
      <pre>{`
app.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      username: req.body.username,
      password: hashedPassword,
    });
    await user.save();
    res.redirect('/login');
  } catch (err) {
    res.status(500).send('Error registering user');
  }
});

app.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
  })
);

app.post('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});
      `}</pre>
      <p>
        The <code>passport.authenticate('local')</code> middleware is what
        actually runs our authentication strategy. If authentication succeeds,
        the user is redirected to the dashboard. If it fails, they're sent back
        to the login page.
      </p>
      <p>
        To protect routes that require authentication, you can create a simple
        middleware:
      </p>
      <pre>{`
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

app.get('/dashboard', isAuthenticated, (req, res) => {
  res.send(\`Welcome, \${req.user.username}!\`);
});
      `}</pre>
      <p>
        The <code>req.isAuthenticated()</code> method is provided by Passport
        and returns <code>true</code> if the user is logged in. The{' '}
        <code>req.user</code> property contains the deserialized user object.
      </p>
      <p>
        That's the gist of local authentication with Passport! Now, let's talk
        about JWT authentication, which works a bit differently.
      </p>
      <p>
        JWT (JSON Web Token) authentication is <em>stateless</em>, meaning the
        server doesn't store session data. Instead, when a user logs in, the
        server generates a token that contains the user's information, and this
        token is sent back to the client. The client then includes this token in
        the header of every subsequent request.
      </p>
      <p>
        This approach is particularly useful for APIs, especially when building
        single page applications or mobile apps. It's also great for
        microservices architectures where you don't want to maintain session
        state across multiple servers.
      </p>
      <p>First, you'll need to install some packages:</p>
      <pre>{`
npm install passport passport-jwt jsonwebtoken bcryptjs
      `}</pre>
      <p>Here's how you'd set up the JWT strategy:</p>
      <pre>{`
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'your-jwt-secret',
};

passport.use(
  new JwtStrategy(options, async (payload, done) => {
    try {
      const user = await User.findById(payload.sub);
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (err) {
      return done(err, false);
    }
  })
);
      `}</pre>
      <p>
        The <code>jwtFromRequest</code> option tells Passport where to look for
        the token. In this case, we're expecting it in the Authorization header
        as a Bearer token. The <code>secretOrKey</code> is used to verify that
        the token hasn't been tampered with.
      </p>
      <p>
        The <code>payload</code> parameter contains the decoded token data. By
        convention, the user's ID is stored in the <code>sub</code> (subject)
        field.
      </p>
      <p>Now, let's create login and registration routes for JWT:</p>
      <pre>{`
const jwt = require('jsonwebtoken');

app.post('/api/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      username: req.body.username,
      password: hashedPassword,
    });
    await user.save();
    res.json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error registering user' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ sub: user.id }, 'your-jwt-secret', {
      expiresIn: '1h',
    });

    res.json({ token: token });
  } catch (err) {
    res.status(500).json({ error: 'Error logging in' });
  }
});
      `}</pre>
      <p>
        When the user logs in successfully, we generate a token using{' '}
        <code>jwt.sign()</code>. The first argument is the payload (the data
        we're encoding), the second is our secret key, and the third is an
        options object where we can set an expiration time.
      </p>
      <p>
        The client would then store this token (typically in localStorage or a
        cookie) and include it in the Authorization header for protected
        requests:
      </p>
      <pre>{`
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
      `}</pre>
      <p>To protect routes with JWT authentication:</p>
      <pre>{`
app.get(
  '/api/profile',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({ user: req.user });
  }
);
      `}</pre>
      <p>
        Notice we're passing <code>session: false</code> because JWT
        authentication is stateless. We don't want Passport to create a session.
      </p>
      <p>
        So, when should you use local authentication versus JWT? Well, local
        authentication with sessions is great for traditional web applications
        where users are interacting with your site through a browser. It's
        simpler to implement and works well when all your authentication is
        handled by a single server.
      </p>
      <p>
        JWT authentication, on the other hand, is better suited for APIs and
        single page applications. It's stateless, which means it scales better
        across multiple servers. It's also ideal when you need to authenticate
        requests from mobile apps or when you're building a microservices
        architecture.
      </p>
      <p>
        One thing to keep in mind with JWT is that tokens can't be invalidated
        on the server side. So, if a token is compromised, it remains valid
        until it expires. This is why setting an appropriate expiration time is
        crucial.
      </p>
      <p>
        I will say though, implementing authentication for the first time was
        quite challenging. There were moments where I wasn't entirely sure if I
        was doing things correctly, especially when it came to securely storing
        passwords and managing tokens. But, reading through the documentation
        and following along with examples really helped solidify my
        understanding.
      </p>
      <p>
        This{' '}
        <a
          href="https://www.passportjs.org/concepts/authentication/strategies/"
          target="_blank"
          rel="noopener noreferrer"
        >
          documentation
        </a>{' '}
        from Passport.js is incredibly helpful for understanding how strategies
        work. Also, this{' '}
        <a
          href="https://jwt.io/introduction"
          target="_blank"
          rel="noopener noreferrer"
        >
          introduction to JWT
        </a>{' '}
        gives a great overview of how JSON Web Tokens work under the hood.
      </p>
      <p>
        That's about it for this week! Authentication was definitely one of the
        more complex topics I've tackled so far, but it's also one of the most
        important ones to understand. Next week, I'll talk about{' '}
        <a
          href="https://www.prisma.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prisma
        </a>
        , which I've been liking a lot!
      </p>
    </>
  );
}

export default Article13;
