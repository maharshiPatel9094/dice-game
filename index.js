// crating a variable for the random number using random function
// math.floor function will round up to int value
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

// craeting a variable for selecting the random image number
let randomDiceImage = "dice" + randomNumber1 + ".png";

// this var store the random image addresses
// images/dice1.png to images/dice6.png
// we created this because our dice images are in the src attribute
let randomImageSource = "images/" + randomDiceImage;

// here we need to change both images so we used queryselectorall
// so if we open player-1 image will change when we refresh
let image1 = document.querySelectorAll("img")[0];
// here we set attribute
// first is the one we want to cahnge 
// second is one we want to change to
image1.setAttribute("src" , randomImageSource);
               // player-1 ends here

               // player-2 starts here
// same thing we will do with the player-2 image 
// by multiplying with 6 it will select no from 0.0-5.999
// adding 1 means 6.9999
// adding math.floor function means rounding upto the integer value
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// now we will select random dice number
// we can also do same thing as above or we can directly create random image src
let randomDiceImage2 = "dice" + randomNumber2 + ".png";

let randomImageSource2 = "images/" + randomDiceImage2;

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" ,randomImageSource2);


// adding if condition for win

if (randomNumber1 > randomNumber2){
document.querySelector("h1").innerHTML = "🚩 Player-1 Wins";
}

else if(randomNumber2 > randomNumber1){
document.querySelector("h1").innerHTML = "Player-2 Wins  🚩";    
}

else{
document.querySelector("h1").innerHTML =  "Draw";   
}