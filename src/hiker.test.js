import { answer } from './hiker'

describe('answer', function () {
  it('to life the universe and everything', function () {
    expect(answer()).toEqual(42)
  })
})
