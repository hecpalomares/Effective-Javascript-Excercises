//	arguments to create variadic functions
function average() {
	for(var i = 0, sum = 0, n = arguments.length; i < n; i++) {
		sum += arguments[i];
	}
	return sum / n;
}

console.log(average(1, 9, 2, 23, 6, 12));

function averageOfArray(a) {
	for(var i = 0, sum = 0, n = a.length; i < n; i++) {
		sum += a[i];
	}
	return sum / n;
}

console.log(averageOfArray([1, 9, 2, 23, 6, 12]));

//	provide a both a variable-arity and a fixed variability function for conveniance
//	easy with a small wrapper that delegates the fixed variablity
function average() {
	return averageOfArray(arguments);
}