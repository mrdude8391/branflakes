---
title: "Node NPM custom scripts"
date: "2026-10-20"
description: "Simple custom script for CLI commands"
tags:
  - Web Development
  - Projects
---

npm scripts [docs](https://docs.npmjs.com/cli/v8/using-npm/scripts).

Now that I'm trying to deploy my sports app, I have to run a bunch of CLI commands for docker, and starting the app, or whatever. An easy solution I started using is custom scripts using `npm`. Although this isn't a perfect solution, it makes development a lot simpler.

You can define a `pre` and a `post` script to run before and after your actual script too and it is super helpful.

```json
{
  "name": "server",
  "version": "0.0.0",
  "scripts": {
    "preserver": "venv\\scripts\\activate && pip install -r requirements.txt -q",
    "server": "venv\\scripts\\activate && uvicorn src.main:app --reload",
    "pretest": "docker compose -f docker-compose.test.yml up -d",
    "test": "venv\\scripts\\activate && pytest",
    "posttest": "docker compose -f docker-compose.test.yml down"
  }
}
```
