//	Constructors new-Agnostic
function User(name, passwordHash) {
	this.name = name;
	this.passwordHash = passwordHash;
}

//	By forgeting the 'new' keyword, the functions receivers becomes a global object
var u = User('Hector', '5b9e29e1b161e5c1fa7425e73043362938b9824');

//	Using use strict enviroment, will fail without 'new'
function UserStrict(name, passwordHash) {
	"use strict";
	this.name = name;
	this.passwordHash = passwordHash;
}

var uStrict = UserStrict('Andrew', 'a7425e7304336293b161e5c18b98245b9e29e1f');	// error: this is undefined

//	Making a constructor agnostic even to the caller syntax apply method
//	Using Object.create takes a prototype object and inherits from it (only ES5)
function User(name, passwordHash) {
	var self = this instanceof User ? this : Object.create(User.prototype);
	self.name = name;
	self.passwordHash = passwordHash;
	return self;
}

