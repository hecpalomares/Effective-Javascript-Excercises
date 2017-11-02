//	Difference function, method and constructor calls

//	Function: Calls hello function and binds name to a parameter
function hello(name) {
	return `Hello ${name} (Function)`;
}

console.log(hello('Hector'));	//Hello Hector

//	Method: Object properties that happens to be functions
let obj = {
	hello: function() {
		return "Hello " + this.name + " (Method)";
	},
	name: 'Hector'
};

console.log(obj.hello());

//	Method: Call expression bind of 'this'.
let obj2 = {
	hello: obj.hello,
	name: "Andrew"
}

console.log(obj2.hello());

//	Constructor: Called with 'new'. Pass a brand new object as the value of this. Returns a new object
//	primary function is to initialize the object.
function User(name, password) {
	this.name = name;
	this.password = password;
}

let me = new User('Hector', 'mySecret123$');
console.log(me.name);
console.log(me.password);