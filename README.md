# vue-test-utils-issue-1963

Reproduction repository for issue [#1963](https://github.com/vuejs/vue-test-utils/issues/1963) for vue-test-utils.

Problem is: if `enableAutoDestroy(afterEach)` is enabled, all tests will fails after a single wrapper fails to destroy.

I reproduced it by forcing the `destroyed` component hook to throw an exception.

```bash
yarn test:unit

# All tests will fail
```

Now comment the first test ("component destroy fails")
And run the tests again.

```bash
yarn test:unit

# The last two tests are valid.
```

It's because the first test fails to destroy the wrapper that the rest of the test fails.

