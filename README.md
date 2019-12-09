# QA Frontend Intro

## Task
Each of the following helper functions has one or more bugs in their implementation.

- `countPages(itemCount, itemsPerPage)` from `numbers.js` accepts a non-negative integer `itemCount` and a positive integer `itemsPerPage` and returns the number of pages that `itemCount` items would require to display, assuming every page can display a maximum of `itemsPerPage` items. Example: if `itemCount === 18` and `itemsPerPage === 5`, the function should return `4` (as 3 pages can display no more than 15 items, but 4 pages can display as many as 20).

- `generateDistinct(nums)` from `numbers.js` accepts an array of numbers as its single parameter and returns an arbitrary number that this array does not include. Example: `generateDistinct([2, 1, 5]) === 4` would be fine, as 4 is distinct from 2, 1, and 5.

- `generateLarger(nums)` from `numbers.js` accepts a non-empty array of numbers as its single parameter and returns an arbitrary number that is larger than any number in the array. Example: `generateLarger([2, 1, 5]) === 8` would be fine, as 8 is larger than 2, 1, and 5.

- `generateSmaller(nums)` from `numbers.js` accepts a non-empty array of numbers as its single parameter and returns an arbitrary number that is smaller than any number in the array. Example: `generateSmaller([2, 1, 5]) === 0` would be fine, as 0 is smaller than 2, 1, and 5.

- `generateRandomInt(from, to)` from `numbers.js` returns a random integer between `from` and `to`, inclusive. As this method returns random values, make sure to call it not once but several times with each combination of parameters.

- `generateRandomTime()` from `strings.js` returns a random time string between `'00:00'` and `'23:59'`. It depends on `generateRandomInt`, but also has a bug of its own.

- `parseYear(year)` from `strings.js` accepts a string as its only parameter and interprets it as a year: 4-character numeral strings are taken to mean the year itself; 2-character numeral strings are taken to mean a 1900s year; other strings will throw an error. Examples: `parseYear('9876') === 9876`; `parseYear('53') === 1953`; `parseYear('12345')` and `parseYear('two thousand')` should both throw an error.

- `createStampedObject(object)` from `objects.js` accepts an object as its single parameter and returns an object which has all of `object`’s contents and additionally a field called `stamped` set to `true`. The function is not supposed to mutate the initial `object`.

- `stampObject(object)` from `objects.js` accepts an object as its single parameter, mutates it by setting its `stamped` property to `true` and returns this object.

- `getOwnProperty(object, property)` from `objects.js` returns the own value of the `property` that the `object` has. Examples: if `object === {hello: 'world', __proto__: {foo: 'bar'}}`, then `getOwnProperty(object, 'hello')` is `'world'`, while `getOwnProperty(object, 'foo')` is `undefined`.

- `findItem(items, id)` from `arrays.js` accepts an array of items, each of which should be an object that contains an `id` field, and and `id` to search for. It returns the first item with this `id` or `null` if no items have such `id`. Examples: if `items === [{name: 'Foo', id: 5}, {name: 'Bar', id: 8}]`, then `findItem(items, 8)` is `{name: 'Bar', id: 8}`, while `findItem(items, 6)` is `null`.

- `makeArray(...)` from `arrays.js` accepts any number of parameters and transforms them into an array. Example: `makeArray(2, 1, 5, 'foo')` is `[2, 1, 5, 'foo']`.

Your **task** is:

1. Without looking at the actual implementations, create unit tests that would fully cover all use cases for the function you’re testing. Apart from where it is stated otherwise, you don’t need to test how a function will react to an invalid input.
1. Run the tests, make sure that they indeed fail, and verify that it’s a problem in the helpers’ code, not in tests. If some of the helpers pass every test, try hard to come up with some more edge cases and repeat this step.
1. Fix the problems in the helpers’ code and run the tests again. Make sure that they now all pass.

## Workflow
- Fork the repository with this task.
- Clone forked repository:
    ```bash
    git clone git@github.com:<user_name>/<task_repository>.git
    ```
- Run `npm install` to install dependencies.
- Work on the task.

## Development mode
- Use the `npm test` command to run the tests that you have created. You would not need to run `npm start` for this task.
- Follow [the simplified JS styleguide](https://mate-academy.github.io/style-guides/javascript-standard-modified).
- Before committing, use `npm run lint` to check your code for any styling issues.
- Commit and push.
- Create `Pull Request` from the forked repo to the original one.
- Add the link to the pull request to your Google spreadsheet.

In this task, you will only be working with the `src/helpers` folder.
