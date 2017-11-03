//	Call method, call a function with a custom receiver
//	-> calling methods that may not exist on a giving object
//	-> call a method for defininf higher order functions

// methods that have been removed , modified or overriden
let dict = {};
let hasOwnProperty = {}.hasOwnProperty;
dict.foo = 1;
delete dict.hasOwnProperty;
console.log(hasOwnProperty.call(dict, "foo"));	// true
console.log(hasOwnProperty.call(dict, "hasOwnProperty"));	//false