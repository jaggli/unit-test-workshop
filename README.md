# unit-test-workshop

This is a boilerplate project for frontend unit testing

## Prerequisites
Setup your machine accordingly
- [nodejs](https://nodejs.org/en/) >6.0.0
- [npm](https://nodejs.org/en/) >3.0.0
- [yarn](https://yarnpkg.com/en/) >0.20.0

## Installation
1. Download or clone this repository and `cd` into that directory
1. run `yarn` to install all packages

## Testing
1. Run `yarn test-all` to run the test suite interactively.
1. While the test suite is running, all files named `*.test.js` recursively inside the `./src/` directory are executed on each change made to a file.
1. If everything went right, you should see something like this:
  ```
 PASS  src/hiker.test.js
  answer
    ✓ to life the universe and everything (3ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.946s
Ran all test suites.

Watch Usage
 › Press o to only run tests related to changed files.
 › Press p to filter by a filename regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.

  ```