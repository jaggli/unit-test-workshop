const illegalCharacter = /[^IVXLCDM]/gi
const illegalRepetitions = /I{4}|V{4}|X{4}|L{4}|C{4}|D{4}/

const walk = (dict, str) => {
  if (!str) { return 0 }
  let total = 0
  let found = false
  dict.forEach(entry => {
    if (found || str.indexOf(entry.symbol) !== 0) { return }
    found = true
    total += entry.value + walk(dict, str.slice(entry.symbol.length))
  })
  if (total > 4000) {
    throw new Error('OutOfBounds')
  }
  return total
}

const moonwalk = (dict, num) => {
  if (!num) { return '' }
  let total = ''
  let found = false
  dict.forEach(entry => {
    if (found || num < entry.value) { return }
    found = true
    total += entry.symbol + moonwalk(dict, num - entry.value)
  })
  return total
}

class Translator {
  constructor (dict) { this.dict = dict }
  parse (str) {
    if (
      !str ||
      illegalCharacter.test(str) ||
      illegalRepetitions.test(str)
    ) { throw new Error('ParseError') }
    return walk(this.dict, str)
  }
  toString (num) {
    return moonwalk(this.dict, num)
  }
}

export default Translator
