import AdminPasswordChecker from './AdminPasswordChecker'

const checker = new AdminPasswordChecker()

describe('admin password', () => {
  it('to be at least 11 characters', () => {
    expect(checker.check('asdf1234++')).toEqual(false)
    expect(checker.check('asdf1234+++')).toEqual(true)
  })
  it('to contain a special character', () => {
    expect(checker.check('asdf1234asdf')).toEqual(false)
    expect(checker.check('asdf1234++++')).toEqual(true)
  })
  it('the last character to be a digit or a special character', () => {
    expect(checker.check('++++1234asdf')).toEqual(false)
    expect(checker.check('asdf1234++++')).toEqual(true)
    expect(checker.check('addf++++1234')).toEqual(true)
  })
})
