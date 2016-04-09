var count = 0;

console.log("Print all numbers between -10 and 9");
for (count = -10; count < 10 ; count++){
	console.log(count);
}

console.log("Print all even numbers between 10 and 40");
for (count = 10; count < 41 ; count+=2){
	console.log(count);
}

console.log("Print all odd numbers between 300 and 333");
for (count = 301; count < 334 ; count+=2){
	console.log(count);
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50")
for (count = 5; count < 51 ; count++){
	if(count % 3 === 0 && count % 5 == 0){
		console.log(count);
	}
}