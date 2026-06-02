---
projectName: "pyscraper"
githubPage: "https://github.com/Valkorz/eshopping-price-scraper"
supported: false
title: "eshopping price scraper"
description: "An automated price aggregation tool that scrapes product listings from online storefronts, calculates a mean average price, and presents a structured price history to help users identify the best available offer."
version: "1.0.1"
author: "Valkorz (Vittorio Pivarci)"
contributors: []
tags: ["Open-Source", "Python", "Automation"]
dateOfCreation: 2025-01-01
thumbnail: "./images/pyscraper1.png"
screenshots:
    - "./images/pyscraper1.png"
    - "./images/pyscraper2.png"
---

> **Disclaimer:** This project is currently non-functional due to recent changes in Mercado Livre's scraping policy.

# INTRODUCTION

eshopping-price-scraper (PyScraper) is a prototype tool designed to automate the retrieval and comparison of product pricing from online storefronts. Its primary objective is to simplify cost estimation by querying multiple sources, calculating a mean average price adjusted for taxes and inflation, and presenting a structured price history — enabling users to quickly identify the most favorable available offer.

# IMPLEMENTATION

The prototype was implemented in Python using the BeautifulSoup library for HTML parsing and DOM traversal. The initial target storefront was Mercado Livre, a widely used Brazilian e-commerce platform selected for its permissive scraping policy at the time of development. The scraper navigates product listing pages, extracts relevant pricing data, and feeds it into a processing pipeline for normalization and aggregation.

# RELEVANCE

Price transparency remains a significant challenge in consumer e-commerce, particularly in markets with high price volatility or fragmented storefronts. Automated price aggregation tools reduce the manual effort required to compare offers across platforms, enabling more informed purchasing decisions and more efficient budget management.
