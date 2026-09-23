---
title: "My First Blog Post"
date: "2026-09-22"
description: "What I learned while building my developer website."
tags:
  - React
  - TypeScript
  - Web Development
---

# First Post

## 2026-09-22

This is the first entry of my engineering journal.

I want to document all the cool and interesting things I learn so I can look back at my progress.
It will also help hold me accountable so I keep learning and can contribute everyday.
I was inspired by another blog from [Andrew Healey](https://healeycodes.com/) who was inspired by [Mu-An Chiou](https://muan.co/) to create this. As well as how to execute it using markdown.

### How this was made

It was actually trickier than I thought. First I needed a way to render markdown into HTML elements. React has a popular option [react-markdown](https://github.com/remarkjs/react-markdown), but a few features like lists and block quotes required an extra plugin. So instead I am using [markdown-to-jsx](https://github.com/quantizor/markdown-to-jsx). Currently the markdown is all styled using Github's markdown css library.

The next feature I wanted was the ability to share a code block. So I needed a way to make code blocks highlighted by color. Which is where a syntax highlighter light [highlight.js](https://highlightjs.org/) comes in. Below is a beautiful example of how this will look.

```python
# 160. Intersection of two linked lists
def getIntersectionNode(
        self, headA: ListNode, headB: ListNode
    ) -> Optional[ListNode]:
        # combine the two lists. a + b will have equal lengths as b + a. Therefore the nodes will sync up
        # we can exit when either the two curr nodes are the same. Either the same node or both reached the end null

        list_a, list_b = headA, headB
        while list_a != list_b:
            list_a = list_a.next if list_a else headB
            list_b = list_b.next if list_b else headA
        return list_a
```

I've created a new directory folder for posts so to add a new post, I just add a new markdown file.\
The next things I need to add:

- [ ] A way to read all the posts from the folder
- [ ] Separate the posts in a chronological order
- [ ] Styling that doesn't look like GitHub
- [ ] Make use of markdowns frontmatter
