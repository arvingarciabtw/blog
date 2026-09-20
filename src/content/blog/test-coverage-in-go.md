---
title: "Test Coverage in Go"
description: "Test coverage in Go is pretty damn good."
pubDate: "Sep 20, 2026"
---

Something cool I found out about Go: test coverage. I knew about the `-cover` flag:

```sh
go test -cover ./...
# ok github.com/sample/cmd/web 0.022s coverage: 67.0% of statements
# ...
```

But, you can even get more a detailed breakdown of test coverage *by method and function* with the `-coverprofile` flag:

```sh
go test -coverprofile=/tmp/profile.out ./...
go tool cover -func=/tmp/profile.out
# github.com/sample/cmd/web/handlers.go:31: firstHandler 81.9%
# github.com/sample/cmd/web/handlers.go:126: secondHandler 100.0%
# github.com/sample/cmd/web/handlers.go:132: thirdHandler 92.4%
# ...
```

But even better, you can use the `-html` flag instead:

```sh
go tool cover -html=/tmp/profile.out
```

And it will open a browser window containing your code, highlighting the lines covered in green, and in red for those that aren't. Here's an [image](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.foomo.org%2Fassets%2Fimages%2Fcoverage-html-31939a8031afbabb8f2d0af5c7476644.webp&f=1&nofb=1&ipt=0d66a861d6f55ff7ff1c7af83291302fd8edd828da56d3135379a099677f695a) of what it would look like.

To take it even further, you could do `-covermode=count`:

```sh
go test -covermode=count -coverprofile=/tmp/profile.out ./...
go tool cover -html=/tmp/profile.out
```

The difference here is that frequently executed statements have a much more saturated green color, while those that are less are desaturated. Here's an [image](https://user-images.githubusercontent.com/3655711/170814899-2e28a87e-9a18-4a48-a6f1-4660665b7918.png) of what it would look like.

Pretty cool to see that this just natively comes in the `go` executable. I found this out through Alex Edwards' book, [Let's Go](https://lets-go.alexedwards.net), so credits to him!
