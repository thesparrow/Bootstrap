//determines if element is true or false
function isEven(num){
	return num % 2 === 0;
}

//returns the factorial of a number 
//factorial does not work with negative numbers 
function factorial(num){
	if (num < 0){
		return -1; 
	}
	else if (num === 0 ){
		return 1; 
	}
	else 
		return (num * factorial(num - 1)); 
}


function kebabToSnake(str){
	var replace = str.replace("-", "_");
	return replace;
}