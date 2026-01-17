---
projectName: "tasklistapi"
githubPage: "https://github.com/Valkorz/dotnet-tasklist-api"
supported: true
title: "Dotnet Tasklist API"
description: "WebApi tasklist sample project created with .Net Core MVC and Entity framework, containing instructions and documentation."
version: "1.2.0"
author: "Valkorz"
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

## .NET Core C# API + Database project

This project is a task/todo list, using dotnet core MVC and Entity Framework to implement a database of tasks (in SQLite) that can be modified through http protocol commands, featuring GET, POST, PUT and DELETE.


# FILES

`./docs/guide.md`: a comprehensive step-by-step guide to building your own .Net CORE WebApi.

`.docs/httpAttributes.md`: a list of http attributes to be used when defining methods for a controller.

`./Tasks/`: the WebApi folder.

`./Tasks/Program.cs`: root file of the api, used for initializing controllers and other resources.

`.Tasks/Controllers/`: where the custom controller implementations will be stored.

`./Requesters/`: code examples in different programming languages to communicate with the API.


# FEATURES

- A Controller that creates a database, with GET and POST methods;
- Two program examples for calling http requests (javascript and batch);
- Detailed documentation;