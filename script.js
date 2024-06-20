document.addEventListener("keydown", function (event) {
  playGame(event.key);
});
document.getElementById("button").addEventListener("click", function(event)
{
  var press = this.innerHTML;
  playGame(press);
});
  function playGame(key) {
    var player1Score = Math.random();
    player1Score = player1Score * 6;
    player1Score = Math.floor(player1Score + 1); // because dice cannot be zero
    console.log(player1Score);
    var player2Score = Math.random();
    player2Score = player2Score * 6;
    player2Score = Math.floor(player2Score + 1); // because dice cannot be zero
    console.log(player2Score);
    var image1 = document.getElementById("img1");
    var image2 = document.getElementById("img2");
    if (player1Score == 1) {
      image1.src = "images/dice1.png";
    } else if (player1Score == 2) {
      image1.src = "images/dice2.png";
    } else if (player1Score == 3) {
      image1.src = "images/dice3.png";
    } else if (player1Score == 4) {
      image1.src = "images/dice4.png";
    } else if (player1Score == 5) {
      image1.src = "images/dice5.png";
    } else if (player1Score == 6) {
      image1.src = "images/dice6.png";
    }

    if (player2Score == 1) {
      image2.src = "images/dice1.png";
    } else if (player2Score == 2) {
      image2.src = "images/dice2.png";
    } else if (player2Score == 3) {
      image2.src = "images/dice3.png";
    } else if (player2Score == 4) {
      image2.src = "images/dice4.png";
    } else if (player2Score == 5) {
      image2.src = "images/dice5.png";
    } else if (player2Score == 6) {
      image2.src = "images/dice6.png";
    }

    var whoWins = document.querySelector("h1").innerHTML;

    if (player1Score > player2Score) {
      document.querySelector("h1").innerHTML = "Player 1 Wins";
    } else if (player1Score < player2Score) {
      document.querySelector("h1").innerHTML = "Player 2 Wins";
    } else {
      document.querySelector("h1").innerHTML = "Match is a Tie";
    }
    console.log(whoWins);
  }
document.getElementById("button").addEventListener("click", function(event)
{
  playGame();
});
