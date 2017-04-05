class Alarm {
  constructor (
    seconds,
    interval = window.setInterval,
    clear = window.clearInterval
  ) {
    this.expired = !seconds
    this.ticks = 0
    this.intervalId = interval(() => {
      this.ticks += 1
      if (this.ticks >= seconds) {
        this.expired = true
      }
    }, 1000, this.isExpired())
  }
  isExpired () {
    return this.expired
  }
}

export default Alarm
