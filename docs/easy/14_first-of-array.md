---
sidebar_label: 'First of Array'
sidebar_position: 14
---

# First of Array

## introduction

export const questionNumber = '14';

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
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
];
// - case
```

Implement a generic `First<T>` that takes an Array `T` and returns it's first element's type.

For example

```ts
type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
```

## start point

```ts twoslash
// @include: helper
// ---cut---
/* _____________ Your Code Here _____________ */
type First<T extends any[]> = any;

// @errors: 2344
// @include: test
```

## my solution

<details>

<summary>Spoiler warning // Click to reveal answer</summary>

```ts twoslash
// @include: helper

// @include: test

/* _____________ Answer Here _____________ */
/// ---cut---
// type First<T extends any[]> = T[number] extends never ? never : T[0]
// type First<T extends any[]> = T extends [infer F, ...infer L] ? F : never
type First<T extends any[]> = T extends [] ? never : T[0];
```

</details>

<span className="badge-links">
  <a
    className="share"
    target="\_blank"
    href={`https://tsch.js.org/${questionNumber}/answer`}
  >
    Share your Solutions
  </a>
  <a
    className="solution"
    target="\_blank"
    href={`https://tsch.js.org/${questionNumber}/solutions`}
  >
    Checkout more Solutions
  </a>
</span>
