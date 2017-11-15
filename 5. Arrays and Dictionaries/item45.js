//	hasOwnProperty: Protect against Prototype Pollution
let dict = {};

dict.hasOwnProperty("alice");	// false
dict.hasOwnProperty("toString");	// false
dict.hasOwnProperty("valueOf");	// false

// Protect property lookups against pollution
dict.hasOwnProperty("alice") ? dict.alice : undefined;
let x = "bob";
dict.hasOwnProperty(x) ? dict[x] : undefined;

dict.hasOwnProperty = 10;
//	dict.hasOwnProperty("alice"); //	error: dict.hasOwnProperty is not a function


//	Use lexical scope and call to protect against overriding the hasOwnProperty method
//	Local variable bound to the proper function
let hasOwn = {}.hasOwnProperty;

let dict2 = {};
dict2.alice = 28;

hasOwn.call(dict2, "hasOwnProperty");	// false
hasOwn.call(dict2, "alice");	// true

dict2.hasOwnProperty = 10;
hasOwn.call(dict2, "hasOwnProperty");	// true
hasOwn.call(dict2, "alice");	// true


//	Dictionary Class with operations that encapsulates the boilerplate of hasOwnProperty
function Dict(elements) {
	this.elements = elements || {};

	Dict.prototype.has = function(key) {
		return {}.hasOwnProperty.call(this.elements, key);
	};

	Dict.prototype.get = function(key) {
		return this.has(key) ? this.elements[key] : undefined;
	};

	Dict.prototype.set = function(key, val) {
		this.elements[key] = val;
	};

	Dict.prototype.remove = function(key) {
		delete this.elements[key];
	};

};

let dict3 = new Dict({
	alice: 31,
	bob: 55,
	carlos: 28
});

dict3.set("mike", 17);

console.log(dict3.has("alice"));
console.log(dict3.get("mike"));
console.log(dict3.has("valueOf"));