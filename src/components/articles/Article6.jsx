function Article6() {
  return (
    <>
      <p>
        For this week, I've finished the{' '}
        <a
          href="https://www.theodinproject.com/paths/full-stack-javascript/courses/advanced-html-and-css"
          target="_blank"
          rel="noopener noreferrer"
        >
          Advanced HTML and CSS course
        </a>{' '}
        from The Odin Project curriculum. Primarily, three concepts were
        covered: animations, accessibility, and responsive design.
      </p>
      <p>
        The animations chapter taught transforms, transitions, and keyframes.
        Funnily enough though, the most interesting thing I personally learned
        while doing this chapter is the <em>pixel pipeline</em>.
      </p>
      <p>
        Simply put, the pixel pipeline is a process used by web browsers to
        convert HTML, CSS, and JavaScript into visual elements shown on the
        screen. This{' '}
        <a
          href="https://web.dev/articles/rendering-performance"
          target="_blank"
          rel="noopener noreferrer"
        >
          article
        </a>{' '}
        mentions the five areas of this pipeline: JavaScript, style, layout,
        paint, and composite.
      </p>
      <p>
        Also, this{' '}
        <a
          href="https://csstriggers.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          resource
        </a>{' '}
        is quite useful to see how an animatable CSS property may affect others.
        It's good to see which properties are performant.
      </p>
      <p>
        As for the accessibility chapter, concepts discussed were semantic HTML,
        accessible colors, keyboard navigation, ARIA, and auditing tools. I find
        this{' '}
        <a
          href="https://www.youtube.com/watch?v=3f31oufqFSM"
          target="_blank"
          rel="noopener noreferrer"
        >
          video from W3
        </a>{' '}
        to be a good and quick refresher on web accessibility.
      </p>
      <p>
        For this chapter, the{' '}
        <a
          href="https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-accessibility-auditing"
          target="_blank"
          rel="noopener noreferrer"
        >
          auditing tools lesson
        </a>{' '}
        was definitely the one that I've benefitted from the most so far. It
        talks about some auditing tools that can be used, like{' '}
        <a
          href="https://developer.chrome.com/docs/lighthouse/overview/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lighthouse for Chrome
        </a>
        . In fact, I was able to diagnose some issues with this blog site
        because of it, and now this site has 100 on all metrics!
      </p>
      <p>
        And now lastly, responsive design! Throughout my learning journey with
        the curriculum so far, it was slightly bothering me that my projects
        were not responsive. But, since responsiveness was not mentioned in
        prior lessons, I did not fret too much about it.
      </p>
      <p>
        Going through the responsive design chapter wasn't too bad. I found
        using media queries to be quite intuitive, and was able to accomplish
        the homepage project without much trouble. I even made my{' '}
        <a
          href="https://homepage-silksong.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          project
        </a>{' '}
        Silksong-themed, which I found appropriate since Silksong was released a
        few days ago (and yes, I've been playing way too much the past few
        days...).
      </p>
      <p>
        That's about it. This one's a very short read, since I just wanted to
        briefly cover the stuff I found most interesting or useful.
      </p>
      <p>
        I'm currently doing the React course, so I'll be talking about that next
        week!
      </p>
    </>
  );
}

export default Article6;
