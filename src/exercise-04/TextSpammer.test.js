import TextSpammer from './TextSpammer'

const getIntervalMock = (amount = 0) => (fn, timeout, spammer) => {
  let count = 0
  while (count < amount) {
    fn()
    count++
    spammer.tick()
  }
}

describe('print message', () => {
  let printedMessage = null
  const log = message => { printedMessage = message }
  const spammer = new TextSpammer(
    0, 'message text body', 0,
    log, getIntervalMock(0)
  )
  spammer.start()
  it('to print the message immediately for time 0', () => {
    expect(printedMessage).toEqual('message text body')
  })
})

describe('print message', () => {
  let printedMessages = []
  const log = message => { printedMessages.push(message) }
  const spammer = new TextSpammer(
    5, 'message text body', 10,
    log, getIntervalMock(5)
  )
  spammer.start()
  it('print the message every 5 seconds', () => {
    expect(printedMessages.length).toEqual(50)
  })
  it('log the correct message', () => {
    expect(printedMessages[49]).toEqual('message text body')
  })
})
