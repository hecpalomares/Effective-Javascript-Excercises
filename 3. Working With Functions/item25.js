//	Bind to extract methods with a fixed receiver
let buffer = {
	entries: [],
	add: function(string) {
		this.entries.push(string);
	},
	concat: function() {
		return this.entries.join("");
	},
	empty: function() {
		this.entries.length = 0;
	}
};

let source = ["555", "-", "1234", "-", "5678"];
source.forEach(buffer.add, buffer);

buffer.concat();

console.log(buffer.concat());

buffer.empty();

//	Function objects with bind method that takes appropiate receiver object
//	produces wrapper function that calls the original function as a method of the receiver
let sourceBind = ["333", "-", "9876", "-", "5432"];
sourceBind.forEach(buffer.add.bind(buffer));
console.log(buffer.concat());