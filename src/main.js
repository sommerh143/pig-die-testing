import { Player } from './player';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

var total = 0;
var total2 = 0;
var playerOne = new Player(0, 0, 1);
var playerTwo = new Player(0, 0, 0);
var currentplayer = 1;


$(document).ready(function () {
  $("#game").submit(function (event) {
    event.preventDefault();
    var player1 = $("input#player-one").val();
    var player2 = $("input#player-two").val();
    $("#output1").text(player1).show();
    $("#output2").text(player2).show();
  });

  $("#roll").click(function () {
    var x = (Math.floor(Math.random() * 6) + 1);
    if (x === 1) {
      playerOne.temp_score = 0;
      playerTwo.temp_score = 0;
      if (currentplayer === 1) {
        currentplayer = 0;
      } else {
        currentplayer = 1;
      }
    } else if (currentplayer === 1) {
      var roll1 = playerOne.Turn(x);
      $("#scoreOut").text("" + roll1);
    } else {
      var roll2 = playerTwo.Turn(x);
      $("#scoreOut2").text("" + roll2);
    }
  });


  $("#hold").click(function () {
    if (currentplayer === 1) {
      total = playerOne.Hold();
      currentplayer = playerOne.Switch();
      if (total >= 100) {
        alert("You Win");
      }
      playerOne.temp_score = 0;
      $("#scoreTotal1").text("" + total);
    } else {
      total2 += playerTwo.Hold();
      currentplayer = playerTwo.Switch();
      if (total2 >= 100) {
        alert("You Win");
      }
      playerTwo.temp_score = 0;
      $("#scoreTotal2").text(total2);
    }
  });
});
