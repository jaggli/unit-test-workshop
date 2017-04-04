## TDD micro cycle

![cycle](./tdd.gif)

- Write failing tests first, make as little code as possible to pass the test, refactor.
- The test code is usually double the size of the actual code, being tested
- Keep the coverage at 100%. 
- Each code file needs a test file
- Use the most precise assert method available (not always test for true or false)
- Unit tests are isolated 
  - no side effects
  - no defined order to run
  - no dependencies on each other
- Don't test the libraries (they need therir own tests)
- You're not allowed to write any production code, that's not helping to pass some unit test
- Don't write more than to pass the unit tests
- Don't do what you need in future, code for now
