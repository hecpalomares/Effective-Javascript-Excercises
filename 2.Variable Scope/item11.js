/**Closures**/

// 1. Refer to variables defined outer scope
function makeSandwich() {
	let magicIngredient = "peanut butter";
	
	function make(filling) {
		return `${magicIngredient} and ${filling}`; 
	}

	return make("jelly");
}

console.log(makeSandwich());

// 	2. Functions can refer to variables defined outer functions 
//	-> even after those outer functions have returned (outlive the function)
function makeSandwich2() {
	let magicIngredient = "cheese";
	
	function make(filling) {
		return `${magicIngredient} and ${filling}`; 
	}

	return make;
}

let func = makeSandwich2();
console.log(func("ham"));
console.log(func("avocado"));
console.log(func("steak"));

function makeSandwich2FunctionExpression(magicIngredient) {
	return function(filling) {
		return `${magicIngredient} and ${filling}`; 
	}
}

// 3. Update values of outer variables
// Internally store references to their outer variables, to read and update them
function box() {
	let value = undefined;
	return {
		set: function(newVal) {
			value = newVal;
		},
		get: function() {
			return value;
		},
		type: function() {
			return typeof value;
		}
	};
}

let b = box();
console.log(b.type());	// undefined
b.set(89);							// set 89
console.log(b.get());		// get 89
console.log(b.type());	// number