---
sidebar_label: 'Hello World'
sidebar_position: 1
---
# Hello, World!

## introduction

Hello, World!

In Type Challenges, we use the type system itself to do the assertion.

For this challenge, you will need to change the following code to make the tests pass (no type check errors).

```ts
// expected to be string
type HelloWorld = any
```

```ts
// you should make this work
type test = Expect<Equal<HelloWorld, string>>
```

## start point

```ts
/* _____________ Your Code Here _____________ */

type HelloWorld = any // expected to be a string


/* _____________ Test Cases _____________ */
import { Equal, Expect, NotAny } from '@type-challenges/utils'

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>
]
```

## my solution

<details>

  <summary>Spoiler warning // Click to reveal answer</summary>

```ts twoslash
type HelloWorld = string
```

</details>
