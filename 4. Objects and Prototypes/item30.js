//	prototype: standard using 'new' | Car.prototype
//	getPrototypeOf(obj): ES5 standard function | Object.getPrototypeOf(car)
//	__proto: nonstandard function prior ES5 | obj.__proto__
//	class is a design pattern: constructor function + associated prototype

// User constructor function
function User(name, passwordHash) {
	this.name = name;
	this.passwordHash = passwordHash;
}

// adding first methods to User: toString
User.prototype.toString = function() {
	return `[User ${this.name}]`;
};

// adding first methods to User: checkPassword
User.prototype.checkPassword = function(password) {
	return this.passwordHash;
}

var u = new User("hectorp", "2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824");

console.log(u.toString());
console.log(u.checkPassword());

console.log(Object.getPrototypeOf(u) === User.prototype);	//true

//	User is similar to a class. Constructor function (User) + Prototype Object
//	to share methods between instances of the 'class' (User.prototype)