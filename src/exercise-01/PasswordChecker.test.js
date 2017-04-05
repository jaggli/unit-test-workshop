import PasswordChecker from './PasswordChecker'

const checker = new PasswordChecker()

describe('password', () => {
  it('to be at least 7 characters', () => {
    expect(checker.check('asdf123')).toEqual(false)
    expect(checker.check('asdf1234')).toEqual(true)
  })
  it('to have at least one alphabetic character', () => {
    expect(checker.check('12345678')).toEqual(false)
    expect(checker.check('asdf1234')).toEqual(true)
  })
  it('to have at least one digit character', () => {
    expect(checker.check('asdfasdf')).toEqual(false)
    expect(checker.check('asdf1234')).toEqual(true)
  })
})
