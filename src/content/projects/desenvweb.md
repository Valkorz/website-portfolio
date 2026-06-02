---
projectName: "desenvweb"
githubPage: "https://github.com/Vulpyra/desenv_web"
supported: true
title: "Renda Fácil"
description: "A personal finance application with an approachable user interface, and an AI assistant for tips and advice."
version: "2.0.0"
author: "Valkorz (Vittorio Pivarci)"
contributors: ["luisenbon", "GiGomieri05", "MuriloQuevedo", "GuiMLima"]
tags: ["Vue", "Javascript", "Web Application", "CSS", "Supabase"]
dateOfCreation: 2026-03-18
thumbnail: "./images/desenvweb1.png"
screenshots:
    - "./images/desenvweb1.png"
    - "./images/desenvweb2.png"
    - "./images/desenvweb3.png"
    - "./images/desenvweb4.png"
---

# INTRODUCTION

Renda Fácil is a personal finance web application developed as part of a Web Development course at FACENS. The platform targets users new to financial management, offering a minimalist interface designed to be approachable for newcomers seeking to improve their financial literacy. The application features comprehensible graphs, contextual tooltips for financial terminology, and an integrated AI assistant for personalized tips and guidance. User data is persisted through a Supabase backend and retrieved securely upon authentication.

# IMPLEMENTATION

The application is built with Vue.js, leveraging its component-based architecture for a modular and maintainable front-end. Supabase provides both database and authentication services, enabling secure user data storage and retrieval. The AI assistant is powered by a RAG-based local language model that uses the authenticated user's financial data as context to generate relevant, personalized responses.

# RELEVANCE

Financial literacy remains a critical gap for many individuals entering adulthood, particularly in markets with complex tax structures such as Brazil. By combining an accessible interface with AI-assisted guidance, Renda Fácil lowers the barrier to entry for personal finance management — demonstrating how modern web technologies and locally hosted AI models can be combined to deliver meaningful, privacy-conscious user experiences.
