//reduce redundant code 
//do not repeat yourself

//create secret number 
var secretNumber = 4; 

//ask user for guess
var guess = Number(prompt("Guess a number"));
alert(guess);
//check guess 
if (guess === secretNumber){
	alert("YOU GOT IT RIGHT");
}
//otherwise check if higher 
else if (guess > secretNumber){
	alert("Too high, guess again")
}
//otherwise check if lower 
else {
	alert("Too low, guess agian!")
}