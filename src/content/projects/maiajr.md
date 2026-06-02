---
projectName: "maiajr"
githubPage: "https://www.tinkercad.com/things/0Z4H6C7rQzh-maiajr-circuit"
supported: true
title: "Obstacle-avoiding vehicle"
description: "A miniature obstacle-avoiding arduino vehicle created in MAIA Facens."
version: "1.0.0"
author: "Valkorz (Vittorio Pivarci)"
contributors: []
tags: ["Open-Source", "Arduino", "C/C++"]
dateOfCreation: 2025-03-31
thumbnail: "./images/maiajr1.png"
screenshots:
    - "./images/maiajr1.png"
    - "./images/maiajr2.png"
    - "./images/maiajr3.png"
---

# INTRODUCTION

Maia Jr. is a category of automated miniature vehicle developed by the MAIA team at FACENS. Designed as an accessible entry point into robotics and embedded systems, it serves as a hands-on learning platform for new developers and hardware enthusiasts. The implementation documented here features real-time obstacle avoidance driven by ultrasonic sensor feedback.

# IMPLEMENTATION

The vehicle is built around an Arduino microcontroller and powered by two DC motors managed through an M298N motor controller module. Between one and three ultrasonic sensors are mounted on the chassis — a three-sensor configuration places one sensor facing forward and two angled approximately 30° to either side. The firmware continuously polls distance readings from each sensor: when an obstacle is detected within a defined threshold, the vehicle rotates until a clear forward path is found before resuming movement. Power is supplied by a 5V rechargeable mobile battery with a USB-C charging port.

**Hardware components:**
- (1–3×) Ultrasonic sensors
- (1×) Arduino board
- (2×) DC motors
- (1×) M298N motor controller module
- (1×) 5V rechargeable mobile battery
- (1×) USB-C battery charging regulator
- (1×) Chassis with (2×) mountable rubber wheels

# RELEVANCE

Maia Jr. is an effective educational platform for the following reasons:

- Provides practical exposure to Arduino programming and external peripheral interfacing.
- Develops problem-solving and firmware design skills through real-time sensor integration.
- Introduces students to fundamental electronics concepts, motor control, and hardware assembly.
