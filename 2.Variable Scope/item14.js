//	Unportable scoping of named function expressions

//	Named Function expression:
//	1. improve stack traces in Error objects and debuggers
let funcDouble = function double(x) { return x * 2; }

//	2. binds its name as a local variable to the function (recursion)
let f = function find(tree, key) {
	if(!tree) {
		return null;
	}
	
	if(tree.key === key) {
		return tree.value;
	}

	return find(tree.left, key) || find(tree.right, key);

}

//	3. use outer scope (recursion)
let fx = function find(tree, key) {
	if(!tree) {
		return null;
	}
	
	if(tree.key === key) {
		return tree.value;
	}

	return fx(tree.lefunctionOuterScopet, key) || fx(tree.right, key);

}

//	Anonymous function expression
let funcTriple = function (x) { return x * 3; }
