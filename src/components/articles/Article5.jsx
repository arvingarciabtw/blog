function Article5() {
  return (
    <>
      <p>
        I finished the{' '}
        <a
          href="https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript"
          target="_blank"
          rel="noopener noreferrer"
        >
          JavaScript course
        </a>{' '}
        from The Odin Project!
      </p>
      <p>
        This week, I went through some lessons covering computer science
        concepts (e.g. complexity, data structures, algorithms), intermediate
        Git, and test driven development with{' '}
        <a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer">
          Jest
        </a>{' '}
        as the testing framework.
      </p>
      <p>
        Up to this point I've been writing a lot of code, but of course it's
        also important to measure its efficiency. There's two ways to measure
        code efficiency: time complexity and space complexity. Essentially, time
        complexity is the amount of <em>time</em> an algorithm takes to complete
        while space complexity is the amount of memory (perhaps <em>space</em>{' '}
        is easier to remember) an algorithm uses during its execution.
      </p>
      <p>
        I won't go into detail regarding the notations, but this{' '}
        <a
          href="https://www.bigocheatsheet.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Big-O cheat sheet
        </a>{' '}
        is pretty useful.
      </p>
      <p>
        I also won't go into detail regarding data structures and algorithms,
        but it is quite useful to know what data structure to use in certain
        situations. The CS chapter of the course was quite hefty, though if
        you'd like to see how I built certain data structures with JavaScript,
        you can view some of the{' '}
        <a
          href="https://github.com/arvingarciabtw/the-odin-project/tree/main/full-stack-javascript/fsj-02-javascript"
          target="_blank"
          rel="noopener noreferrer"
        >
          projects
        </a>{' '}
        here.
      </p>
      <p>
        Now, let's talk about Git commands. The basics were already taught early
        on in the curriculum, but Git was revisited and some other commands are
        introduced.
      </p>
      <p>
        Apart from the typical <code>git commit</code>, you can also do{' '}
        <code>git commit --amend</code>. This replaces our last commit with our
        new commit. It is important to remember though to <em>only</em> amend
        commits that have <em>not</em> been pushed anywhere.
      </p>
      <p>
        The command <code>git rebase</code> integrates changes from one branch
        to another by moving commits to the latest point of the target branch.
        On the other hand, <code>squash</code> combines multiple commits into
        one. Then, we have <code>git reset</code> that moves your current branch
        to a different commit.
      </p>
      <p>
        Though I have to admit, I haven't used these commands in the projects
        that I've done. The trifecta of <code>add</code>, <code>commit</code>,
        and <code>push</code> has served me well for my projects so far. But if
        I ever do goof up something, I can always refer to those other commands
        I've mentioned.
      </p>
      <p>
        This{' '}
        <a
          href="https://www.theodinproject.com/lessons/javascript-using-git-in-the-real-world"
          target="_blank"
          rel="noopener noreferrer"
        >
          lesson
        </a>{' '}
        explores how to use Git in the real world. It essentially goes over the
        workflow of how you would use Git to collaborate with people, say for
        example contributing to The Odin Project. Put simply, this is what you'd
        do: fork the repository, clone that forked repository, make some
        changes, push, and open a pull request. I glossed over some details, but
        that's mainly how it goes.
      </p>
      <p>
        In fact, so far in my journey, I've actually contributed to{' '}
        <a
          href="https://github.com/mdn/content/commits?author=arvingarciabtw&since=2025-07-31&until=2025-08-31"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDN
        </a>{' '}
        and{' '}
        <a
          href="https://github.com/TheOdinProject/curriculum/commits?author=arvingarciabtw&since=2025-07-31&until=2025-08-31"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Odin Project
        </a>
        ! Although these are minor fixes, it's nice to know that I was able to
        contribute to resources that I actually use and benefit from, even if
        the contributions were quite menial.
      </p>
      <p>
        Test driven development (TDD) was given great importance in its chapter.
        The idea behind it is that you first write the tests, and then you write
        the code that is being tested. This{' '}
        <a
          href="https://jrsinclair.com/articles/2016/one-weird-trick-that-will-change-the-way-you-code-forever-javascript-tdd/"
          target="_blank"
          rel="noopener noreferrer"
        >
          article
        </a>{' '}
        by James Sinclair is a wonderful article that explains the value of
        doing TDD. A quote from the article:
      </p>
      <blockquote cite="https://jrsinclair.com/articles/2016/one-weird-trick-that-will-change-the-way-you-code-forever-javascript-tdd/#notes-fn-1">
        Test Driven Development is not about testing. It is a way of thinking
        and coding that just-so-happens to involve tests.
      </blockquote>
      <p>
        The article also mentions two simple rules in TDD that imply three
        simple steps, taken from a book by Kent Beck named Test-Driven
        Development by Example:
      </p>
      <ol>
        <li>Write new code only if you first have a failing automated test.</li>
        <li>Eliminate duplication.</li>
      </ol>
      <p>The three steps:</p>
      <ol>
        <li>
          <b>Red</b>—write a little test that doesn’t work, perhaps doesn’t even
          compile at first
        </li>
        <li>
          <b>Green</b>—make the test work quickly, committing whatever sins
          necessary in the process
        </li>
        <li>
          <b>Refactor</b>—eliminate all the duplication created in just getting
          the test to work
        </li>
      </ol>
      <p>
        Doing TDD while doing my{' '}
        <a
          href="https://github.com/arvingarciabtw/the-odin-project/tree/main/full-stack-javascript/fsj-02-javascript/19-battleship"
          target="_blank"
          rel="noopener noreferrer"
        >
          battleship
        </a>{' '}
        project was very useful. Following this kind of principle really
        reinforces you to start small, and it eventually helps you out in the
        long run. I'm excited to practice TDD more in future projects!
      </p>
      <p>
        That's it for this week. I already started the{' '}
        <a
          href="https://www.theodinproject.com/paths/full-stack-javascript/courses/advanced-html-and-css"
          target="_blank"
          rel="noopener noreferrer"
        >
          Advanced HTML and CSS
        </a>{' '}
        course, so I'll be going over that next week (and maybe a little bit of
        React?).
      </p>
    </>
  );
}

export default Article5;
