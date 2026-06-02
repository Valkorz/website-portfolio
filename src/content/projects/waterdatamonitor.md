---
projectName: "waterDataMonitor"
githubPage: "https://github.com/Valkorz/water-data-monitor"
supported: true
title: "Water Data Monitor"
description: "A project developed and presented in FACENS during two instances of UPX (2024). The main goal was to develop a sustainable system capable of measuring and monitoring water levels and variation on self-contained systems or rivers."
version: "1.1.0"
author: "Valkorz (Vittorio Pivarci)"
contributors: ["Luisenbon", "MuriloCoelho1212", "brenoorem"]
tags: ["Arduino", "HTML", "CSS", "C#", "Javascript", "API", "SQLite", "Entity Framework", "C/C++"]
dateOfCreation: 2024-06-04
thumbnail: "./images/upxproj1.png"
screenshots:
    - "./images/upxproj1.png"
    - "./images/upxproj2.png"
    - "./images/upxproj3.png"
    - "./images/upxproj4.png"
    - "./images/upxproj5.png"
    - "./images/upxproj6.png"
    - "./images/upxproj7.png"
    - "./images/upxproj8.png"
    - "./images/upxproj9.png"
---

# INTRODUCTION

Water Data Monitor is a system developed and presented at FACENS across two UPX project cycles (2024). The project addresses the recurring flood risk near the Sorocaba river by implementing a sensor-based data collection system that monitors water level variations in real time, alerts residents upon detection of critical thresholds, and provides a data foundation for future predictive flood modeling.

# IMPLEMENTATION

The system employs a resistive water level sensor mounted at the monitoring site, interfaced with an Arduino board for real-time readings. Collected data — including water level, time of day, and seasonal context — is transmitted to a .NET Core API backed by an SQLite database managed through Entity Framework. A web-based dashboard built in HTML, CSS, and JavaScript renders the stored data in an accessible format for public and administrative use.

# RELEVANCE

The Sorocaba river, which runs alongside Dom Aguirre Avenue, is prone to overflow during periods of heavy rainfall — causing significant traffic disruption and increasing road accident risk. A reliable, low-cost monitoring and early-warning system for this type of recurring hazard has direct public safety implications, and the data infrastructure developed in this project lays the groundwork for a fully automated predictive alert network.

# RESULTS

The core system infrastructure — sensor integration, database storage, and dashboard visualization — was successfully implemented and demonstrated. The AI-based predictive model was not completed within the project timeline. Future iterations should replace the resistive sensor with a buoyancy-based alternative to accommodate wider measurement ranges, and complete the machine learning pipeline to enable automated overflow probability forecasting.
