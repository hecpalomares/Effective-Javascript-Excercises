//	eval create local variables, runs in the local scope of the caller
var y = "global";

function test(x) {
	if(x) {
		eval("var y = 'local';");	//dynamic binding
	}
	return y;
}

console.log(test(true));	// local
console.log(test(false));	// false

//	wrap the call in a nested function to avoid scope pollution
var y = "global";

function testAvoidScopePollution(src) {
	(function() {
		eval(src);
	})();
	return y;
}

console.log(testAvoidScopePollution("var y = 'local';"));	// local
console.log(testAvoidScopePollution("var z = 'local';"));	// local