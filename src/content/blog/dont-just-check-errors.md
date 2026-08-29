---
title: "Don't Just Check Errors..."
description: "Don't just check errors, handle them gracefully."
pubDate: "Aug 30, 2026"
---

[Handle them gracefully](https://go-proverbs.github.io/#:~:text=Don%27t%20just%20check%20errors%2C%20handle%20them%20gracefully.).

If you're a technical person, who values learning the technical stuff much more deeply, you'll get much more value out of reading this [article from Dave Cheney](https://dave.cheney.net/2016/04/27/dont-just-check-errors-handle-them-gracefully). And read [this one](https://dave.cheney.net/2016/04/07/constant-errors) too while you're at it. This article is really just me sharing these resources, and I won't say much as I believe they explain it better than I could.

TL;DR:

> Treat all errors as opaque. If not possible, assert errors for behavior. Use `errors.Wrap` and `errors.Cause`.

These functions aren't natively in Go though, it comes from another package, [github.com/pkg/errors](https://pkg.go.dev/github.com/pkg/errors). It's not a big deal, but maybe it's not your cup of tea.

This was written way back in 2016 though. It's been 9 years, and while I'm not yet super familiar with the language, I'm sure it has evolved since then. JetBrains wrote this year about more [modern practices](https://blog.jetbrains.com/go/2026/03/02/secure-go-error-handling-best-practices/), which still uses opaque wrapping.

For now I'll just use what the standard library provides, but it's good to keep the other approach at the back of my head.
