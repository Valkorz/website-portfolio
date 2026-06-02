---
projectName: "vehicleTrafficAlertSystem"
githubPage: "https://github.com/murilogaarcia/API_Integra-o_SQLite-Esp"
supported: false
title: "Vehicle Traffic Alert System"
description: "A pedestrian safety system developed at FACENS (UPX, November 2025), designed to collect real-time traffic data and alert pedestrians upon detecting speeding vehicles on high-traffic roads."
version: "1.0.0"
author: "Valkorz (Vittorio Pivarci)"
contributors: ["Luisenbon", "MuriloCoelho1212", "GuiMLima", "murilogaarcia"]
tags: ["Electronics", "ESP-32", "C/C++", "API", "SQLite", "HTML", "CSS"]
dateOfCreation: 2025-08-01
thumbnail: "./images/upx3proj1.png"
screenshots:
    - "./images/upx3proj1.png"
    - "./images/upx3proj2.png"
    - "./images/upx3proj3.png"
    - "./images/upx3proj4.png"
    - "./images/upx3proj5.png"
    - "./images/upx3proj6.png"
    - "./images/upx3proj7.png"
    - "./images/upx3proj8.png"
---

# INTRODUCTION

The Vehicle Traffic Alert System is a prototype developed and presented at FACENS as part of the UPX initiative (November 2025). The project aims to build a system capable of collecting traffic data and alerting pedestrians in real time upon detecting a speeding vehicle. The collected data is intended to train an adaptive algorithm capable of predicting safe crossing intervals, identifying danger levels across different highway segments, and mapping peak activity periods. All results are made available through an online dashboard for comprehensive data visualization.

# IMPLEMENTATION

The prototype was implemented using ultrasonic sensors to poll the distance and speed of passing vehicles in real time. An ESP-32 microcontroller processes the sensor readings and triggers an OLED display for visual alerts alongside a buzzer for auditory cues. Collected data is transmitted to a backend that exposes it through a SQLite-backed API, which feeds an HTML/CSS dashboard for remote monitoring.

# RELEVANCE

Traffic accidents involving pedestrians represent one of the most preventable yet prevalent causes of road fatalities. This system addresses that risk directly by ensuring pedestrians are informed before crossing high-traffic areas, and by providing the data infrastructure that could support future predictive models for autonomous safety applications.

# RESULTS

The project delivered satisfactory partial results: the hardware prototype functioned as intended and the dashboard was successfully integrated with the data pipeline. The predictive algorithm, however, was not completed due to time constraints. Ultrasonic sensor accuracy also proved limiting in real-world conditions, and the team was advised to consider computer vision-based vehicle detection as a more robust alternative for future iterations.
