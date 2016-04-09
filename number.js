//save time to take care of the rest for us 
var i = 1; 
while (i < 6) {
    console.log("Count is: " + i);
    i++;
}

//loop through a string 
//watch out for infinite loops 

var str = "hello"
var count = 0;

while(count < str.length){
	console.log(str[count])
	count++; 
}