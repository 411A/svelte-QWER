---
title: Example
description: Getting started writing with 🚀 QWER - an Awesome Blog Starter, Built using Svelte with ❤
summary: 📝 Showcase basic syntax of Markdown and HTML
published: 2022-08-08
cover: ./cover.jpg
coverCaption: Photo by <a href="https://unsplash.com/@etiennegirardet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Etienne Girardet</a> on <a href="https://unsplash.com/s/photos/motivation?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
tags:
  - Language: English
  - Tech Stack: [Markdown]
  - [QWER]
---

## Headings

## H2

### H3

#### H4

##### H5

###### H6

## Bold

This is **bold text**.

## Italic

This is _italicized text_.

## Blockquote

> Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero's 1st-century BC text De Finibus Bonorum et Malorum.

## Ordered List

1. First item
2. Second item
3. Third item

## Unordered List

- First item
- Second item
- Third item

### Checkbox List (ul)

- [ ] List Item 1 unchecked
- [x] List Item 2 checked
- [x] List Item 3 checked

## Inline Code

`console.log("Hello World");`

## Horizontal Rule

---

## Link

[Back to Homepage](/)

## Footnotes

Here is a footnote reference. [^1]

This is a long note. [^longnote]

## Image

![Example1](./example1.jpg)

<ImgZ src="/example/example1.jpg" alt="Example1" class="h-full object-cover">
Photo by <a href="https://unsplash.com/@willy24?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ioana Tabarcea</a> on <a href="https://unsplash.com/s/photos/morning?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
</ImgZ>

## Paragraphs

**Lorem Ipsum** dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

**_The_** _quick_ <u>brown</u> [fox](https://www.foxnews.com/) `jumps` ~~over~~ the lazy **dog**.

## Table

| Table Header 1 | Table Header 2 | Table Header 3 |
| -------------- | -------------- | -------------- |
| Division 1     | Division 2     | Division 3     |
| Division 1     | Division 2     | Division 3     |
| Division 1     | Division 2     | Division 3     |

| Table Header 1 | Table Header 2 | Table Header 3 |
| :------------- | :------------: | -------------: |
| Division 1     |   Division 2   |     Division 3 |
| Division 1     |   Division 2   |     Division 3 |
| Division 1     |   Division 2   |     Division 3 |

## Code Block

```ts
/// title: examples/index.ts
for (let x in [0]) console.log(x);
```

```ts
/// showLineNumber
/// diff
/// title: typescript-helloworld.ts
/// hlLines: 2,3-5
class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
};

+ var greeter = new Greeter("Hello, Ministry of Programming!");
+ var str = greeter.greet();
- console.log("Test");
```

---

[^1]: Here is the footnote. [↩](#fnref:1)

[^longnote]: Here’s one footnote with longer identifier. [↩](#fnref:longnote)
