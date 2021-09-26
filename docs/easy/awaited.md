---
sidebar_label: 'Awaited'
sidebar_position: 9
---
# Exclude

## introduction

If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type? For example if we have `Promise<ExampleType>` how to get ExampleType?

> This question is ported from the [original article](https://dev.to/macsikora/advanced-typescript-exercises-question-1-45k4) by [@maciejsikora](https://github.com/maciejsikora)


## start point

```ts
/* _____________ Your Code Here _____________ */

type Awaited = any


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type X = Promise<string>
type Y = Promise<{ field: number }>

type cases = [
  Expect<Equal<Awaited<X>, string>>,
  Expect<Equal<Awaited<Y>, { field: number }>>,
]

// @ts-expect-error
type error = Awaited<number>
```

## my solution

<details>

  <summary>Spoiler warning // Click to reveal answer</summary>

```ts twoslash
type Awaited<T> = T extends Promise<infer P> ? P :never
```
</details>
