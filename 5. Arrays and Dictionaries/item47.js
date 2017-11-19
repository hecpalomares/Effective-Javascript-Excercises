//	Never add enumerable Properties to Object.prototype
Object.prototype.allKeys = function() {
	let result = [];
	for(var key in this) {
		result.push(key);
	}
	return result;
};

let obj = {a: 1, b:2, c:3};
console.log(obj.allKeys());	//a, b, c, allKeys

//	Consider a function allKeys () rather than a Object.prototype method
function allKeys(obj) {
	let result = [];
	for(var key in this) {
		result.push(key);
	}
	return result;
}

//	ES5 Object.defineProperty method. Define a property along with metadata attributes
Object.defineProperty(Object.prototype, "allKeysDef", {
	value: function() {
		let result = [];
			for(var key in this) {
			result.push(key);
		}
		return result;
	},
	writable: true,
	enumerable: false,	// dont show property on for...in loops (nonenumerable)
	configurable: true
});

console.log(obj.allKeysDef());	//a, b, c, allKeys