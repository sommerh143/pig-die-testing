$(document).ready(function(){
    $("#game").submit(function(event){
    event.preventDefault();
        var player1 = $("input#player-one").val();
        var player2 = $("input#player-two").val();
        console.log(player1 + ", " + player2)
    
        $("#output1").text(player1).show();
        $("#output2").text(player2).show();
        
  
    });
});
