---
title: "Pretty TUIs with Bubble Tea and Lipgloss"
description: "A blog article on building pretty TUIs with Bubble Tea and Lipgloss."
pubDate: "Jun 21, 2026"
---

Recently, I've been building a terminal app that visualizes key presses with an ASCII keyboard. The notable thing about it though is that it captures key presses globally (via evdev), not just from the active terminal window. I haven't settled on a name yet, but you can check out my [repo](https://github.com/arvingarciabtw/qwerty) to see the codebase.

If you've looked at rices on [r/unixp\*rn](https://www.reddit.com/r/unixporn/), you'll see that some layouts have their code editor on one side, and perhaps an eye candy app (like [fastfetch](https://github.com/fastfetch-cli/fastfetch) or [cmatrix](https://github.com/abishekvashok/cmatrix)) on the other, either taking up a corner or the entire side.

Instead of an app that is purely visual and interactive, I thought it would be cool to have an ASCII keyboard visualizer that responds to your key presses, even when you are in a different terminal session. I think it's a more fun and interactive eye candy app to put, and I think some people in the ricing community might like it!

Of course, I have to make this look good. I wanted to build this with Go (I'm liking the language right now and want to keep learning) so I looked at some options on how to best make the TUI. Pretty easily, I eventually landed on [Bubble Tea](https://github.com/charmbracelet/bubbletea) and [Lipgloss](https://github.com/charmbracelet/lipgloss) by Charm.

I'll just go over why I liked using these while building my app. If you want to learn more and go deep, you can always check out their docs. Links to the Go docs of [Bubble Tea](https://pkg.go.dev/charm.land/bubbletea/v2) and [Lipgloss](https://pkg.go.dev/charm.land/lipgloss/v2) are here. Do take note that they've recently migrated to v2, so always refer to these ones.

What I like about them is their simplicity. You'd think that making TUIs would be a bit complex, but Bubble Tea makes the paradigm super easy. Their framework is based on [The Elm Architecture](https://guide.elm-lang.org/architecture/), and it's so simple to grasp. Only three parts are always at play: **Model**, **View**, and **Update**.

The Model just holds all of your app state. When something in your program happens, the Update method gets called, updating the state in your model. Lastly, your View is based on your state. Every time the state changes, your View re-renders.

Let's look at a simple counter example. All this does is increment the count if you press up or right arrow, and decrement the count if you press down or left arrow. Pressing q or ctrl+c will quit the program.

```go
package main

import (
	"fmt"
	"os"

	tea "github.com/charmbracelet/bubbletea"
)

type model struct {
	count int
}

func (m model) Init() tea.Cmd { return nil }

func (m model) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	switch msg := msg.(type) {
	case tea.KeyMsg:
		switch msg.String() {
		case "q", "ctrl+c":
			return m, tea.Quit
		case "up", "right":
			m.count++
		case "down", "left":
			m.count--
		}
	}
	return m, nil
}

func (m model) View() string {
	return fmt.Sprintf("Count: %d\n\n↑/→ inc | ↓/← dec | q quit", m.count)
}

func main() {
	if _, err := tea.NewProgram(model{}).Run(); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}
```

When the app executes, we `Run` a `NewProgram`, passing in our initial model. This program is simple, so the model only has one field, the count. Passing in `model{}` initializes the count to 0 (since 0 is the zero value of an int). Then, we define our app’s initial state in the Init method. Init can return a Cmd that could perform some initial I/O, but we just return nil since we don't need any I/O for this.

Update just has some cases for handling our key presses. If they press q or ctrl+c, return the model and quit the program. Pressing whatever arrow key increments or decrements appropriately, then we return the model with no command. Since the model's state is updated, our View method is called.

Since our state is always changing every time something happens, our View works nicely since we use the model's count in our final string output. And really that's all the paradigm is. Very simple! If your use case requires some I/O, they have a quick [tutorial](https://github.com/charmbracelet/bubbletea/tree/main/tutorials/commands/) available.

But of course, using just Bubble Tea means you'll just have unstyled text. This is where Lipgloss comes into play. It makes defining your styles super easy, even more so if you are already familiar with CSS. The code below would just print bold, italicized, white text on a blue background:

```go
import "charm.land/lipgloss/v2"

var myWhateverStyle = lipgloss.NewStyle().
    Bold(true).
    Italic(true).
    Foreground(lipgloss.White).
    Background(lipgloss.Blue)

lipgloss.Println(myWhateverStyle.Render("I am bold, italicized, white text on a blue background"))
```

My favorite thing about Lipgloss is that it supports the 16 standard ANSI colors. This means you can do something like this:

```go
lipgloss.Color("5")  // Magenta
lipgloss.Color("9")  // Red
lipgloss.Color("12") // Light blue
```

But they also provide named constants, so really you're better off doing this instead:

```go
lipgloss.Magenta
lipgloss.Red
lipgloss.LightBlue
```

The color palette of your terminal comes from these colors, so by simply using these named constants, your TUI automatically adapts to the theme the user has. Before making the project, I thought this theme adaptability would be difficult to achieve, but Lipgloss just does it for me! So it doesn't matter if you're on Gruvbox or TokyoNight, the colors are based on your theme.

There's a ton of types and functions in this package, so I'll just leave it to you to explore the docs. Have fun messing around building TUIs!
