import Translator from './Translator'
import dict from './roman-dict'

const translator = new Translator(dict)

describe('parse', () => {
  // simple numbers
  it('to translate simple numbers 1', () => {
    expect(translator.parse('I'))
      .toEqual(1)
  })
  it('to translate simple numbers 2', () => {
    expect(translator.parse('II'))
      .toEqual(2)
  })
  it('to translate simple numbers 3', () => {
    expect(translator.parse('III'))
      .toEqual(3)
  })
  it('to translate simple numbers 4', () => {
    expect(translator.parse('IV'))
      .toEqual(4)
  })

  // errors
  it('to throw an error for too much repetition I', () => {
    expect(() => translator.parse('IIII'))
      .toThrow('ParseError')
  })
  it('to throw an error for too much repetition X', () => {
    expect(() => translator.parse('LXXXXCII'))
      .toThrow('ParseError')
  })
  it('to throw an error illegal characters', () => {
    expect(() => translator.parse('A'))
      .toThrow('ParseError')
  })
  it('to throw an error for empty string', () => {
    expect(() => translator.parse(''))
      .toThrow('ParseError')
  })
  it('to throw an error for numbers larger than 4000', () => {
    expect(() => translator.parse('MMMMI'))
      .toThrow('OutOfBounds')
  })

  // accept criteria
  it('to translate the number 1990', () => {
    expect(translator.parse('MCMXC'))
      .toEqual(1990)
  })
  it('to translate the number 2008', () => {
    expect(translator.parse('MMVIII'))
      .toEqual(2008)
  })
  it('to translate the number 99', () => {
    expect(translator.parse('XCIX'))
      .toEqual(99)
  })
  it('to translate the number 47', () => {
    expect(translator.parse('XLVII'))
      .toEqual(47)
  })

  // complex numbers
  it('to translate complex numbers 3003', () => {
    expect(translator.parse('MMMIII'))
      .toEqual(3003)
  })
  it('to translate complex numbers 744', () => {
    expect(translator.parse('DCCXLIV'))
      .toEqual(744)
  })
  it('to translate complex numbers 4000', () => {
    expect(translator.parse('MMMM'))
      .toEqual(4000)
  })
})

describe('parse', () => {
  it('to translate the number 1', () => {
    expect(translator.toString(1)).toEqual('I')
  })
  it('to translate the number 2', () => {
    expect(translator.toString(2)).toEqual('II')
  })
  it('to translate the number 3', () => {
    expect(translator.toString(3)).toEqual('III')
  })
  it('to translate the number 4', () => {
    expect(translator.toString(4)).toEqual('IV')
  })
  it('to translate the number 5', () => {
    expect(translator.toString(5)).toEqual('V')
  })
  it('to translate the number 1990', () => {
    expect(translator.toString(1990)).toEqual('MCMXC')
  })
  it('to translate the number 2008', () => {
    expect(translator.toString(2008)).toEqual('MMVIII')
  })
  it('to translate the number 99', () => {
    expect(translator.toString(99)).toEqual('XCIX')
  })
  it('to translate the number 47', () => {
    expect(translator.toString(47)).toEqual('XLVII')
  })
})
