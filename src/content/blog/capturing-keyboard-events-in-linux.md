---
title: "Capturing Keyboard Events in Linux"
description: "A blog article on how to capture keyboard events, particularly in Linux."
pubDate: "Jun 28, 2026"
---

I've recently completed an MVP of a project I've been working on. It's called [ditto](https://github.com/arvingarciabtw/ditto), and it's a system-wide ASCII keyboard visualizer. It's functionally just eye candy, where you just code away on your editor and the ASCII keyboard on the corner will light up!

> The program is named after Ditto, a Pokémon that copies the appearance and moves of other Pokémon. I thought it was a fun and somewhat fitting name, since the ASCII keyboard mimics what you actually type.

Apart from the actual rendering of the keyboard, the main challenge here is pretty straightforward: how do I capture the keyboard presses, even if I'm outside the terminal session? This is frankly out of my lane, and so I had to do a lot of digging around to see what solutions would work.

First possible solution I stumbled upon was using this package called [gohook](https://pkg.go.dev/github.com/robotn/gohook). It simplifies capturing keyboard and mouse events, and it's cross-platform. It seemed perfect for my use case, but unfortunately there was a catch...

From the [wayland.go](https://github.com/robotn/gohook/blob/master/wayland.go) file in the repository:

> IMPORTANT —
> Wayland deliberately has NO global keylogging/mouse-hooking primitive.
> A wl_seat only delivers wl_keyboard / wl_pointer events to a surface
> while THAT surface holds input focus. There is no XRecord equivalent.

So if you were using a Wayland compositor like Hyprland, it wouldn't work for you (and it just so happens that I'm a Hyprland user). This was a no-go for me, since this project is intended to primarily be used by people into [ricing](https://www.reddit.com/r/unixporn/comments/3iy3wd/stupid_question_what_is_ricing/), and so I needed to support Wayland compositors since they are widely used in the community.

I looked around for another solution I could implement, and eventually I settled with [evdev](https://docs.kernel.org/input/input.html#evdev). Since it's an input event interface that's on the kernel-level, it works for any Linux distro, on any compositor that implements any display server protocol. The only caveat now though is that users would first have to set permissions when using the program.

Thankfully, there are a lot of language-specific bindings for evdev. Of course, since my project is built with Go, I used this [package](https://pkg.go.dev/github.com/gvalkov/golang-evdev) which provided the Go bindings. Notably, it gives you constants for the keys, so for instance, the constant `KEY_LEFTSHIFT` is equivalent to the left shift key. I found this very helpful when I represented my keys as structs, which had a field for each key's code.

In my project, I scan `/dev/input/event0` through event31, filtering for keyboards by checking their [udev](https://wiki.archlinux.org/title/Udev) properties via either the uevent `sysfs` file or a `udevadm` info call. Once all connected keyboards are found, each keyboard spins off a goroutine that reads raw events in a loop and forwards key presses and releases as messages to the program.

The only catch is permissions: `/dev/input/event*` isn't readable by default, so users need to set capabilities by running the code below on the binary. I made sure to print a clear message when the project is run without permissions.

```bash
sudo setcap cap_dac_read_search=ep "$(which ditto)"

# You could also technically add the user to the input group and it would work, but that would
# be more unsafe since that would grant full control over all devices under /dev/input.
```

What's great about evdev though is that you can also use it for other input devices, not just keyboards. I've provided the resources below if you'd want to go deeper on the technicalities and build something of your own.

## RESOURCES

- [evdev](https://docs.kernel.org/input/input.html#evdev)
- [evdev go bindings](https://pkg.go.dev/github.com/gvalkov/golang-evdev)
- [udev](https://wiki.archlinux.org/title/Udev)
- [gohook](https://pkg.go.dev/github.com/robotn/gohook)
- [ditto](https://github.com/arvingarciabtw/ditto)
