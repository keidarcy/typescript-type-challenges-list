---
sidebar_position: 1
slug: /
---

# Intro

View **Type Challenges** in one place.

## Why I made this

**Type Challenges** is a great place to improve typescript type system.
But I always forget so I want a single place to jump to different part.
And I would write down my solution, that when I forget I just access here to find my solution.


Get started by **creating a new site**.

Read
Or **try Docusaurus immediately** with **[tsch.js](https://tsch.js.org/)**.

## Generate a new site

Generate a new Docusaurus site using the **classic template**:

```shell
npx @docusaurus/init@latest init my-website classic
```

## Hello World example

### Introduction

Hello, World!

In Type Challenges, we use the type system itself to do the assertion.

For this challenge, you will need to change the following code to make the tests pass (no type check errors).

```ts
// expected to be string
type HelloWorld = any;
```

```ts
// you should make this work
type test = Expect<Equal<HelloWorld, string>>;
```

### Start point

```ts
/* _____________ Your Code Here _____________ */

type HelloWorld = any; // expected to be a string

/* _____________ Test Cases _____________ */
import { Equal, Expect, NotAny } from '@type-challenges/utils';

type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];
```

<span className="badge-links">
  <a target="\_blank" href='https://tsch.js.org/13'>
    View on GitHub
  </a>
  <a target="\_blank" href='https://tsch.js.org/13/play'>
    take the challenge
  </a>
  <a target="\_blank" href='https://tsch.js.org/13/answer'>
    share
  </a>
  <a target="\_blank" href='https://tsch.js.org/13/solutions'>
    solutions
  </a>
</span>

### My solution

<details>

<summary>Spoiler warning // Click to reveal answer</summary>

```ts twoslash
type HelloWorld = string;
```

</details>
