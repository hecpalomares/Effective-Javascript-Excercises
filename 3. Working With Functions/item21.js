//	Apply method: call variadic functions (functions that expect N number of arguments) with array of arguments
//	First argument is the receiber for variadic methods
let buffer = {
	state: [],
	// Append method can be called with n arguments
	append: function() {
		for(let i = 0, n = arguments.length; i < n; i++) {
			this.state.push(arguments[i]);
		}
	}
};

let firstName = "Hector";
let lastName = "Palomares";

buffer.append("Hello, ");
buffer.append(firstName + " " + lastName);
buffer.append("Goodbye");

console.log(buffer.state);