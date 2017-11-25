//	Reusing Generic Array Methods
//	Extracting method objects and using their call method (line 5)
//	Any object can be used with generic Array methods if has indexed properties and appropiate length property (line 11)
function highlight() {
	[].forEach.call(arguments, function(widget) {
		widget.setBackground("yellow");
	});
}

//	NodeList class is an array-like object. Get by Document.xyz
let arrayLike = {0: "a", 1: "b", 2: "c", length: 3};
let result = Array.prototype.map.call(arrayLike, function(s) {
	return s.toUpperCase();
});

console.log(result);	// A, B, C

