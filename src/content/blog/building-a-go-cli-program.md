---
title: "Building a Go CLI Program"
description: "A blog article on the basics of building a Go CLI program"
pubDate: "Jun 14, 2026"
---

I've recently been learning Go on [boot.dev](https://www.boot.dev/), and decided that I wanted to put into practice what I've been learning by building a simple (and silly) little CLI program.

I built [gitlarp](https://github.com/arvingarciabtw/gitlarp), a tool to semi-automate your commits for a certain date range. I first conceived the idea from the recently popular slang term [larping](https://www.urbandictionary.com/define.php?term=Larping). If for example you don't have any commits from January 1 to January 3, you just run on your terminal:

```bash
gitlarp -s "2026-01-01" -e "2026-01-03"
```

This will automatically make a commit (default count of 1 and default message of larping...) for each day. You can check the project out in more detail on the linked repo above.

I don't want to go over the project itself though, and moreso my realization on what are the necessary things that go into building a CLI program with Go. And it's quite simple. I think there are two packages from the standard library that would always be needed: `os` and `flag`.

Generally, the `os` package is just useful for when errors happen. You can output error messages to standard error by using `os.Stderr`, then use `os.Exit(1)` to terminate the program if needed.

But apart from that, it also has a nested package called `os/exec`. If the program that you're planning to build has to run another program, you can use it to execute a command from that other program. For instance, my gitlarp program had to execute a git command, so that you could make a commit:

```go
cmd := exec.Command("git", "commit", "--allow-empty", "-m", cfg.Message, "--date", gitDate)

err := cmd.Run()
if err != nil {
  fmt.Fprintf(os.Stderr, "Error: Failed to commit for date %s: %v\n", gitDate, err)
  os.Exit(1)
}
```

You just create a command with `exec.Command()` and actually run it with `Run()`, very simple!

Most likely, you'd also want to include flags in your program. As the name suggests, the `flag` package is used for just that. It implements command-line flag parsing.

An easy way of doing this would be like this:

```go
var num = flag.Int("num", 123, "Description for num flag usage")

flag.Parse()

fmt.Println(*num)
```

So, if you ran `[program] --num`, it would print 123 in your terminal.

But typically, you'd want to include shorthand variants for your flags. For my gitlarp program, I implemented it like this:

```go
var message string
messageDefault := "larping..."

flag.StringVar(&message, "m", messageDefault, "Commit message")
flag.StringVar(&message, "message", messageDefault, "Commit message")

flag.Parse()
```

In this case, you'd have options for how you'd want to specify your flag when running the program:

```bash
gitlarp -m "My custom message using -m"
gitlarp --message "My custom message using --message"
```

Much nicer, and much more practical!

At the end of the day, what packages you'd use depends on what kind of program you are building. But generally, I'd say these two packages are necessary for any CLI program.

## RESOURCES

- [flag package](https://pkg.go.dev/flag)
- [os package](https://pkg.go.dev/os)
- [os/exec subpackage](https://pkg.go.dev/os/exec)
- [gitlarp](https://github.com/arvingarciabtw/gitlarp)
