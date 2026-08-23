---
title: "Exploring the ESP32"
description: "Trying out the ESP32, as someone with no hardware experience."
pubDate: "Aug 23, 2026"
---

Indulging in too much software has been kind of a slog lately. I wanted to have a change of pace by giving a shot at making stuff with the ESP32. I'm someone who has zero hardware experience though, so there's gonna be a lot of learning ahead of me.

This motivation came to mind when I saw this desk robot, [Taby](https://www.heytaby.com). It's like a little screen with a cute face that helps you out with todos. This gave me an idea for something similar that would be fun to pursue, but I won't talk about that for now.

An ESP32 is a [microcontroller](https://en.wikipedia.org/wiki/Microcontroller) that comes with Wi-Fi and Bluetooth connectivity. For that thing I want to make, the built-in Wi-Fi comes handy. It's not really a computer like the Raspberry Pi. It is better than the Arduino though, in that it's hardware is just [better](https://jlcpcb.com/blog/esp32-vs-arduino#:~:text=most%20common%20baseline%20in%20the%20differences%20between%20Arduino%20and%20ESP32) by all aspects.

The specific one that I got is the ESP32-S3 chip. For the whole setup, I just followed the [official guide](https://docs.espressif.com/projects/esp-idf/en/stable/esp32s3/get-started/) to get me started. In a nutshell:

```sh
# Install ESP-IDF.

# Run the activation script, something like this mentioned in the guide
# I used the fish script for mine though since I use fish as my shell
source "/Users/username/.espressif/tools/activate_idf_v5.4.2.sh"

# Set the target
# esp32s3 since that's what I have
idf.py set-target esp32s3

# Build the project
# There are a bunch of examples you can use in $IDF_PATH/examples
idf.py build

# Flash the firmware onto the device
idf.py -p PORT flash

# Optionally monitor
idf.py -p PORT monitor
```

To know the serial port name, execute `ls /dev/tty*` while the ESP32 is unplugged, then plug the device and execute it again. The port will be the one that was added. According to the guide, `/dev/cu.` is the command for macOS.

You can also just unify the build, flash, and monitor steps in one command to make your life easier:

```sh
idf.py -p PORT flash monitor
```

And that's really about it. I played around with some of the examples: hello world, making the LED blink, and connecting the ESP32 to my Wi-Fi network. The project I want to do involves a bunch of moving parts though, and so I'm still waiting for all of them to arrive. For the coming weeks and months I'll be gradually working on this during the weekends.

And as a side note, I've been recently dabbling in some Zig, so it'll be fun to make this my first ever hardware project AND Zig project!
