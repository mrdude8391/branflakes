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

Dependency injection goes hand in hand with the middleware pipeline. In this framework, dependencies are created using the `builder.Services.AddX()` functions. Essentially it's a list of recipes of objects the app might need, and its lifecycle (scoped, singleton, transient). For example after creating a `DbContext` dependency, anytime the app requires the `DbContext` the framework will provide it through its DI Container.

#### What is Dependency Injection?

Imagine you’re building a car. Instead of manufacturing the engine, transmission, and wheels yourself, you order them from specialized factories. Dependency Injection (DI) works similarly instead of creating objects directly, you request them from a centralized container. -Medium Article

#### Why Do We Need It?

DI solves the problem of tight coupling and makes your code testable. Without DI, your classes create their own dependencies, making it impossible to substitute mock objects during testing.

### Middleware Pipeline

The middleware pipeline is defined in .NET in the `Program.cs` file typically in the form of `app.UseX()` functions. The are implemented in order so for example the `GlobalExceptionHandler` will be registered first and then Http implemention after and so on.

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

### 2 Configure Entity Framework Core & Create AppDbContext

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

We then need to add a configuration for entities so that EF Core understands how the table works.

```c#
// */data/UserConfiguration.cs
using JobHelper.Api.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JobHelper.Api.Data.Configurations;

public class UserConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> entity)
    {
        entity.ToTable("users");

        entity.HasKey(u => u.Id);

        entity.Property(u => u.Id)
            .HasColumnName("id")
            .HasDefaultValueSql("gen_random_uuid()");

        entity.Property(u => u.Email)
            .HasColumnName("email")
            .HasMaxLength(255)
            .IsRequired();

        entity.HasIndex(u => u.Email)
            .IsUnique();

        entity.Property(u => u.PasswordHash)
            .HasColumnName("passwordhash")
            .HasMaxLength(255)
            .IsRequired();

        entity.Property(u => u.CreatedAt)
            .HasColumnName("createdAt")
            .HasColumnType("timestamp with time zone")
            .HasDefaultValueSql("NOW()");
    }
}
```

### 4. Create First EF Core Migration

EF Core provides CLI tools to let you manage Database Migrations.

```
Command	                    Purpose
dotnet ef migrations add	Generate a migration from model changes
dotnet ef database update	Apply migrations to your database
dotnet ef migrations list	List migrations in your project
```

Install the tool

```powershell
dotnet tool install --global dotnet-ef
```

EF Core to inspect your entities and generate migration instructions.

```powershell
dotnet ef migrations add InitialCreate
```

Then run

```powershell
dotnet ef database update
```

If the tables already exist we need to create a database baseline.

```powershell
dotnet ef migrations add InitialBaseline
```

Which creates 3 migration files.

```
File	                        Responsibility
InitialBaseline.cs	            Contains the database operations for this migration.
InitialBaseline.Designer.cs	    Contains migration metadata and the model at that point.
AppDbContextModelSnapshot.cs	Stores EF Core's latest known model structure for comparing future changes.
```

For a baseline we remove everything it the `Up()` and `Down()` so that when the migration runs, it doesn't modify the database since the tables already exist. Just make sure the entity, schema, and config match up with the PostgreSQL schema.

Once the migration file is ready we run:

```powershell
dotnet ef database update
```

EF core will execute the `Up()` method which for a baseline file will be empty, and then create it's migration history table.

Now in the future if you need to add a new column to a table:

1. Update the Entity
2. Update the config.
3. Generate migration
4. Inspect the migration file.
5. Apply the migration.

### 5. Implement Authentication

### 6. Implement JobApplications

### 7. Add Testing and Error Handling
