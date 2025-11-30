function Article15() {
  return (
    <>
      <p>
        This week, I've been taking some time to learn the basics of{' '}
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TypeScript
        </a>
        . I've been hearing about it constantly, and after working with Prisma
        and seeing how helpful those type warnings were, I figured it was time
        to actually learn what TypeScript is all about.
      </p>
      <p>
        From the{' '}
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TypeScript documentation
        </a>
        :
      </p>
      <blockquote>
        "TypeScript is a strongly typed programming language that builds on
        JavaScript, giving you better tooling at any scale."
      </blockquote>
      <p>
        Essentially, TypeScript is JavaScript with types. It adds a type system
        on top of JavaScript, which helps catch errors before you even run your
        code. The cool thing is that TypeScript <em>compiles</em> to JavaScript,
        so at the end of the day, you're still running JavaScript. Your browser
        or Node.js doesn't know anything about TypeScript!
      </p>
      <p>
        Now, why would you want to use TypeScript? Well, the main benefit is
        catching bugs early. In JavaScript, you can do something like this:
      </p>
      <pre>{`
function add(a, b) {
  return a + b;
}

add(5, '10'); // returns '510' instead of 15!
      `}</pre>
      <p>
        JavaScript happily lets you add a number and a string together, which
        probably isn't what you intended. With TypeScript, you can specify that
        both parameters should be numbers, and TypeScript will warn you if you
        try to pass in a string.
      </p>
      <p>
        To get started with TypeScript, you first need to install it. You can do
        this globally or as a dev dependency in your project:
      </p>
      <pre>{`
npm install -g typescript
# or
npm install --save-dev typescript
      `}</pre>
      <p>
        Once installed, you can compile TypeScript files (which have a{' '}
        <code>.ts</code> extension) to JavaScript using the <code>tsc</code>{' '}
        command. For example, if you have a file called <code>app.ts</code>, you
        can compile it with <code>tsc app.ts</code>, which will create an{' '}
        <code>app.js</code> file.
      </p>
      <p>
        Now, let's talk about the basics of TypeScript! The fundamental concept
        is <em>type annotations</em>. These are simply ways to tell TypeScript
        what type a variable, parameter, or return value should be.
      </p>
      <p>Here's how you'd rewrite that add function with TypeScript:</p>
      <pre>{`
function add(a: number, b: number): number {
  return a + b;
}

add(5, 10); // Works fine!
add(5, '10'); // TypeScript error!
      `}</pre>
      <p>
        The <code>: number</code> after each parameter tells TypeScript that{' '}
        <code>a</code> and <code>b</code> should be numbers. The{' '}
        <code>: number</code> after the closing parenthesis tells TypeScript
        that the function returns a number.
      </p>
      <p>
        TypeScript has several basic types. The most common ones are{' '}
        <code>string</code>, <code>number</code>, <code>boolean</code>,{' '}
        <code>array</code>, and <code>object</code>. Here are some examples:
      </p>
      <pre>{`
let username: string = 'Bob';
let age: number = 25;
let isStudent: boolean = true;
let scores: number[] = [95, 87, 91];
let user: { name: string; age: number } = { name: 'Bob', age: 25 };
      `}</pre>
      <p>
        For arrays, you can use either <code>number[]</code> or{' '}
        <code>Array&lt;number&gt;</code>. Both mean the same thing!
      </p>
      <p>
        One thing that's really useful is <em>type inference</em>. TypeScript is
        actually smart enough to figure out types based on the values you
        assign. So, you don't always need to explicitly write the type:
      </p>
      <pre>{`
let username = 'Bob'; // TypeScript knows this is a string
let age = 25; // TypeScript knows this is a number

username = 123; // TypeScript error! Can't assign number to string
      `}</pre>
      <p>
        Now, what if you have a variable that could be multiple types? That's
        where <em>union types</em> come in. You can use the <code>|</code>{' '}
        operator to say "this could be this type OR that type":
      </p>
      <pre>{`
let id: string | number;

id = 'abc123'; // works!
id = 456; // also works!
id = true; // error! can't be a boolean
      `}</pre>
      <p>
        Another useful concept is <em>interfaces</em>. Interfaces let you define
        the shape of an object. This is especially helpful when you're working
        with complex objects:
      </p>
      <pre>{`
interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // the ? makes this optional
}

const user1: User = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
};

const user2: User = {
  id: 2,
  name: 'Bob',
  email: 'bob@example.com',
  age: 30,
};
      `}</pre>
      <p>
        The <code>?</code> after <code>age</code> makes that property optional,
        so you don't have to include it in every user object.
      </p>
      <p>
        You can also use interfaces with functions. This is particularly useful
        when you're passing objects as parameters:
      </p>
      <pre>{`
interface User {
  id: number;
  name: string;
  email: string;
}

function greetUser(user: User): string {
  return \`Hello, \${user.name}!\`;
}

greetUser({ id: 1, name: 'Alice', email: 'alice@example.com' });
      `}</pre>
      <p>
        TypeScript also has <em>type aliases</em>, which are similar to
        interfaces but slightly different. You can use the <code>type</code>{' '}
        keyword to create a type alias:
      </p>
      <pre>{`
type ID = string | number;

let userId: ID = 123;
let productId: ID = 'abc';
      `}</pre>
      <p>
        In most cases, interfaces and type aliases can be used interchangeably.
        However, interfaces are generally preferred for defining object shapes,
        while type aliases are better for union types and other complex types.
      </p>
      <p>
        One thing that confused me at first was the <code>any</code> type. This
        is basically an escape hatch that tells TypeScript "I don't care what
        type this is, just let me do whatever I want":
      </p>
      <pre>{`
let something: any = 'hello';
something = 123; // fine
something = true; // also fine
something.toUpperCase(); // no error, even though booleans don't have toUpperCase
      `}</pre>
      <p>
        While <code>any</code> can be useful when you're migrating JavaScript
        code to TypeScript, you should generally avoid it. It defeats the whole
        purpose of using TypeScript! If you really need to say "this could be
        anything," consider using <code>unknown</code> instead, which is safer.
      </p>
      <p>
        TypeScript also has <em>enums</em>, which are a way to define a set of
        named constants:
      </p>
      <pre>{`
enum Role {
  Admin,
  User,
  Guest,
}

let userRole: Role = Role.Admin;
      `}</pre>
      <p>
        By default, enums are number-based (Admin = 0, User = 1, Guest = 2), but
        you can also make string enums:
      </p>
      <pre>{`
enum Role {
  Admin = 'ADMIN',
  User = 'USER',
  Guest = 'GUEST',
}
      `}</pre>
      <p>
        Now, let's talk about functions a bit more. You can type function
        parameters and return values, but you can also type the function itself:
      </p>
      <pre>{`
// regular function with types
function multiply(a: number, b: number): number {
  return a * b;
}

// arrow function with types
const divide = (a: number, b: number): number => {
  return a / b;
};

// function type
let calculate: (x: number, y: number) => number;

calculate = multiply; // works!
calculate = divide; // also works!
      `}</pre>
      <p>
        One of the most powerful features of TypeScript is <em>generics</em>.
        Generics let you create reusable components that work with different
        types. The syntax can look a bit intimidating at first, but the concept
        is actually quite simple:
      </p>
      <pre>{`
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const firstNumber = getFirstElement([1, 2, 3]); // TypeScript knows this is a number
const firstName = getFirstElement(['Alice', 'Bob']); // TypeScript knows this is a string
      `}</pre>
      <p>
        The <code>&lt;T&gt;</code> is a <em>type parameter</em>. It's like a
        placeholder that says "this function works with any type, and we'll call
        that type T." When you call the function, TypeScript figures out what T
        is based on what you pass in.
      </p>
      <p>
        To be honest, generics took me a while to wrap my head around. But once
        it clicked, I realized how powerful they are for writing flexible,
        reusable code.
      </p>
      <p>
        Something else worth mentioning is the <code>tsconfig.json</code> file.
        This is where you configure how TypeScript compiles your code. You can
        generate one with <code>tsc --init</code>, and it'll create a file with
        a bunch of options. Here are some of the important ones:
      </p>
      <pre>{`
{
  "compilerOptions": {
    "target": "es2016",                       // what version of JS to compile to
    "module": "commonjs",                     // what module system to use
    "strict": true,                           // enable all strict type checking
    "esModuleInterop": true,                  // better compatibility with ES modules
    "skipLibCheck": true,                     // skip type checking of declaration files
    "forceConsistentCasingInFileNames": true, // ensure consistent file naming
    "outDir": "./dist"                        // where to output compiled JS files
  }
}
      `}</pre>
      <p>
        The <code>strict</code> option is particularly important. When set to{' '}
        <code>true</code>, it enables a bunch of strict type checking rules that
        help catch more errors. The two most important ones are{' '}
        <code>noImplicitAny</code> and <code>strictNullChecks</code>. These are
        already included in <code>strict: true</code>.
      </p>
      <p>
        <code>noImplicitAny</code> prevents TypeScript from automatically
        falling back to the <code>any</code> type when it can't figure out what
        type something should be. Without this flag, TypeScript might silently
        assign <code>any</code> to variables, which defeats the whole purpose of
        using TypeScript. With it enabled, you'll get an error and have to
        explicitly say what type something is.
      </p>
      <p>
        <code>strictNullChecks</code> is also really important. By default,
        TypeScript lets you assign <code>null</code> or <code>undefined</code>{' '}
        to any type, which can lead to those dreaded "Cannot read property of
        null" errors. When this flag is enabled, you have to explicitly handle{' '}
        <code>null</code> and <code>undefined</code> cases:
      </p>
      <pre>{`
function greet(name: string) {
  console.log(\`Hello, \${name.toUpperCase()}!\`);
}

greet(null); // error with strictNullChecks enabled!

// you'd need to handle it like this:
function greet(name: string | null) {
  if (name === null) {
    console.log('Hello, guest!');
  } else {
    console.log(\`Hello, \${name.toUpperCase()}!\`);
  }
}
      `}</pre>
      <p>
        Both of these flags are enabled when you set <code>strict: true</code>,
        which is why I recommend keeping it on. Sure, it might feel like
        TypeScript is being overly strict at first, but it's really just helping
        you catch bugs before they happen!
      </p>
      <p>
        I will say though, TypeScript does have a bit of a learning curve. There
        were moments where I felt like I was fighting the type system,
        especially when working with more complex types. But after getting
        through the initial friction, I can see why so many people prefer
        TypeScript over plain JavaScript.
      </p>
      <p>
        This{' '}
        <a
          href="https://www.typescriptlang.org/docs/handbook/intro.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          TypeScript Handbook
        </a>{' '}
        is an excellent resource if you want to dive deeper. It covers
        everything from the basics to advanced topics.
      </p>
      <p>
        Overall, I'm glad I took the time to learn TypeScript. While it's not
        strictly necessary for everything, I can see how it would be incredibly
        helpful for larger projects where catching bugs early is crucial.
      </p>
      <p>
        That's about it for this week. To put in more reps with TypeScript, I
        plan on refactoring this blog with it. The code samples could also use
        some syntax highlighting, and I think{' '}
        <a
          href="https://github.com/react-syntax-highlighter/react-syntax-highlighter"
          target="_blank"
          rel="noopener noreferrer"
        >
          react-syntax-highlighter
        </a>{' '}
        would do great. Also, I've been thinking of using{' '}
        <a href="https://mdxjs.com/" target="_blank" rel="noopener noreferrer">
          MDX
        </a>{' '}
        or{' '}
        <a
          href="https://github.com/remarkjs/react-markdown"
          target="_blank"
          rel="noopener noreferrer"
        >
          react-markdown
        </a>{' '}
        to simplify the blog's structure.
      </p>
      <p>Perhaps I'll talk about either of the two next week!</p>
    </>
  );
}

export default Article15;
