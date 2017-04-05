import Alarm from '../exercise-03/Alarm'

class TextSpammer {
  constructor (seconds, message, stopAfter, log, outerInterval) {
    this.seconds = seconds
    this.message = message
    this.log = log
    this.ticks = 0
    this.maxTicks = seconds * stopAfter
    this.innerInterval = (fn, time) => {
      outerInterval(fn, time, this)
    }
  }
  start () {
    if (!this.seconds) {
      return this.log(this.message)
    }
    this.alarm = new Alarm(this.seconds, this.innerInterval)
  }
  tick () {
    if (this.ticks % this.seconds === 0) {
      this.log(this.message)
    }
    this.ticks++
    if (this.maxTicks > this.ticks) {
      this.start()
    }
  }
}

export default TextSpammer
