//problem set for: Reverse array, Uniform array, sum of array
//And max values in array

printReverse([1, 3, 4, 6, 8, 10])
printReverse(["a", "b", "c", "d"])

//prints the reverse of an array 
function printReverse(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

console.log(isUniform([1, 1]))
console.log(isUniform([2, 1, 1, 1, 1]))
console.log(isUniform(["a", "a", "b"]))
console.log(isUniform(["a", "b", "c"]))
console.log(isUniform(["a", "b", "c"]))


//identifies if the array is all uniform 
function isUniform(array) {
    for (var i = 0; i < array.length; i++) {
        if (i + 1 < array.length) {
            if (array[i] != array[i + 1]) {
                return false;
            }
        }
    }
    return true;
}

console.log(sumArray([]))
console.log(sumArray([1, 2, 3, 4, 5])) //sum: 15 
console.log(sumArray([-10, 1, 2, -20])) //sum: -27
console.log(sumArray([1.5, 1])) //sum: 2.5

function sumArray(array) {
    var sum = 0;
    if (array.length === 0)
        return sum;
    for (var i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}

console.log("Max: " + max(["a","b","c"]))
console.log("Max: " + max([]))
console.log("Max: " + max([1,2,3,5])) //max: 5
console.log("Max: " + max([5,4,3,2,1])) //max: 5
console.log("Max: " + max([34,5,789,6.7])) //max: 789
console.log("Max: " + max([34,-5,789,-6.7])) //789
console.log("Max: " + max([-10, -5, -9, -15, 0])) //0

function max(array){
	var areWeMax; 
	//could also sort the values 
	//could also check the type in the array 
	if (array.length === 0){
		//gentle on the user 
		console.log("Empty array: nothing to sum.")
		return;
	}

	areWeMax = array[0];
	for(var i = 0; i < array.length; i++){
		if(isNaN(array[i])){
			console.log("Can't sum max of non numbers");
			return; 
		}
		if(areWeMax < array[i]){
			areWeMax = array[i];
		}
	} 

	return areWeMax; 
}


console.log(maxSort([1,2,3,4,5]))
console.log(maxSort([1,3,4,-3,5]))

function compareNumbers(a, b)
{
    return a - b;
}

function maxSort(array){
	var areWeMax = array.sort();
	console.log("Max" + areWeMax);
	return areWeMax[array.length-1];
}





