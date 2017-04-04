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

## Pair programming

- Two devs code on the same machine.
  - One is typing (driver)
  - One is reviewing each line of code (navigator)
  - Frequent role switching (<30min)
