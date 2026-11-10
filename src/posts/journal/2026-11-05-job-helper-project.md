---
title: "Job Helper Project"
date: "2026-11-05"
description: "Road map and overview of my job helper project"
tags:
  - Web Development
  - Projects
  - Frontend
  - Backend
---

## Phase 1. Planning and Database

### App requirements

The app will help a user keep track of job applications, and provide useful information.

#### List of Current workflow

1. Look for job on linkedin
2. read job description
3. apply to the job
   1. answer feeler questions
4. save info
   1. job description
   2. company name
   3. job title
   4. salary
   5. requirements
   6. date applied

#### What I want to keep track of that I can’t

1. Resume version
2. application status
3. resume gaps/matches
4. online interviews

### Define Relational Database Schema

The relational schema is visualized on tldraw. [Database Schema](https://www.tldraw.com/f/L8U9SbN5xKyCiXeI2sp8O?d=v-97.-68.1788.983.J-P-VAb2KEgJhnwCPzdze).

## Phase 2. Backend Foundation

### API and Database Setup

In phase 2, I started up and configured ASP.NET CORE web API and setup the PostgreSQL database using a docker container. The API was hooked up to the PostgreSQL instance using EF Core.

Added Naming convention to npgsql so that ef core so that EF Core entities and SQL columns align automatically. EF Core entities use PascalCase while SQL columns use snake_case.

### Project architecture

The API architecture was established using a feature-based architecture that separates API controllers, business logic, and data access. The key architecture is below.

```
Features/
├── Auth/
│   ├── AuthController.cs
│   ├── AuthService.cs
│   ├── DTOs/
│   └── Validators/
│
└── JobApplications/
    ├── JobApplicationsController.cs
    ├── JobApplicationService.cs
    ├── DTOs/
    └── Validators/

Data/
Entities/
Middleware/
Common/
Services/
```

### Database Migrations

Added ef core migrations tool to handle database migrations.

#### Error Handling

Create a global error handler that complies with [ProblemDetails (RFC 9457)](https://www.rfc-editor.org/info/rfc9457/).
Services report failures using custom exceptions.
Unhandled exceptions will be turned into `ProblemDetails` responses using an `IExceptionHandler`.

## Phase 3. Frontend Foundation

### Project Architecture

I also employed a feature-based project architecture for the React + TypeScript fronted.
