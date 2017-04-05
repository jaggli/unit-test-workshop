import Alarm from './Alarm'

describe('isExpired', () => {
  const clock = new Alarm(0)
  it('to be true for zero', () => {
    expect(clock.isExpired()).toEqual(true)
  })
})

describe('isExpired', () => {
  const clock = new Alarm(10)
  it('to be false for other than zero', () => {
    expect(clock.isExpired()).toEqual(false)
  })
})

describe('isExpired', () => {
  let count = 0
  const interval = (fn, timeout, expired) => {
    while (count < 10) {
      fn()
      it('to be false while running', () => {
        expect(expired).toEqual(false)
      })
      count++
    }
  }
  const clock = new Alarm(10, interval)

  it('to be true right after ten intervals', () => {
    expect(clock.isExpired()).toEqual(true)
  })
})
