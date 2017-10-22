// Primitives >> Object Wrappers
function primitivesObjectWrappers() {
	let objectString = new String("Hello");
	let objectString2 = new String("Hello");
	
	let primitiveString = "World";

	console.log(typeof(objectString)); // Object
	console.log(typeof(primitiveString)); // String

	// Each string is a separate object, only equal to itself
	console.log(objectString === objectString2); // False
	console.log(objectString == objectString2); // False

	// No point in setting properties on primitives
	primitiveString.property = 12;
	console.log(primitiveString.property); // Undefined
}

primitivesObjectWrappers();