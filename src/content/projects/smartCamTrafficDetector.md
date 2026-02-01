---
projectName: "smartCamTrafficDetector"
githubPage: "https://github.com/Valkorz/smart-cam-traffic-detector"
supported: true
title: "Smart Cam Traffic Detector"
description: "A Computer Vision Artificial Intelligence model trained to detect traffic-related elements (vehicles, cones, lights and signs) for the MAIA DonkeyCar on-board software."
version: "1.0.2"
author: "Valkorz (Vittorio Pivarci)"
contributors: ["GuiMLima"]
tags: ["Open-Source", "Python", "YOLO", "Computer Vision"]
dateOfCreation: 2025-07-01
thumbnail: "./images/trafficDetector3.png"
screenshots:
    - "./images/trafficDetector1.png"
    - "./images/trafficDetector2.png"
    - "./images/trafficDetector3.png"
---

# INTRODUCTION

SCTD (Smart Cam Traffic Detector) is a Computer Vision project implemented with the Ultralytics YOLO library. The project aims to create a Yolo 'v8n' based artificial intelligence model capable of detecting the position of traffic elements/objects in real time using camera feed.

# IMPLEMENTATION

The is implemented by curating a selection of images obtained through different sources, such as: self-taken pictures, online databases (Kaggle) and royalty free media. After the data is gathered, each image is labeled using **Roboflow** , and the objects are separated by their corresponding types. The finished dataset is exported to the repository and used during the training process.


# RELEVANCE

This project is relevant when tackling the development process of autonomous vehicles. This study aims to understand the effectiveness of Computer Vision models during decision-making, and how certain parameters can impact the quality of output. The project aims to analyze how different batch sizes and dataset quality can compromise the reliability of the result, given that it could pose a real risk when applied to a real vehicle without proper quality control.