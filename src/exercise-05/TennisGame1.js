const dicts = {
  equal: {
    '0': 'Love-All',
    '1': 'Fifteen-All',
    '2': 'Thirty-All',
    '3': 'Deuce'
  },
  delta: {
    '-2': 'Win for player2',
    '-1': 'Advantage player2',
    '1': 'Advantage player1',
    '2': 'Win for player1'
  },
  score: {
    '0': 'Love',
    '1': 'Fifteen',
    '2': 'Thirty',
    '3': 'Forty'
  }
}

class TennisGame1 {
  constructor (player1Name, player2Name) {
    this.player1Score = 0
    this.player2Score = 0
    this.player1Name = player1Name
    this.player2Name = player2Name
  }

  wonPoint (playerName) {
    if (playerName === this.player1Name) {
      this.player1Score += 1
    } else {
      this.player2Score += 1
    }
  }

  getScore () {
    const delta = Math.min(2, Math.max(-2, this.player1Score - this.player2Score))
    if (delta === 0) {
      var maxScore = Math.min(this.player1Score, 3)
      return dicts.equal[maxScore]
    }
    if (this.player1Score >= 4 || this.player2Score >= 4) {
      return dicts.delta[delta]
    }
    return dicts.score[this.player1Score] + '-' + dicts.score[this.player2Score]
  }
}

if (typeof window === 'undefined') {
  module.exports = TennisGame1
}
