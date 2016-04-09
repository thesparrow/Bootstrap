//copy paste, copy paste baby 
//print all numbers between -10 and 19 
var count = -10;

console.log("print all numbers between -10 and 19");

while(count < 20){
	console.log(count);
	count ++; 
}

//print all even numbers between 10 and 40 
count = 10;
console.log("print all even numbers between 10 and 40 ");
while(count < 41){
	if(count % 2 === 0) {
		console.log(count);
	}
	count ++; 
}

//print all odd numbers between 300 and 333
count = 300; 
console.log("print all odd numbers between 300 and 333");
while(count <= 333){
	if(count % 2 !== 0) {
		console.log(count);
	}
	count++; 
}

//print all numbers divisable by 5 and 3 between 5 and 50 
count = 5; 
console.log("print all numbers divisable by 5 and 3 between 5 and 50");
while(count <= 50){
	if ((count % 3 === 0) && (count % 5 === 0)){
		console.log(count);
	}
	count++;
}
