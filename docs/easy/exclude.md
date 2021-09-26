---
sidebar_label: 'Exclude'
sidebar_position: 8
---
# Exclude

## introduction

Implement the built-in Exclude<T, U>
> Exclude from T those types that are assignable to U


## start point

```ts
/* _____________ Your Code Here _____________ */

type MyExclude<T, U> = any


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<MyExclude<"a" | "b" | "c", "a">, Exclude<"a" | "b" | "c", "a">>>,
    Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, Exclude<"a" | "b" | "c", "a" | "b">>>,
    Expect<Equal<MyExclude<string | number | (() => void), Function>, Exclude<string | number | (() => void), Function>>>,
]
```

## my solution

<details>

  <summary>Spoiler warning // Click to reveal answer</summary>

```ts twoslash
type MyExclude<T, U> = T extends U ? never : T
```
</details>
