---
title: "Niche HTML Elements"
description: "Some niche HTML elements that you might not have known about."
pubDate: "Sep 27, 2026"
---

I know that there are a lot of HTML elements out there apart from your typical `div`s and `p`s, but I've forgotten them all as it's been a while since I've went over them when I first began learning web dev.

So, I recently re-read the [HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements) at MDN Web Docs, and I was a bit surprised at some of the stuff I've seen. Feel free to go over the list yourself, but I'm more so writing this as a reminder to myself, and maybe an interesting little nugget for any readers.

## section 

I feel like most people know about `section`, and use it as a more semantic replacement for `div`, but here's the official description from the docs:

> Represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it. ***Sections should always have a heading***, with very few exceptions.

It should always have a heading! Websites I've built in the past definitely have had `section`s without a heading...

## article

This one I feel is also fairly well-known. In particular, I see it mostly being used as a wrapper for: news articles, blog articles, basically any written content. However, here is the formal description:

> Represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication). Examples include a forum post, a magazine or newspaper article, a blog entry, a product card, a user-submitted comment, an interactive widget or gadget, or any other independent item of content.

So it's not really specifically meant for written articles, but more so components that are reusable. The definition itself already includes common ones that we see in most interfaces, like product cards and user-submitted comments.

Worth remembering to use whenever you have any repeating component in an interface!

## search

Okay, I'm a bit guilty here, but I for some reason have never used this...

As the name says, the `search` element should be used for form controls that involves search or filtering operations. In other words, use it for a search bar.

## address

This is a weirdly named one. `address` is used for contact information, not locations.

## menu

This to me doesn't really have much value. `menu` is basically just `ul`, but named differently. Perhaps this is useful for a nav menu, since `ul` doesn't read too well for a nav *menu*.

## kbd

`kbd` is certainly very niche. Here is the definition:

> Represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device.

But, I have found it useful for my own [personal site](https://arvingarcia.com) which visualizes pressed keys in the footer, as well as the home page of another project of mine, [ditto](https://ditto.arvingarcia.com).

## mark

I have not used this personally, but it seems very useful! In particular, its [info page](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/mark) in the docs shows a very good example: using `mark` to highlight search keywords.

I'll keep this in mind if I ever make some sort of docs site that involves a search control, similar to [svelte.dev](https://svelte.dev/). Looking at the DOM of the Svelte site, they actually use `mark` for the highlighting, which is pretty neat.

## time

Another one that I should've been using, but I don't think I've ever used the `time` element. As the name implies, it's used to represent a specific period in time.

## del and ins

These two are also quite niche in usage, but the `ins` [info page](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ins) shows a good use case: deletion and insertion of lines, similar to code diffs.

There's tons more in the reference list that could be useful, but these are the ones that caught my eye and I could see using in the future.

I hope this was useful! Time to start putting `h1`s in your `section`s if you haven't yet...

## resources

- [html elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)
- [mark](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/mark)
- [ins](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ins)
- [personal site](https://arvingarcia.com)
- [ditto](https://ditto.arvingarcia.com)
