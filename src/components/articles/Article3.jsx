function Article3() {
  return (
    <>
      <p>
        Last week, I learned about the foundations of web development. This
        week, I explored some intermediate HTML and CSS concepts, as well as a
        touch of JavaScript.
      </p>
      <p>
        I completed the{' '}
        <a
          href="https://www.theodinproject.com/paths/full-stack-javascript/courses/intermediate-html-and-css"
          target="_blank"
          rel="noopener noreferrer"
        >
          Intermediate HTML and CSS course
        </a>{' '}
        from The Odin Project curriculum, and also made some small progress in
        the JavaScript course. The course primarily covered intermediate HTML
        and CSS concepts, forms, and the CSS grid layout.
      </p>
      <p>
        The intermediate HTML concepts discussed were simple enough. There is a
        lesson each for Emmet, SVGs, and tables.{' '}
        <a
          href="https://docs.emmet.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Emmet
        </a>{' '}
        is basically a tool that allows you to write HTML a lot quicker by using
        syntax from CSS selectors. Perhaps the most useful (and arguably most
        used) Emmet feature is typing<code>!</code>and pressing
        <code>Enter</code>, which automatically generates HTML boilerplate for
        you. However, I do also add another<code>meta</code>tag with
        <code>name="description"</code>to add a description for my websites.
      </p>
      <p>
        I would absolutely love to use SVGs (animated SVGs in particular) more
        in the future, but I think I'm too early in my learning journey to be
        going down that rabbit hole. Here's an{' '}
        <a
          href="https://www.joshwcomeau.com/svg/friendly-introduction-to-svg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          article
        </a>{' '}
        by Josh Comeau that gives an introduction on SVGs, and the cool things
        he's done with them!
      </p>
      <p>
        As for the intermediate CSS concepts, a ton was covered. Pretty much
        everything mentioned there was very useful. CSS units (<code>rem</code>
        is great!), resets (I use{' '}
        <a
          href="https://www.joshwcomeau.com/css/custom-css-reset/"
          target="_blank"
          rel="noopener noreferrer"
        >
          this
        </a>{' '}
        one), text styles, additional properties not discussed from the
        Foundations course, advanced selectors, positioning (which I used to
        struggle with before), functions, custom properties, frameworks, and
        preprocessors. That's a lot!
      </p>
      <p>
        The concepts I've applied the most in my projects are using proper
        units, selectors, and custom properties. I now use
        <code>rem</code>instead of<code>px</code>for font sizes, margins, and
        paddings. Although,<code>px</code>still has its place for setting widths
        and heights on elements. Selectors like
        <code>&gt;</code>I use a lot more in my CSS now. As for custom
        properties, I use them for setting the color scheme of my project (e.g.
        <code>--c-red: #ff0000;</code>).
      </p>
      <p>
        And while we're on the topic of units, this{' '}
        <a
          href="https://www.youtube.com/watch?v=_-aDOAMmDHI"
          target="_blank"
          rel="noopener noreferrer"
        >
          video
        </a>{' '}
        by Kevin Powell on<code>rem</code>vs<code>em</code>is quite eye-opening.
        It is because of this video that I use
        <code>em</code>for buttons!
      </p>
      <p>
        Now, let's talk about forms. On the surface, you'd think forms would be
        quite simple, but there is <em>so much</em> to read up on about forms.
        In MDN's{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms#introductory_guides"
          target="_blank"
          rel="noopener noreferrer"
        >
          documentation on web forms
        </a>
        , there was so much information to unpack. And that's not even including{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation"
          target="_blank"
          rel="noopener noreferrer"
        >
          client-side form validation
        </a>
        ! While I didn't expect forms to be quite a hefty chapter, it certainly
        taught me so much more than I knew before.
      </p>
      <p>
        After the forms chapter, I am now introduced to a new CSS layout:{' '}
        <a
          href="https://css-tricks.com/snippets/css/complete-guide-grid/#aa-introduction-to-css-grid"
          target="_blank"
          rel="noopener noreferrer"
        >
          grid
        </a>
        . While I still personally find the flexbox layout a bit more intuitive,
        I still understood the grid layout quite well and was able to accomplish
        the admin dashboard project without much trouble. I can definitely see
        its use for layouts like these. I am quite interested to know though how
        grid can be used once mobile responsiveness is considered. If you want
        to see the two projects I've made throughout this course, you may refer
        to this{' '}
        <a
          href="https://github.com/arvingarciabtw/the-odin-project/tree/main/full-stack-javascript/fsj-01-intermediate-html-and-css"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{' '}
        link.
      </p>
      <p>
        That's pretty much it for that course. I've already started the{' '}
        <a
          href="https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript"
          target="_blank"
          rel="noopener noreferrer"
        >
          JavaScript course
        </a>
        , but I don't want to go into the technical details of it just yet since
        this blog article is mainly for the stuff I learned from the
        intermediate HTML and CSS course. I've completed two projects in the
        JavaScript course so far,{' '}
        <a
          href="https://github.com/arvingarciabtw/the-odin-project/tree/main/full-stack-javascript/fsj-02-javascript/08-library"
          target="_blank"
          rel="noopener noreferrer"
        >
          library
        </a>{' '}
        and{' '}
        <a
          href="https://github.com/arvingarciabtw/the-odin-project/tree/main/full-stack-javascript/fsj-02-javascript/09-tic-tac-toe"
          target="_blank"
          rel="noopener noreferrer"
        >
          tic-tac-toe
        </a>
        .
      </p>
      <p>
        Overall, a week filled with a lot of learning. Next week will be all
        JavaScript!
      </p>
    </>
  );
}

export default Article3;
