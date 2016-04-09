//the most annoying site in the world 

var answer = prompt("Are we there yet?");

/*if (answer === "yes"){
	alert("We made it!");
}else {
	var answer = prompt("Are we there yet?");
}*/

// while (answer !== "yes" && answer !== "ya") {
//     var answer = prompt("Are we there yet?")
// }

// alert("YAY! WE MADE IT!!");


while (answer.indexOf("yes") == -1 && answer.indexOf("ya") == -1) {
    var answer = prompt("Are we there yet?")
}

alert("YAY! WE MADE IT!!");