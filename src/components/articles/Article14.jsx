function Article14() {
  return (
    <>
      <p>
        This week, I finished the{' '}
        <a
          href="https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Node.js course
        </a>{' '}
        from The Odin Project!
      </p>
      <p>
        Before diving into Prisma specifically, it's worth understanding what an
        ORM actually is. Put simply, an ORM is a tool that lets you interact
        with your database using your programming language instead of writing
        raw SQL queries. So instead of writing{' '}
        <code>SELECT * FROM users WHERE id = 1;</code>, you could write
        something like <code>User.findById(1)</code>.
      </p>
      <p>
        What I found really appealing about Prisma is how it combines several
        tools into one cohesive package. You get type safety, an intuitive API,
        and great developer experience all in one. Coming from learning SQL, I
        was honestly a bit skeptical about using an ORM at first. I thought it
        might abstract away too much and make me lose touch with what was
        actually happening in the database. But after using Prisma for a while,
        I realized it actually helps you understand your data better!
      </p>
      <p>
        To get started with Prisma, you first need to install it. In your
        project directory, run:
      </p>
      <pre>{`
npm install prisma --save-dev
npm install @prisma/client
      `}</pre>
      <p>
        Then, initialize Prisma with <code>npx prisma init</code>. This will
        create a <code>prisma</code> folder with a <code>schema.prisma</code>{' '}
        file inside. This schema file is where you'll define your data models.
      </p>
      <p>
        The schema file is actually quite readable. Here's what a basic schema
        might look like:
      </p>
      <pre>{`
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  posts     Post[]
  createdAt DateTime @default(now())
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
  createdAt DateTime @default(now())
}
      `}</pre>
      <p>
        Let's break down what's happening here. The <code>datasource</code>{' '}
        block tells Prisma which database you're using. In this case, it's
        PostgreSQL, but Prisma also supports other relational database
        management systems. The <code>url</code> is pulled from your environment
        variables, which is where you'd store your database connection string.
      </p>
      <p>
        The <code>generator</code> block specifies that we want to generate the
        Prisma Client, which is what we'll use to actually query our database.
      </p>
      <p>
        Then we have our models. Each model corresponds to a table in your
        database. The <code>User</code> model has an <code>id</code> (which is
        the primary key), an <code>email</code> (which is unique), an optional{' '}
        <code>name</code> (the <code>?</code> makes it optional), a relation to{' '}
        <code>Post</code>s, and a <code>createdAt</code> timestamp.
      </p>
      <p>
        The <code>@id</code> decorator marks a field as the primary key, while{' '}
        <code>@default(autoincrement())</code> tells Prisma to automatically
        increment the ID for each new record. Similarly,{' '}
        <code>@default(now())</code> sets the current timestamp by default.
      </p>
      <p>
        One of the most powerful features of Prisma is how it handles relations.
        In the example above, we have a one-to-many relationship between{' '}
        <code>User</code> and <code>Post</code>. A user can have many posts, but
        each post belongs to one user. Prisma makes this relationship explicit
        in the schema!
      </p>
      <p>
        The <code>Post</code> model has an <code>author</code> field that
        references the <code>User</code> model. The <code>@relation</code>{' '}
        decorator specifies that the <code>authorId</code> field in the{' '}
        <code>Post</code> table corresponds to the <code>id</code> field in the{' '}
        <code>User</code> table. Meanwhile, the <code>User</code> model has a{' '}
        <code>posts</code> field of type <code>Post[]</code>, which means it can
        have multiple posts.
      </p>
      <p>
        After defining your schema, you need to create a migration. Migrations
        are essentially a way to version control your database schema. To create
        a migration, run:
      </p>
      <pre>{`
npx prisma migrate dev --name init
      `}</pre>
      <p>
        This will create a SQL migration file and apply it to your database. The{' '}
        <code>--name init</code> part is just a name for your migration. You can
        call it whatever you want!
      </p>
      <p>
        After running the migration, Prisma will also automatically generate the
        Prisma Client for you. This client is what you'll use to interact with
        your database in your application code.
      </p>
      <p>Here's how you'd use Prisma Client in your Express routes:</p>
      <pre>{`
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// create a new user
app.post('/users', async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
      },
    });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Error creating user' });
  }
});

// get all users
app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching users' });
  }
});

// get a specific user
app.get('/users/:id', async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching user' });
  }
});

// update a user
app.put('/users/:id', async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: { id: parseInt(req.params.id) },
      data: {
        email: req.body.email,
        name: req.body.name,
      },
    });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Error updating user' });
  }
});

// delete a user
app.delete('/users/:id', async (req, res) => {
  try {
    await prisma.user.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting user' });
  }
});
      `}</pre>
      <p>
        The API is incredibly intuitive! For creating records, you use{' '}
        <code>create()</code>. For reading, you use <code>findMany()</code> to
        get all records or <code>findUnique()</code> to get a single record. For
        updating, you use <code>update()</code>. And for deleting, you use{' '}
        <code>delete()</code>. It's essentially CRUD operations with a very
        clean syntax. You can refer to it{' '}
        <a
          href="https://www.prisma.io/docs/orm/prisma-client/queries/crud"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
      <p>
        One thing I really appreciate about Prisma is the type safety. You get
        autocompletion and type checking for all your queries. So if you try to
        access a field that doesn't exist on your model, your editor will warn
        you immediately. This is <em>so</em> helpful for catching mistakes
        early!
      </p>
      <p>
        Prisma also makes it really easy to work with relations. Let's say you
        want to get a user along with all of their posts:
      </p>
      <pre>{`
const userWithPosts = await prisma.user.findUnique({
  where: { id: 1 },
  include: {
    posts: true,
  },
});
      `}</pre>
      <p>
        The <code>include</code> option tells Prisma to also fetch the related
        posts. You can even nest these includes to fetch deeply nested
        relations!
      </p>
      <p>
        You can also create a user and their posts in a single query using{' '}
        <em>nested writes</em>:
      </p>
      <pre>{`
const user = await prisma.user.create({
  data: {
    email: 'alice@example.com',
    name: 'Alice',
    posts: {
      create: [
        { title: 'My first post', content: 'Hello world!' },
        { title: 'My second post', content: 'This is great!' },
      ],
    },
  },
});
      `}</pre>
      <p>
        This will create the user and their posts in a single transaction, which
        is really convenient!
      </p>
      <p>
        Filtering and sorting in Prisma is also quite straightforward. Here's an
        example of a more complex query:
      </p>
      <pre>{`
const publishedPosts = await prisma.post.findMany({
  where: {
    published: true,
    author: {
      email: {
        contains: '@example.com',
      },
    },
  },
  orderBy: {
    createdAt: 'desc',
  },
  take: 10,
  skip: 0,
});
      `}</pre>
      <p>
        This query gets the 10 most recent published posts from users whose
        email contains '@example.com'. The <code>where</code> clause is for
        filtering, <code>orderBy</code> is for sorting, <code>take</code> is the
        limit, and <code>skip</code> is the offset (useful for pagination).
      </p>
      <p>
        Prisma also supports aggregations and grouping, similar to what you'd do
        with SQL's <code>COUNT()</code>, <code>SUM()</code>, <code>AVG()</code>,
        etc. For example:
      </p>
      <pre>{`
const userCount = await prisma.user.count();

const averagePostsPerUser = await prisma.post.aggregate({
  _avg: {
    authorId: true,
  },
});
      `}</pre>
      <p>
        I will say though, while Prisma is great, it does have a bit of a
        learning curve when it comes to more complex queries. For instance,
        there were moments where I knew exactly how to write something in SQL,
        but translating it to Prisma's syntax took some trial and error.
      </p>
      <p>
        But after a while, I got the hang of it. Thankfully, the{' '}
        <a
          href="https://www.prisma.io/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          documentation
        </a>{' '}
        is excellent and covers pretty much every use case you can think of. And
        now, I actually prefer using Prisma, as I find it easier to write more
        complex queries compared to SQL where I would have to <code>JOIN</code>
        tables properly.
      </p>
      <p>
        Overall, I'm really impressed with Prisma. It strikes a good balance
        between abstraction and control. You're not writing raw SQL for every
        little thing, but you're also not so far removed that you don't
        understand what's happening. Plus, the type safety is a huge win for
        catching bugs early.
      </p>
      <p>
        That's about it for this week. Now that I've finished the Node.js
        course, I plan on spending my time next week on learning TypeScript.
        While The Odin Project talks about getting a job after the Node.js
        course, I want to prioritize learning other technologies first and
        building my own personal projects.
      </p>
      <p>I'll go over what I've learned about TypeScript next week!</p>
    </>
  );
}

export default Article14;
