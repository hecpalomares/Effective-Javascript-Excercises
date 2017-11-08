//	toString of Functions
//	JS Engines do not know accurate reflections of source codde via toString()
//	Do not expose the values of local variables in a closure
//	Avoid toString of Functions

let functionString = (function(x) {
	return x + 1;
}).toString();

console.log(functionString);	//	(function(x) { return x + 1; })


let functionString2 = (function(x) {
	return x + 1;
}).bind(16).toString();

console.log(functionString2);	//	function () { [native code] }

