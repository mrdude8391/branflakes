---
title: "ASP NET Web API"
date: "2026-10-23"
description: "Things I learned building a ASP.NET web API"
tags:
  - Web Development
  - Projects
  - Backend
---

Good Medium article about it. [Article](https://medium.com/@bhargavkoya56/building-reliable-and-scalable-asp-net-core-web-apis-the-conceptual-guide-458d600e987b)

### Dependency Injection (DI)

C# or .NET likes to use dependency injection to manage object life-cycles and dependencies. Say a controller requires a service. Instead of the controller class creating a new instance of the service, the service is created by some other container and then the service object is given to the controller.

#### What is Dependency Injection?

Imagine you’re building a car. Instead of manufacturing the engine, transmission, and wheels yourself, you order them from specialized factories. Dependency Injection (DI) works similarly instead of creating objects directly, you request them from a centralized container. -Medium Article

#### Why Do We Need It?

DI solves the problem of tight coupling and makes your code testable. Without DI, your classes create their own dependencies, making it impossible to substitute mock objects during testing.

### Middleware Pipeline

### OOP Structure

```c#
using System; // Using directive

namespace MyNamespace // Namespace declaration
{
    // Access modifier, class keyword, and class name
    public class Person
    {
        // 1. Fields (state / backing data)
        private string name;

        // 2. Properties (controlled access to fields)
        public string Name
        {
            get { return name; }
            set { name = value; }
        }

        // 3. Constructor (initializes the object)
        public Person(string initialName)
        {
            name = initialName;
        }

        // 4. Methods (behavior / actions)
        public void Introduce()
        {
            Console.WriteLine($"Hello, my name is {Name}.");
        }
    }
}

```

## Creating the Backend

### 1. Setup Folder Structure

```
job-helper-api/
├── Controllers/
├── Data/
├── Features/
├── Entities/
├── Middleware/
├── Program.cs
├── appsettings.json
└── job-helper-api.csproj
```

### 2.1 Configure Entity Framework Core & Create AppDbContext

EF core is the ORM for .NET. npgsql is the provider that lets EF core talk to PostgreSQL. EF core uses LINQ to instead of SQL for database operations.

Create an AppDbContext Class that inherits from the DbContext class, which will represent a session with our database.

Then register the AppDbContext class as our DbContext service that uses Npgsql. We also need to provide it the connection string. Connection string is provided using dotnet's user-secrets.

```c#
using JobHelper.Api.Entities;
using Microsoft.EntityFrameworkCore;

namespace JobHelper.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(
        DbContextOptions<AppDbContext> options
    ) : base(options)
    {
    }
    public DbSet<User> Users => Set<User>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.ApplyConfigurationsFromAssembly(typeof(AppDbContext).Assembly);
    }
}
```

### 3. Create User Entity

```c#
namespace JobHelper.Api.Entities;

public class User
{
    public Guid Id { get; set; }
    public string Email { get; set; } = string.Empty;
    public string PasswordHash { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
}
```

After creating the user class for our user entity, we need to map the class to the database context so that EF core knows that this class represents a database table.

```c#
// AppDbContext.cs
public DbSet<User> Users => Set<User>();
```

We add this line to AppDbContext.

4. Create First EF Core Migration
5. Implement Authentication
6. Implement JobApplications
7. Add Testing and Error Handling
