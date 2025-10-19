function Article2() {
  return (
    <>
      <p>
        As with any skill that you want to learn from the beginning, you have to
        start with the basics. The fundamentals. You need to have a good
        foundation.
      </p>
      <p>
        This week, I completed the{' '}
        <a
          href="https://www.theodinproject.com/paths/foundations/courses/foundations"
          target="_blank"
          rel="noopener noreferrer"
        >
          Foundations
        </a>{' '}
        course from{' '}
        <a
          href="https://www.theodinproject.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Odin Project
        </a>{' '}
        curriculum. At the beginning of the course, it was greatly emphasized
        that learning to code will be hard. I also know this because I've tried
        doing the curriculum before. The founder of The Odin Project wrote this
        amazing{' '}
        <a
          href="https://dev.to/theodinproject/why-learning-to-code-is-so-damn-hard-11nn"
          target="_blank"
          rel="noopener noreferrer"
        >
          article
        </a>{' '}
        on why coding is so difficult. Apart from this, the difference of having
        a fixed mindset and a growth mindset was given great importance in this{' '}
        <a
          href="https://www.theodinproject.com/lessons/foundations-motivation-and-mindset"
          target="_blank"
          rel="noopener noreferrer"
        >
          chapter
        </a>
        .
      </p>
      <p>
        Before even diving into the basics of HTML, the basics of computers and
        how the web works were first taught. From my understanding, this is
        essentially what happens when you type an address into the browser and
        press <code>Enter</code>:
      </p>
      <p>
        The web browser will request the resource from the web server where the
        resource is stored. This is done via a network protocol called{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTTP"
          target="_blank"
          rel="noopener noreferrer"
        >
          HTTP
        </a>{' '}
        (Hypertext Transfer Protocol). If the request is successful, then the
        web server will send an HTTP response back the browser with the
        requested resource. In this process,{' '}
        <a
          href="https://www.cloudflare.com/learning/network-layer/internet-protocol/"
          target="_blank"
          rel="noopener noreferrer"
        >
          IP
        </a>{' '}
        essentially acts as the highway while{' '}
        <a
          href="https://www.techtarget.com/searchnetworking/definition/TCP-IP"
          target="_blank"
          rel="noopener noreferrer"
        >
          TCP
        </a>{' '}
        acts as the transport mechanisms (like cars) that deliver your request
        to the destination (web server).
      </p>
      <p>
        Furthermore, after pressing <code>Enter</code>, your browser will ask
        your computer if it knows the IP address of this domain name. If it
        does, then it is simply translated to the IP address and the web server
        can send a response back. However, if your computer does not recognize
        the IP address associated with the domain, then your request goes to a{' '}
        <a
          href="https://www.cloudflare.com/learning/dns/what-is-a-dns-server/"
          target="_blank"
          rel="noopener noreferrer"
        >
          DNS server
        </a>{' '}
        and it is this server that will tell the browser what the IP address of
        the domain name is.
      </p>
      <p>
        At least, that's how I understood it anyway. I'm sure it is much more
        technical than that.
      </p>
      <p>
        From this point, the basics of{' '}
        <a
          href="https://git-scm.com/doc"
          target="_blank"
          rel="noopener noreferrer"
        >
          Git
        </a>{' '}
        were also taught. Thankfully, I've already used Git in past personal
        projects and my previous internship. However, this was a good
        opportunity to practice{' '}
        <a
          href="https://github.com/jesseduffield/lazygit"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lazygit
        </a>{' '}
        for the week since I find this to be a very useful tool!
      </p>
      <p>
        And finally, we now get to{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML"
          target="_blank"
          rel="noopener noreferrer"
        >
          HTML
        </a>
        ! It was honestly quite nice having a refresher on HTML boilerplate
        code, especially on the <code>charset</code> attribute of the meta tag
        as well as the
        <code>
          name="viewport" content="width=device-width,initial-scale=1.0"
        </code>
        to keep the site responsive.
      </p>
      <p>
        Also, this{' '}
        <a
          href="https://internetingishard.netlify.app/html-and-css/links-and-images/"
          target="_blank"
          rel="noopener noreferrer"
        >
          resource
        </a>{' '}
        by Interneting is Hard is a fantastic read on links and images. It
        clearly taught me the difference of absolute, relative, and
        root-relative links. And most importantly, when I should use certain
        image types (jpg, png, svg, gif)!
      </p>
      <p>
        From this point on, everything I learned about HTML were put into
        practice in this{' '}
        <a
          href="https://recipes-seven-teal.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          project
        </a>
        , which is a simple recipes website. Take note, however, that there is
        styling on the website because this project was revisited once I went
        further along in the curriculum.
      </p>
      <p>
        After this, I then had a refresher on{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
          rel="noopener noreferrer"
        >
          CSS
        </a>{' '}
        (Cascading Style Sheets). Most notably, flexbox. Admittedly, I didn't
        fully understand <code>flex-grow</code>, <code>flex-shrink</code>, and
        <code>flex-basis</code> before. But now, I understand it a lot more and
        can actually put <code>flex-grow</code> to good use now. Also, this{' '}
        <a
          href="https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/"
          target="_blank"
          rel="noopener noreferrer"
        >
          article
        </a>{' '}
        by Josh Comeau absolutely blew my mind on the capabilites of flexbox. I
        didn't think dynamic layouts were possible without the use of media
        queries, but I was astonished to see flexbox used so well!
      </p>
      <p>
        At this point, I made this{' '}
        <a
          href="https://landing-page-sigma-peach-49.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          project
        </a>{' '}
        which is just a simple layout that was followed in the lesson's
        instructions. I had a lot of fun personalizing it and making it
        Silksong-themed! Do take note that it is not responsive since
        responsiveness is not yet covered at this point of the curriculum.
      </p>
      <p>
        We now face the beast that is{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noopener noreferrer"
        >
          JavaScript
        </a>
        . From here on out, I thought that I would struggle a bit in doing the
        projects. But surprisingly, it wasn't that bad. I have a strong feeling
        that it's because I took this{' '}
        <a
          href="https://www.theodinproject.com/lessons/foundations-problem-solving"
          target="_blank"
          rel="noopener noreferrer"
        >
          chapter
        </a>{' '}
        to heart, which talks about the importance of developing a problem
        solving framework (understanding the problem, planning, and pseudocode).
      </p>
      <p>
        Looking back in the past, I would often just go straight to code without
        having a concrete plan in mind, so the application's structure ends up
        being a mess (and so I give up and delegate the debugging to AI, which
        makes it even more of a mess). This time around though, actually writing
        down first in plain English the flow of my application helps SO much
        when it comes to the actual coding.
      </p>
      <p>
        Anyways, here are the projects I made for the JavaScript chapter.{' '}
        <a
          href="https://rock-paper-scissors-mu-kohl.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rock paper scissors
        </a>
        ,{' '}
        <a
          href="https://etch-a-sketch-indol-xi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          etch-a-sketch
        </a>
        , and a{' '}
        <a
          href="https://calculator-psi-black.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          calculator
        </a>
        . For each project, there definitely could have been more features, but
        I stuck with the defined scope in the respective lesson's instructions.
        The point of these projects is to practice JavaScript fundamentals
        anyways, so I didn't want to go over the top with features.
      </p>
      <p>
        I will say this though, I am not yet super familiar with the built in
        string methods and array methods in JavaScript. Oftentimes, I had to
        keep going back to the documentation and see what method would work for
        my problem. Of course, re-reading documentation is perfectly normal, but
        I do want to reach a point where I'm at least comfortable with the most
        used methods out there.
      </p>
      <p>
        On another note, this{' '}
        <a
          href="https://www.javascripttutorial.net/javascript-dom/javascript-event-delegation/"
          target="_blank"
          rel="noopener noreferrer"
        >
          article
        </a>{' '}
        on event delegation is such a worthwhile read. Instead of adding an
        event listener to each element, you could just add that event listener
        to their parent and access the <code>target</code> property that
        references the element that dispatches the event. This is so useful, and
        so I used this concept for my JavaScript projects.
      </p>
      <p>
        I also almost forgot to mention, but I decided to integrate a little bit
        of AI into my learning journey. However, I specifically prompt it to
        never directly give me the solution. And instead, it should just keep
        asking me questions until I figure out a solution to the problem that I
        have. And honestly, it works a ton! I still have to think about the
        problem in hand, and I do end up learning a lot at the end of it all.
        But of course, I still pour in a considerable amount of time trying to
        figure out the problem by myself first before asking for guidance from
        AI.
      </p>
      <p>
        For any beginners like me out there, perhaps you could use the prompt
        that I use:
      </p>
      <p style={{ fontStyle: 'italic' }}>
        "You are a senior developer. I am a beginner developer. I will ask you
        questions. However, do NOT directly give me the solution. Instead, like
        a good senior, you should ask me questions that will challenge my
        critical thinking to guide me in discovering or forming my own solution
        to the problem I asked. Is this clear?"
      </p>
      <p>
        That's about it for this week. Overall, it was very fun! Time to move on
        to the{' '}
        <a
          href="https://www.theodinproject.com/paths/full-stack-javascript/courses/intermediate-html-and-css"
          target="_blank"
          rel="noopener noreferrer"
        >
          Intermediate HTML and CSS
        </a>{' '}
        course. Excited to learn further!
      </p>
    </>
  );
}

export default Article2;
