---
title: "Job Helper API DTOs and Validation"
date: "2026-11-05"
description: "Creating DTOs, Setup FluentValidation package, Creating Validation Filters"
tags:
  - Web Development
  - Projects
  - Backend
  - dotnet
---

## What are DTOs (Data Transfer Objects)

## Validators

### FluentValidation Package

[Fluent Validation Docs](https://docs.fluentvalidation.net/en/latest/index.html)

Find the assembly containing RegisterRequestValidator, scan it for FluentValidation validator classes, and register them with dependency injection. 

```c#
builder.Services.AddValidatorsFromAssemblyContaining<RegisterRequestValidator>();
```

### Data Annotations

[dotnet docs](https://learn.microsoft.com/en-us/aspnet/web-api/overview/formats-and-model-binding/model-validation-in-aspnet-web-api)

## Validation Filters

The big picture: when the filter runs

```
HTTP request with JSON body
   │
   ▼
1. Routing: "POST /api/auth/register → AuthController.Register"
   │
   ▼
2. Model binding: JSON  →  new UserRegisterRequest("bad", "123", "123")
   │
   ▼
3. ★ ValidationFilter.OnActionExecutionAsync(context, next) ★
   │      ├─ invalid → write a 400 response, STOP (the controller never runs)
   │      └─ valid   → call next()
   ▼
4. AuthController.Register(request) runs
```

Think of IValidator<> as a form with a blank: “Validator for ____.” MakeGenericType writes UserRegisterRequest in the blank. This is reflection: code that works with types as values at runtime.

### dotnet Filters

[dotnet Filter docs](https://learn.microsoft.com/en-us/aspnet/core/mvc/controllers/filters?view=aspnetcore-10.0)
