---
title: "Theming that Doesn't Suck"
description: "No more of that horrible flashing."
pubDate: "Sep 13, 2026"
---

TL;DR:

> To prevent unwanted flashing, do server-side theming using a cookie approach.

I'll go over this using SvelteKit, but I'd imagine that the concept would be the same for other similar frameworks like Next.js.

My approach is based on this [article](https://scriptraccoon.dev/blog/darkmode-toggle-sveltekit), though mine differs from how it stores the current theme and solving the unwanted flash on the *very first* page visit.

Styles are applied based on the `html` element's `data-theme` attribute, so make sure you have:

```html
<html data-theme="">
  <!-- ... -->
</html>
```

Then you just simply add CSS styles based on that. Here are some example variables:

```css
html {
  --bg: hsl(15, 44%, 96%);
  --fg: hsl(300, 5%, 13%);
  --blue: hsl(200, 51%, 37%);
}
html[data-theme='dark'] {
  --bg: hsl(285, 5%, 17%);
  --fg: hsl(60, 25%, 98%);
  --blue: hsl(186, 71%, 69%);
}
```

The main thing though, saving the theme as a cookie:

```svelte
<script>
  let currentTheme = $state(
    typeof document !== 'undefined' 
      ? document.documentElement.getAttribute('data-theme') || '' 
      : ''
  );

  function set_theme(theme: string) {
    const one_year = 60 * 60 * 24 * 365;
    document.cookie = `theme=${theme}; max-age=${one_year}; path=/`;
    document.documentElement.setAttribute('data-theme', theme);
    currentTheme = theme;
  }

  function toggleTheme(): void {
    const theme = currentTheme === 'light' ? 'dark' : 'light';
    set_theme(theme);
  }
</script>
```

The `document` only exists in the browser, so if the code is running in the browser, get the value of `data-theme` attribute. Otherwise, if the code is running on the server, the `document` doesn't exist (it is undefined), so just set `currentTheme` to a blank string.

Then, for whatever element that is toggling your theme, call `set_theme`. It simply sets a cookie that lasts for one year, and it's available to all pages through `path=/`. It also sets the data attribute to the correct theme, and updates the `currentTheme` accordingly.

We can then use a [`handle`](https://svelte.dev/docs/kit/hooks#handle) hook to change the `data-theme` attribute *on the server*. This is so that the user won't see unwanted flashing anymore. Note that you can't use a [prerendered](https://svelte.dev/docs/kit/page-options#prerender) website:

```ts
export const handle = async ({ event, resolve }) => {
  const theme = event.cookies.get("theme");

  if (!theme) {
    return await resolve(event);
  }

  return await resolve(event, {
    transformPageChunk: ({ html }) => {
      return html.replace(
        'data-theme=""',
        `data-theme="${theme}"`
      );
    },
  });
};
```

If there's no `theme` cookie, return the default response. Otherwise, we replace the empty attribute with the correct value. The [`transformPageChunk`](https://svelte.dev/docs/kit/@sveltejs-kit#resolveoptions) function can replace the HTML string for us.

To solve the problem where there is flashing on the *very first* page visit, we can do an inline script that immediately sets the correct value using the user's system settings: 

```html
<html lang="en" data-theme="">
  <head>
    <script>
      (function () {
        var match = document.cookie.match(/(?:^|; )theme=([^;]+)/);
        var theme = match
          ? match[1]
          : window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
        document.documentElement.setAttribute('data-theme', theme);
      })();
    </script>
    <!-- ... -->
  </head>
</html>
```

This script runs synchronously, before the rest of the page renders, which is why it prevents the flash. It sets the `data-theme` immediately, before the browser has painted anything visible!

## Resources

- [basis](https://scriptraccoon.dev/blog/darkmode-toggle-sveltekit)
- [handle](https://svelte.dev/docs/kit/hooks#handle)
- [prerender](https://svelte.dev/docs/kit/page-options#prerender)
- [transformPageChunk](https://svelte.dev/docs/kit/@sveltejs-kit#resolveoptions)
