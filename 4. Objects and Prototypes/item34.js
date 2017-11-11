//	Store Methods on Prototypes
function User(name, passwordHash) {
	this.name = name;
	this.passwordHash = passwordHash;
	
	this.toString = function() {
		return `[User ${this.name}]`;
	};

	this.checkPassword = function() {
		return this.passwordHash;
	};
}

//	Each instance contains a copy of both mehods, six functions! (Use more memory)
let u1 = new User('hectorp', '12367mz');
let u2 = new User('andrewl', 'yu267io');
let u3 = new User('michealt', '3xxv67f');

//	Prefer to sore methods on prototypes over storing them on instance objects
//	Prototypes lookups are so optimized, that is not difference to access them directly.

//	Adding methods to the prototype, shared across any instance and looked at them via lookup
User.prototype.nameUppercase = function() {
	return (this.name).toUpperCase();
};

User.prototype.splitName = function() {
	return (this.name).split('');
};

console.log(u1.nameUppercase());
console.log(u2.splitName());