window.onload = function playDice() {

    var playerOneDice = (Math.floor(Math.random() * 6) + 1);
    var playerTwoDice = (Math.floor(Math.random() * 6) + 1);

    if (playerOneDice == 1) {
        document.querySelector(".img1").src = "images/dice1.png";
    } else if (playerOneDice == 2) {
        document.querySelector(".img1").src = "images/dice2.png";
    } else if (playerOneDice == 3) {
        document.querySelector(".img1").src = "images/dice3.png";
    } else if (playerOneDice == 4) {
        document.querySelector(".img1").src = "images/dice4.png";
    } else if (playerOneDice == 5) {
        document.querySelector(".img1").src = "images/dice5.png";
    } else {
        document.querySelector(".img1").src = "images/dice6.png";
    }

    console.log(playerOneDice);

    if (playerTwoDice == 1) {
        document.querySelector(".img2").src = "images/dice1.png";
    } else if (playerTwoDice == 2) {
        document.querySelector(".img2").src = "images/dice2.png";
    } else if (playerTwoDice == 3) {
        document.querySelector(".img2").src = "images/dice3.png";
    } else if (playerTwoDice == 4) {
        document.querySelector(".img2").src = "images/dice4.png";
    } else if (playerTwoDice == 5) {
        document.querySelector(".img2").src = "images/dice5.png";
    } else {
        document.querySelector(".img2").src = "images/dice6.png";
    }

    console.log(playerTwoDice);

    if (playerOneDice > playerTwoDice) {
        document.querySelector("h1").innerHTML = "Player One Wins!"
    } else if (playerOneDice < playerTwoDice) {
        document.querySelector("h1").innerHTML = "Player Two Wins!"
    } else {
        document.querySelector("h1").innerHTML = "Draw!"
    }

}
