---
title: "Contribute to Open-Source Civic Tech"
description: "Talking about why people should contribute to open-source civic tech."
pubDate: "Aug 02, 2026"
---

You should contribute to open-source civic tech.

I say this because I've been recently getting into contributing to [bettergov.ph](https://github.com/bettergovph), the most active open-source initiative that creates civic tech projects for the Filipino people. Right now, I'm working on automating their bi-monthly link checks via a GitHub [lychee](https://github.com/lycheeverse/lychee-action) action, and maintaining my own localized LGU platform called [bettercalapan.org](https://bettercalapan.org/).

Regardless of where you are in the world, I'm sure most of us feel that the government can do a better job. That betterment can involve a lot of things, but as developers, we do have the capacity to make a meaningful change ourselves. And that's by contributing to open-source civic tech. It's really fulfilling as well, since what you do is going into something actually helpful and transparent.

If you're from the Philippines, I recommend you strongly consider helping out at [bettergov.ph](https://github.com/bettergovph). If you're from anywhere else, then I urge you to go find initiatives that help out your fellow countrymen, I'm sure there's a couple out there in your country!

Like I mentioned before, I'm currently developing and maintaining [bettercalapan.org](https://bettercalapan.org/), a local LGU platform. It's a subset of one of BetterGov's projects, [lgu.bettergov.ph](https://lgu.bettergov.ph/). What's different about it though is that I'm deviating it from the provided templates and making my own layout and design for it.

For an informational government site, I'd say the most important things to consider are: UX, accessibility, and performance. [GOV.uk](https://www.gov.uk/) is the gold standard for this, so much so that they've even won an [award](https://www.uxmatters.com/mt/archives/2016/01/how-focusing-on-user-experience-helped-govuk-win-design-of-the-year.php) for how well thought out the UX and accessibility is. As such, I plan on modeling my site around their design principles, while keeping it as performant as possible.

To automate performance checks on each page, I'm planning on using [Unlighthouse](https://github.com/harlan-zw/unlighthouse), it essentially just runs Google Lighthouse on all of your pages. Lighthouse serves as a good baseline for checking your site's performance and accessibility. Since it [simulates](https://github.com/GoogleChrome/lighthouse/blob/main/docs/throttling.md) a slower mobile network by default, consistently scoring well gives me confidence that users on slower connections will still have a good experience.

As for accessibility, I've still not yet found a free open-source tool that automates WAI-ARIA checks for each page, but I do plan on ensuring that all the pages of my site will conform to [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/)!
