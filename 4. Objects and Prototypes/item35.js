//	Closures to Store Private Data
//	Use local variables as private data to enforce information hiding within methods
function User(name, passwordHash) {
	// Refer to name and passwordHash as variables, rather than properties of this.
	this.checkUsername = function() {
		return `[User ${name}]`;
	};

	this.checkPassword = function() {
		return `[Password ${passwordHash}]`;
	};
}

let u1 = new User('hector', 'password123');

console.log(u1.checkUsername(), u1.checkPassword());	//hector, password123
console.log(u1.name, u1.passwordHash);	//undefined, undefined