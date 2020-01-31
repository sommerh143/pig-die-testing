function Player (score,temp_score, tempArray) {
  this.score = score,
  this.temp_score = temp_score
  this.tempArray = tempArray
}

function CurrentPlayer (user){
  this.user1 = 1,
  this.user2 = 0
}

CurrentPlayer.prototype.Switch = function(){
  
  if (currentplayer.user1 === 1){
    currentplayer.user1 = 0;
  } else {
    currentplayer.user1 = 1 ;
  }
}


Player.prototype.Turn = function(){

  var x = (Math.floor(Math.random()*6) +1);
  if (x !== 1) {
    console.log("this is x: ", x)
    this.temp_score += x;
    total += this.temp_score;
    console.log(total)
    // sum.push(this.temp_score);
  } else {
    this.temp_score = 0;
    currentplayer.Switch();
    // currentplayer.user1 = 0;

  }
  // return this.temp_score
  return total
}

Player.prototype.Hold = function() {
      this.tempArray.push(this.temp_score)
      console.log(this.tempArray);
      currentplayer.Switch();

      return this.score;
}

var sum = [];
var sum2 = [];
var total = 0;
var total2 = 0;
var playerOne = new Player(0, 0, []);
var playerTwo = new Player(0, 0, []);
var currentplayer = new CurrentPlayer(1);


$(document).ready(function(){
  $("#game").submit(function(event){
    event.preventDefault();
      var player1 = $("input#player-one").val();
      var player2 = $("input#player-two").val();
      console.log(player1 + ", " + player2)
      $("#output1").text(player1).show();
      $("#output2").text(player2).show();
  });

  $("#roll").click(function() {
    if  (currentplayer.user1 === 1){
      var roll1 = playerOne.Turn();
      $("#scoreOut").text(""+ roll1);
    } else {
      var roll2 = playerTwo.Turn();
      $("#scoreOut2").text(""+ roll2);  
    }
  });


  $("#hold").click(function() {
    if  (currentplayer.user1 === 1){
      var roll1 = playerOne.Hold();
      // for(var i = 0; i < sum.length; i++){
        // total += sum[i];
        // console.log(sum)
        if (total >= 100){
          alert("You Win")
        }
      }
      console.log(playerOne.tempArray)
    $("#scoreTotal1").text(""+ playerOne.tempArray[playerOne.tempArray.length-1]);
    } else {
      playerTwo.Hold();
      // for(var i = 0; i < sum2.length; i++){
        // score2 += sum2[i];
        // console.log(score2)
        // if (total >= 100){
        //   alert("You Win")
        // }
      // }
      console.log(playerOne.tempArray)
      // $("#scoreTotal2").text(""+ playerTwo.tempArray[playerTwo.tempArray.length-1]); 
      $("#scoreTotal2").text(total) 
    }
  });

  // $("#roll").click(function() {
  //   // if  (currentplayer.user1 === 1){
  //     var roll1 = playerOne.Turn();
  //     $("#scoreOut").text(""+ roll1);
  //     $("#roll").hide();
  //     $("#hold").hide();
  // });
});
