var perfectSquare = Math.sqrt(age); 

if (age < 0 ){
	console.log("Sorry, incorrect negative age.")
}
else if (age < 18) {
    console.log("Sorry, you are not old enough to enter the venue");
} 
else if (age === 21)  {
	console.log("Happy 21st Birthday!");
}
else if (age < 21) {
    console.log("You can enter, but cannot drink");
}
else if (age % 2 !== 0) {
	console.log("Your age is odd.");
}
else if ( perfectSquare * perfectSquare === age ){
	console.log("Perfect square");
}
else {
	console.log("Come on in. You can drink");
}
