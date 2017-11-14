//	Null Prototypes to Prevent Prototype Pollution
//	ES5 -> Object.create(null) creates a prototype-free empty object
//	__proto__ older enviroments, never use it as a ket

// Pass simple null prototype argument
let nulledObject = Object.create(null);	

console.log(Object.getPrototypeOf(nulledObject) === null);