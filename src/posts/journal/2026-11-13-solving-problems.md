---
title: "How to solve problems"
date: "2026-11-13"
description: "A short framework for how I can make it easier for myself to solve problems."
tags:
  - Personal
  - LeetCode
---

A common issue that I have identified is that I often struggle in initially defining the problem, or understanding the problem. This can be said for both leetcode problems as well as for general coding during my projects. 

My idea is to break down problem solving so that it's easier for my brain and I can maybe just turn it into a habit. I used to be good at problem solving and pattern recognition but I feel like my brain is atrophying lmao. 

### 1. Describe what the program should do in plain english. 

I think I can start with writing down in a readme or something or just talking out loud exactly what the program is meant to do or what the component should do. 

### 2. Break down the program into pieces and find out where I don't know.

Once I know what the program should do I can probably break down how to get from point A to point B. For a leetcode problem this can be psuedocode or trying to visualize the code. I find that sometimes visualizing the code can be difficult but if I break it down step by step i think it should be easier. For a react component or backend function, I may have to be more abstract. But the process should still be the same. At the end of the day it's about taking inputs and turning it into an output. If I'm unsure how to complete a particular step I can do research on that step. 

### 3. Figure out what it is that I don't know. 

This ties in kind of to step 2. For LC if I don't know a kind of algorithm, or for full stack if I don't know how the syntax works, or how a library works. In this step it's about figuring out SPECIFICALLY what it is that I don't know. 

### 4. Define the problem explicitly and learn the vocabulary.

There are key words that are required when trying to research the problem. In an algorithm it'll be like 'binary search' or 'two pointers' in react it might be 'controlled input' or 'derived state'. Learning specific words that define patterns will be important in defining problems and communicating them to an AI or searching on the internet. 

### 5. Iterate and build the small thing first. 

For an LC problem it can be putting the algorithm's template in first. Or setting up the correct loops. For A react problem it can be starting with a simple state variable and getting an input wired up. Then growing it from there. 

### 6. Experiment instead of only reading.

Poke at the code ie. console.log everything: what is e.target.value? (It’s a string, not a number, which surprises a lot of people.). Change one thing and predict what will happen before you run it. When your prediction is wrong, that’s where you learn something. Hover over a variable in VS Code. TypeScript will tell you its type, which often answers your TS question for you. Read the error message slowly, all the way through. TS errors look scary but usually say exactly what’s wrong: “Type ‘string’ is not assignable to type ‘number’” means you’re passing a string where it wants a number.

### 7. Use resources in this order
1. The official docs: react.dev (the “Learn” section is excellent, and has a page on exactly this, “Reacting to Input with State”) and the TypeScript Handbook.
2. A search with the right vocabulary, from step 4.
3. AI, used as a tutor rather than a vending machine. Ask “explain why this works” or “what concept am I missing?” rather than just “write the form.” If you paste code without understanding it, you’ll get stuck again on the next form.
4. A timer. If you’ve been stuck 30–45 minutes with no progress, ask someone. Write the question out properly: what you’re trying to do, what you tried, and what happened. Half the time, writing it out solves it (“rubber duck debugging”).

### 8. Make it work, then make it nice

Your first version can be ugly: repeated code, everything in one component. Get it working, then clean it up, for example by turning a repeated input into a <StatInput> component. Trying to write clean code before you understand the problem is a common way to get stuck.

### 9. Write down what you learned

Keep a short note after each problem: “Inputs give strings, convert with Number().” “Use prev => when new state depends on old state.” This note becomes your own reference, and it’s how you get faster at this.