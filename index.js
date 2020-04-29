
var player1 = prompt("Üdvözöllek első játékos! Mi a neved?");
document.querySelectorAll("p.player1").innerHTML = player1;

var player2 = prompt("Üdvözöllek második játékos! Mi a neved?");
document.querySelectorAll("p.player2").innerHTML = player2;



var x =document.querySelectorAll("p.player1");
x[0].firstChild.data=player1;


var y =document.querySelectorAll("p.player2");
y[0].firstChild.data=player2;



var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (player1 === "Dávid" || player1 === "dávid" || player1 === "Koós Dávid" ){
  document.querySelectorAll("img")[0].setAttribute("src", "images/david1.png");

document.querySelector("h1").innerHTML = "🚩 " + player1 + " Megszívtad!";
}

else if (player2 === "Dávid" || player2 === "dávid" || player2 === "Koós Dávid" ){
  document.querySelectorAll("img")[1].setAttribute("src", "images/david1.png");
  document.querySelector("h1").innerHTML = "🚩 " + player2 + " Megszívtad!";
}

else  if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 " + player1 + " Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = player2 + " Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
