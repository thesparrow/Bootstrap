//array intialization 

var friends = []; //empty friend list 
var friends = new Array(); 

//holds any data
var random_collection  = [49, "49", "forty-nine"];

//lenght
var nums = [1,2,3,4,5];
console.log("Length of the array")
console.log(nums.length)

//removing elements from the array 
//shift 
var fruits = ['orange', 'grape', 'grapefruit', 'mango']
console.log(fruits)
var first = fruits.shift()
console.log("removing the first fruit: " + first)
console.log(fruits)

console.log("removing the last fruit: " + fruits.pop())
console.log(fruits)

//make the fruits plural 
fruits.forEach(function (name, index) {
	name = name + 's'
	console.log(name, index)
}); 