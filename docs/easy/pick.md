---
sidebar_label: 'Pick'
sidebar_position: 2
tags: [union, build-in]
---

# Pick

## introduction

Implement the built-in `Pick<T, K>` generic without using it.

Constructs a type by picking the set of properties `K` from `T`

For example

```ts twoslash
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick<T, K> = any;

type TodoPreview = MyPick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};
```

## start point

```ts
/* _____________ Your Code Here _____________ */

type MyPick<T, K> = any;

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}
```

<Links questionNumber={'4'} />

## My solution

<details>

  <summary>Spoiler warning // Click to reveal answer</summary>

```ts twoslash
type MyPick<T, K extends keyof T> = {
  [Key in K]: T[Key];
};
```

</details>

export const Links = ({questionNumber}) => {
return (
<span className="badge-links">
<a target="\_blank" href={`https://tsch.js.org/${questionNumber}/play`}>take the challenge</a>
<a target="\_blank" href={`https://tsch.js.org/${questionNumber}/answer`}>share</a>
<a target="\_blank" href={`https://tsch.js.org/${questionNumber}/solutions`}>solutions</a>
</span>
)
}
