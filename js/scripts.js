function Player (score,roll) {
  this.score = score,
  this.roll = roll
}

// Player.prototype.score = function(){
//   rtest
// }

Player.prototype.Roll = function(){
  // $("#roll").click(function(){
  var roll = (Math.floor(Math.random()*6) +1);
  if (roll === 1) {
    alert("player2 turn");
    roll = 0;
    return roll;
    
  } else 
    return roll;
  
}

Player.prototype.Hold = function() {
  for (var i = 0; i < this.roll.length; i++) {
    this.score += this.roll[i];
    //this.score = this.score + roll[i]
  }
  return this.score;
}



var playerOne = new Player(0, []);
var playerTwo = new Player(0, []);

$(document).ready(function(){
  $("#game").submit(function(event){
    event.preventDefault();
      var player1 = $("input#player-one").val();
      var player2 = $("input#player-two").val();
      console.log(player1 + ", " + player2)
      // $("#output1").text(player1).show();
      // $("#output2").text(player2).show();
  });

  $("#roll").click(function() {
    // console.log(playerOne);
    var roll1 = playerOne.Roll();
    // console.log(die);
    // var re = [];
    playerOne.roll.push(roll1);
    // console.log(roll);
    $("#scoreOut").append(roll1 + ", ");



    // playerOne.rolls();
    // if (playerOne.rolls() === 1){
    //   console.log("stop");
    // }
  });
  $("#hold").click(function() {
    // console.log(playerOne);
    var hold1 = playerOne.Hold();
    // console.log(die);
    // var re = [];
    // playerOne.roll.push(hold1);
    // console.log(roll);
    $("#scoreOut2").text(hold1);



    // playerOne.rolls();
    // if (playerOne.rolls() === 1){
    //   console.log("stop");
    // }
  });

});
