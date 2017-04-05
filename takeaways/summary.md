# Workshop takeaways summary
Inserted a few interpretations, of what we learned.

## TDD micro cycle

![cycle](./tdd.gif)

[Exercise 01](/src/exercise-01/)

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
- **Don't code in unit tests**
  - Write the least amount of testing code possible
  - Repetitions are ok here. 
  - You're not producing anything directly valuable for the product, while you write code in tests, beside the tests itself.

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

[Exercise 02](/src/exercise-02/)

- Two devs code on the same machine.
  - One is typing (driver)
  - One is reviewing each line of code (navigator)
  - Frequent role switching (<30min)
- The role switching is key! Don't do sessions that exceed 30min
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

[Exercise 03](/src/exercise-03/)

### Dependency injection
- If your code depends on non-controllable objects (like Date, setInterval...) we have to mock/overload it
- The idea is to pass references in the constructor and use the system functions by default, if they're not specified
  ```js
  class Alarm {
    constructor (
      seconds,
      interval = window.setInterval  // <- system function overloading
    ) {
      // [...]
    }
  }
  ```

## S.O.L.I.D.
- The most important thing in SOLID are the [KISS](https://en.wikipedia.org/wiki/KISS_principle) and the [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) principles
  - Expert developers write simple code that does great things
- An other important one is also [YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it)
  - You aren't gonna need it
  - Design for now, now matters
- SOLID means
  - **S**ingle responsible principle
    - just because you can, doesn't mean you should
    - every class should have a single responibility
    - If you have two problems to solve, you need two classes
  - **O**pen Closed principle
    - Classes, modules and functions should be
      - *open* for extension
      - *closed* for modification -> private stays private
    - Use [composition instead of inheritance](https://en.wikipedia.org/wiki/Composition_over_inheritance)
    - 
