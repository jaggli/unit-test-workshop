import PasswordChecker from './PasswordChecker'

const hasSpecialChar = /[@#\$%\^\&*\)\(+=._-]/
const lastIsSpecialOrDigit = /[0-9@#\$%\^\&*\)\(+=._-]$/

class AdminPasswordChecker extends PasswordChecker {
  check (pwd) {
    return (
      super.check(pwd) &&
      pwd.length > 10 &&
      hasSpecialChar.test(pwd) &&
      lastIsSpecialOrDigit.test(pwd)
    )
  }
}

export default AdminPasswordChecker
