---
title: "Displaying Journal Entries"
date: "2026-09-23"
description: "What I learned trying to display these journal entries."
tags:
  - React
  - TypeScript
  - Web Development
---

All tasks from yesterday were completed.

> - [x] Styling that doesn't look like GitHub
> - [x] Make use of markdowns front matter
> - [x] A way to read all the posts from the folder
> - [x] Separate the posts in a chronological order

### CSS class override

I wanted to continue using the CSS styles from github's markdown stylesheet, but be able to make some changes. You override CSS classes using the `!important` flag. You just need to be careful to do this wisely because it can cause conflicts.

```css
/* global.css */
.markdown-body {
  background-color: var(--container) !important;
}
```

### Unsupported package debugging: First Github issue contribution

In order to parse the front matter from the .md file I used [gray-matter](https://github.com/jonschlinkert/gray-matter) which is able to convert a string with front matter into an object. Unfortunately, on first use the package returned an error `ReferenceError: Buffer is not defined`. This was because gray-matter is a Node.js package and uses Node's native `Buffer` API which is old and not included in modern front-end frameworks like Vite's build tools. So I looked for the issue on the github page and found that I could solve it by adding Node's core modules manually.

I was able to solve the issue and contributed to the Github Issue by uploading a comment about my solution. This was my first contribution to any Github project ever so it was pretty cool. [Issue #143](https://github.com/jonschlinkert/gray-matter/issues/143#issuecomment-5801165349).

Now I can parse the content and front matter directly from the `.md` file and display it in my journal component.

```json
{
  "content": "\nThis is content.",
  "data": {
    "title": "Front Matter"
  }
}
```

### Eager loading all journal.md files using Vite

Vite supports importing multiple modules from the file system using their `import.meta.glob()` function [(glob)](https://vite.dev/guide/features#glob-import) so I used that to import all the `.md` files. To import as `string` I had to use custom import options. I also want to load all the journal entries at the front so I also had to specify `eager` loading. The options were all in the docs.

```js
const journalGlobs = import.meta.glob("../../src/posts/journal/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});
```

Now I just simply parse all the journal entries with `gray-matter` and then display the content in my component.

### Sorting posts by most recent

My idea is to use the system's file system to my advantage since the files are all stored in alphabetical order, so if I name the files starting with the date when they are read they will already be in order. Then I just need to reverse the array to get my result.
