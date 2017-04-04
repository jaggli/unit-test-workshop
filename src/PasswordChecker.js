const hasAlphanumeric = /[a-z]/i
const hasNumber = /[0-9]/
class PasswordChecker {
  check (pwd) {
    return (
      pwd.length > 7 &&
      hasAlphanumeric.test(pwd) &&
      hasNumber.test(pwd)
    )
  } 
}

export default PasswordChecker