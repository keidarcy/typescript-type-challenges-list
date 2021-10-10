---
sidebar_position: 1
slug: /
---

# Intro

What is Type Challenges? **Type Challenges** is a collection of typescript type system puzzles.
> This project is aimed at helping you better understand how the type system works, writing your own utilities, or just having fun with the challenges. We are also trying to form a community that you can ask questions and get answers you have faced in the real world - they may become part of the challenges!

View the original [github repository](https://github.com/type-challenges/type-challenges) for more information.

## Why built this

I always forget how I solved these puzzles, but when I try to figure out how, it's hard to find by **Type Challenges** UI.

**Type Challenges** depends on github repository pages which makes hard to jump between different sites.

So I build this site collect all actions of challenge into one place, provides at least one solution and extra type information without navigate to other places.

Start with the `Hello World` example.

## Hello World

### Introduction

export const questionNumber = '13';

```twoslash include helper
/* _____________ Helper Types _____________ */
type Expect<T extends true> = T;
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
  ? true
  : false;
// - type
```

```twoslash include test
/* _____________ Test Cases _____________ */
type cases = [
  Expect<Equal<HelloWorld, string>>
]

// - case
```

Hello, World!

In Type Challenges, we use the type system itself to do the assertion.

For this challenge, you will need to change the following code to make the tests pass (no type check errors).

```ts
// expected to be string
type HelloWorld = any;
```

:::note

Go back to the original **Type Challenges** puzzle start page.
<span className="badge-links">
  <a className="view" target="\_blank" href={`https://tsch.js.org/${questionNumber}`}>
    View on GitHub
  </a>
</span>

:::

### Start point

```ts twoslash
// @include: helper
// ---cut---
/* _____________ Your Code Here _____________ */
type HelloWorld = any; // expected to be a string
//    ^?

// @errors: 2344
// @include: test
```

:::note

Go to the **Type Challenges** typescript playground page.
<span className="badge-links">
  <a
    className="challenge"
    target="\_blank"
    href={`https://tsch.js.org/${questionNumber}/play`}
  >
    take the challenge
  </a>
</span>

:::

:::tip

this site build with [`shiki-twoslash`](https://github.com/shikijs/twoslash)
> in which markdown code samples are powered by the syntax engine of visual studio code mixed with the typescript compiler’s information

<details>

<summary>code snippets show type information like this</summary>

```ts twoslash
// @include: helper
// ---cut---
/* _____________ Your Code Here _____________ */
type HelloWorld = any; // expected to be a string
//    ^?

// @errors: 2344
// @include: test
```

</details>

:::


### my solutions

<details>

<summary>Spoiler warning // Click to reveal answer</summary>

```ts twoslash
// @include: helper

// @include: test

/* _____________ Answer Here _____________ */
/// ---cut---
type HelloWorld = string;
```

</details>

:::note

Go to the **Type Challenges** issues to share your answer and other community answers.
<span className="badge-links">
  <a
    className="share"
    target="\_blank"
    href={`https://tsch.js.org/${questionNumber}/answer`}
  >
    share your answer
  </a>
  <a
    className="solution"
    target="\_blank"
    href={`https://tsch.js.org/${questionNumber}/solutions`}
  >
    view more solutions
  </a>
</span>

:::
