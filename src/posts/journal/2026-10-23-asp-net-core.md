---
title: "ASP NET Web API"
date: "2026-10-23"
description: "Things I learned building a ASP.NET web API
tags:
  - Web Development
  - Projects
  - Backend
---

Good Medium article about it. [Article](https://medium.com/@bhargavkoya56/building-reliable-and-scalable-asp-net-core-web-apis-the-conceptual-guide-458d600e987b)

### Dependency Injection (DI)

C# or .NET likes to use dependency injection to manage object life-cycles and dependencies.

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
