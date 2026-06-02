---
projectName: "bitManipulator"
githubPage: "https://www.tinkercad.com/things/5Bzbdi9jaoN-bit-manipulator"
supported: true
title: "Bitwise calculator"
description: "An Arduino-based Tinkercad simulation implementing core bitwise operations — OR, AND, Left Shift, Right Shift — with support for saving and loading bit states in memory, built as an IoT course assignment."
version: "1.0.0"
author: "Valkorz (Vittorio Pivarci)"
contributors: []
tags: ["Open-Source", "Arduino", "C/C++", "Electronics"]
dateOfCreation: 2024-04-30
thumbnail: "./images/bitmanipulator3.png"
screenshots:
    - "./images/bitmanipulator1.png"
    - "./images/bitmanipulator2.png"
    - "./images/bitmanipulator3.png"
---

# INTRODUCTION

Bitwise Calculator is an Arduino-based project developed as part of an IoT assignment during the 1st semester of Computer Engineering at FACENS. Using the Tinkercad simulation environment and an IR remote as input, the project implements core bitwise operations found in standard programming languages — including Left Shift, Right Shift, OR, and AND — with support for saving and loading bit states between sessions.

# IMPLEMENTATION

The circuit was designed and simulated in Tinkercad, centered around an Arduino Uno. An IR receiver module captures input signals from a standard IR remote, which are mapped to specific bitwise operations. The current bit state is visualized through an output display, and the firmware supports reading and writing values to the Arduino's EEPROM, enabling persistent state storage across power cycles.

# RELEVANCE

Understanding bitwise operations is fundamental to low-level programming, embedded systems design, and performance-critical application development. By implementing these operations in hardware, this project bridges the conceptual gap between abstract binary arithmetic and its physical representation — providing an intuitive, interactive demonstration of how computers manipulate data at the bit level.
