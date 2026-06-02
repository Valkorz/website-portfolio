---
projectName: "tasklistapi"
githubPage: "https://github.com/Valkorz/dotnet-tasklist-api"
supported: true
title: "Dotnet Tasklist API"
description: "WebApi tasklist sample project created with .Net Core MVC and Entity framework, containing instructions and documentation."
version: "1.2.0"
author: "Valkorz (Vittorio Pivarci)"
contributors: []
tags: ["Open-Source", "Dotnet Core", "C#", "Entity Framework", "MVC", "API"]
dateOfCreation: 2025-01-01
thumbnail: "./images/tasklist2.png"
screenshots:
    - "./images/tasklist1.png"
    - "./images/tasklist2.png"
    - "./images/tasklist3.png"
    - "./images/tasklist4.png"
    - "./images/tasklist5.png"
---

# INTRODUCTION

Dotnet Tasklist API is a fully documented .NET Core Web API implementing a task management system backed by an SQLite database. Built using the MVC architecture and Entity Framework Core, the project exposes RESTful endpoints for creating, reading, updating, and deleting tasks via standard HTTP methods. It is accompanied by comprehensive written documentation and code examples intended to serve as a practical reference for developers learning .NET Web API development.

# IMPLEMENTATION

The project follows the .NET Core MVC pattern with Entity Framework Core managing database interactions through a code-first approach. Controllers define the API surface, exposing `GET`, `POST`, `PUT`, and `DELETE` endpoints. The repository includes:

- `docs/guide.md` — a step-by-step guide to building a .NET Core Web API from scratch.
- `docs/httpAttributes.md` — a reference of HTTP attributes for controller method definitions.
- `Requesters/` — working client examples in JavaScript and batch scripting for communicating with the API.

# RELEVANCE

RESTful APIs form the backbone of modern web services and distributed systems. This project serves as a concise, well-documented starting point for developers entering the .NET ecosystem, demonstrating how to structure a production-ready API with proper routing, data persistence, and multi-language client integration — all within a minimal and approachable codebase.
