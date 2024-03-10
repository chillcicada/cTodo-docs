# Principle

> Many of the code principles will be automatically adhered to by eslint and husky and so on, so you don't need to worry about them. But it's very recommended for you to have read and familiarized yourself with these principles in advance.

## cTodo

Use `css` not `scss` or `less`

Explain: cTodo haven't decided the final framework for the web extension, for migration, we use `css` only. Due to the framework used in this project not being finalized yet, for the convenience of migration, please refrain from using style sheet formats such as sass, less, scss, and stylus.

> Well, this is a recommendation, not a rule. If you have a good reason to use them, you can use scss.

Refrain from using `export default` in `ts` files, expect for `vue` files.

Top level function should be declared via `function` instead of arrow function, but inner function is recommended to be declared via arrow function instead of `function`.

For example:

```ts
function foo() { // recommended and required by eslint
  const bar = () => { // recommended
    // do something
  }
  function baz() { // not recommended
    // do something
  }
}
```
