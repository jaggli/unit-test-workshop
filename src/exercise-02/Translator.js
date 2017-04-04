const illegalCharacter = /[^IVXLCDM]/gi
const illegalRepetitions = /I{4}|V{4}|X{4}|L{4}|C{4}|D{4}/

const unifiedWalk = (dict, subject, ret, exitCheck, value, slice) => {
  if (!subject) { return ret }
  let found = false
  dict.forEach(entry => {
    if (found || exitCheck(subject, entry)) { return }
    found = true
    ret += value(entry) + unifiedWalk(
      dict, slice(subject, entry),
      ret, exitCheck, value, slice
    )
  })
  return ret
}

const walk = (dict, str) => unifiedWalk(
  dict, str, 0,
  (subject, entry) => subject.indexOf(entry.symbol) !== 0,
  entry => entry.value,
  (subject, entry) => subject.slice(entry.symbol.length)
)

const moonwalk = (dict, num) => unifiedWalk(
  dict, num, '',
  (subject, entry) => subject < entry.value,
  entry => entry.symbol,
  (subject, entry) => subject - entry.value
)

class Translator {
  constructor (dict) { this.dict = dict }
  parse (str) {
    if (
      !str ||
      illegalCharacter.test(str) ||
      illegalRepetitions.test(str)
    ) { throw new Error('ParseError') }
    const parsed = walk(this.dict, str)
    if (parsed > 4000) {
      throw new Error('OutOfBounds')
    }
    return parsed
  }
  toString (num) {
    return moonwalk(this.dict, num)
  }
}

export default Translator
