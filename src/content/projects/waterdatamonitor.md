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

The main goal of the project was to develop a system capable of reading, storing and analyzing the change of water level in rivers, with the main goal to alert an incoming overflow.

# RELEVANCY

This project becomes relevant when tackling the overflow issue present in the Sorocaba river that passes beside the Dom Aguirre avenue. This phenomenon is very common during heavy rainfall, which causes increased transit and road accidents. The ability to predict if an overflow is likely to occur can help drivers find different travel paths, avoiding the possibility of being stuck in traffic.

# THE SOLUTION

The proposed solution is to implement a sensor (resistive or buoyant) to measure water levels routinely. Collect all data that may be deemed necessary (month of year, time of day, rain density, temperature and water level variation throughout the day). The collected data is used to train an AI model to calculate the probability of an overflow, with weights based on data of past overflow occurences. The results would be stored on a dedicated database and freely viewable on an online dashboard. The occurence of an overflow would also prompt an alert to be broadcasted through SMS.

# RESULTS

The project has been partially achieved, such that: the structure is complete, the dashboard is designed and functional and the database stores the appropriate values. The AI model was not finished due to time constraints.

# WHAT CAN BE IMPROVED

To fully achieve the established goal and increase the efficiency of the project, the AI model needs to be finished and the resistive sensor needs to be replaced for a buyoancy sensor, due to space constrants (the measuring space of a resistive sensor is too small).