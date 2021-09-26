---
sidebar_label: 'Readonly'
sidebar_position: 3
---
# Readonly

## introduction

```ts twoslash
// @errors: 2304
interface Todo {
  title: string
  description: string
}

type MyReadonly<T> = any

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
```

## start point

```ts
/* _____________ Your Code Here _____________ */

type MyReadonly<T> = any


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}
```

## solution

<details>

  <summary>Spoiler warning // Click to reveal answer</summary>

```ts twoslash
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}
```
</details>
