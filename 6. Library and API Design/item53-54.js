//	Item 53: Mantain Consistent Conventions
//	Don't deviate from Universal conventions.
//	Clockwise parameters, width then height, setDetails, getTimeline, etc.

//	Item 54: Undefined as "No Value"
var x;
console.log(x);	// undefined

var obj = {};
console.log(obj.x); // undefined

function f() {
	return;
}

function g() {}

console.log(f()); // undefined
console.log(g()); // undefined

function h(x) {
	return x;
}

console.log(h());	// undefined

//	Javascript used 'undefined' to fill the void of 'no value'