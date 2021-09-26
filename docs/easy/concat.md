---
sidebar_label: 'Concat'
sidebar_position: 11
---
# Exclude

## introduction

Implement the JavaScript `Array.concat` function in the type system. A type takes the two arguments. The output should be a new array that includes inputs in ltr order

For example

```ts
type Result = Concat<[1], [2]> // expected to be [1, 2]
```

## start point

```ts
/* _____________ Your Code Here _____________ */

type Concat<T, U> = any


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]

```

## my solution

<details>

  <summary>Spoiler warning // Click to reveal answer</summary>

```ts twoslash
type Concat<T extends any[], U extends any[]> = [...T, ...U]
```
</details>
