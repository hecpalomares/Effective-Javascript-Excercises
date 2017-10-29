//	Block local function declaration
function f() { return "global"; }

//	Nest a function declaration inside another function
function test(x) {
	function f() { return "local"; }

	let result = [];

	if(x) {
		result.push(f());
	}

	result.push(f());
	return result;
}

console.log(test(true));
console.log(test(false));

//	Keep function declarations outermost level to portable function
//	Use variable declarations with conditional assignement instead of conditional function declarations
function portableFunction(x) {
	function f() { return "local"; }

	let g = f, result = [];

	if(x) {
		g = function() { return "local"; }
		result.push(g());
	}

	result.push(g());
	return result;
}

console.log(portableFunction(true));
console.log(portableFunction(false));