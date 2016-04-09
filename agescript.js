var age = prompt("How old are you?");
var totalDays = daysAlive(age); 

console.log("You have been alive for " + totalDays + " days"); 

/*
*	Determines the number of days since birth
* Take into account leap years
*	 @p1 {Number} of days 
*/
function daysAlive(p1){
	var days = age * 365.25;
	return (age + " years is roughly " + Math.floor(days) + " days");
}