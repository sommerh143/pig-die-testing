export function Player(score, temp_score, playerNum) {
  this.score = score,
  this.temp_score = temp_score,
  this.playerNum = playerNum
}

Player.prototype.Turn = function (x) {
  if (x === 1) {
    this.temp_score = 0;
    return 0;
  } else {
    this.temp_score += x;
    return this.temp_score;
  }
  // if (x !== 1) {
  //   this.temp_score += x;
  // } else {
  //   this.temp_score = 0;
  //   this.playerNum = this.Switch();
  // }
  // return this.temp_score;
};

Player.prototype.Hold = function () {
  this.score += this.temp_score;
  return this.score; 
};

Player.prototype.Switch = function () {

  if (this.playerNum === 1) {
    return 0;
  } else {
    return 1;
  }
};

Player.prototype.checkRoll = function () {
  return this.temp_score;
};