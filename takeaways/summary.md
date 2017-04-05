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

### The cost of testing
- Total coverage of end to end testing is not possible, because it's to expensive
- Distribution of unit tests, functional testing, integration tests and user acceptance tests should align as a pyramid
- Unit tests are **cheap and fast**
- Manual user tests are **expensive and slow**
```
                   /  \
                 /      \   -   -   -   -   -   -   -
               /   usert  \                           Expensive and very slow
             /--------------\   -   -   -   -   -   -
           /   integration    \                       Moderate priced and slow
         /----------------------\   -   -   -   -   - 
       /    Functional testing    \                   Pretty cheap and fast
     /------------------------------\   -   -   -   -  
   /           Unit Testing           \               Very cheap and very fast
 /______________________________________\   -   -   -
```
- Testing code (methods, classes) = **Unit tests**
- Testing something with dependencies (e.g. GUI, DB) = **Functional testing**
- Integration and user testing is not done by developers

## Pair programming

- Two devs code on the same machine.
  - One is typing (driver)
  - One is reviewing each line of code (navigator)
  - Frequent role switching (<30min)
- Teacher/Student is not a good pair (nor are Puppet/Master, Worker/Sleeper and two hero competitors)

## Refactoring and code Smells
- The code works but has flaws (smells) so we have to refactor it
- List of [JS smells](http://elijahmanor.com/javascript-smells/)

### Comments
- If you need a **comment** to explain your code, it's a smell
- Good code is self explanatory
- Generator comments are ok
- Use functions instead of comments, even if they're only used once, locally

### Duplicated code
- Doing the same thing slightly different and copy the code, this is duplicated code

## Write testable code

### Dependency injection and dependency reversion
If your code depends on non-controllable objects (like Date, setInterval...)
