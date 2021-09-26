---
sidebar_label: 'Unshift'
sidebar_position: 14
---

# Unshift

## introduction

Implement the type version of ```Array.unshift```

For example

```typescript
type Result = Unshift<[1, 2], 0> // [0, 1, 2,]
```

## start point

```ts
/* _____________ Your Code Here _____________ */

type Unshift<T, U> = any


/* _____________ Test Cases _____________ */
import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Unshift<[], 1>, [1]>>,
  Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2,]>>,
  Expect<Equal<Unshift<['1', 2, '3'],boolean>, [boolean, '1', 2, '3']>>,
]


```

## my solution

<details>

  <summary>Spoiler warning // Click to reveal answer</summary>

```ts twoslash
type Unshift<T, U> = T extends [...infer Rest] ? [U, ...Rest] : never
```
</details>
