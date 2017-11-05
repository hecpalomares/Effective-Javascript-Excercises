//	arguments Object: never modify it, since it is not a real array
//	copy the arguments object to a real array with [].slice(arguments, 2);
function callMethod(obj, method) {
	let args = [].slice.call(arguments, 2);
	return obj[method].apply(obj, args);
}

let obj = {
	add: function(x, y) {
		return x + y;
	}
};

let sum = callMethod(obj, "add", 10, 25);
console.log(sum);