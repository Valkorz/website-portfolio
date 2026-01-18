---
projectName: "vehicleTrafficAlertSystem"
githubPage: "https://github.com/murilogaarcia/API_Integra-o_SQLite-Esp"
supported: false
title: "Vehicle Traffic Alert System"
description: "A project developed and presented in FACENS during UPX (November 2025). The main goal was to develop an alert and data collection system for pedestrians in highly movimented highways."
version: "1.0.0"
author: "Valkorz"
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

The main goal of the project was to develop a system capable of collecting data and alerting pedestrians on the occurence of a speeding vehicle disrespecting (or not) traffic signs and signals. The data gathered would be used to train an adaptive algorithm to predict an average time interval where it is completely safe for the pedestrian to cross the highway, pinpoint "danger levels" for each part of the highway and understand the most active periods of each point. The project implements an online dashboard for viewing datapoints.

# RELEVANCY

This project becomes relevant when tackling the need to provide safety against traffic accidents, where pedestrians are the largest group of risk. This project ensures pedestrians will cross only when safest, and warn against speeding vehicles that disrespect signals.

# THE SOLUTION

The proposed solution is to implement a system capable of identifying vehicles in the moment of their passing, catalog the data and implement a sound and visual cues for the pedestrian. For the simulation prototype, ultrassonic sensors were used to poll the distance and speed of a passing vehicle in real time, and an OLED display was used to show alert symbols. A buzzer was used for sound cues.

# RESULTS

The project provided satisfactory results, however, due to time constraints it couldn't be finished in time. The prediction system was incomplete and needs readjustments. The ultrassonic sensors were problematic due to their high sensitivity, and the group was advised to instead implement computer vison algorithms to identify vehicles instead.