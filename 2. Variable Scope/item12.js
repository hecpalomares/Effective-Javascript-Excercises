/**	Variable hosting **/
//	Variables declarations are implicitly hoisted to the top of their enclosing functions
//	Redeclarations are treated as a single variable
//	Manually hoisting local variable declarations to avoid confusion

//	Javascript is lexical scoped
function variablesNotHoisted(header, body, footer) {
	for(var i = 0, n = header.length; i < n; i++) {
		header[i] = header[i].trim();
	}

	for(var i = 0, n = body.length; i < n; i++) {
		body[i] = body[i].trim();
	}

	for(var i = 0, n = footer.length; i < n; i++) {
		footer[i] = footer[i].trim();
	}
}

function manuallyVariablesHoisted(header, body, footer) {
	var i, n;
	for(i = 0; n = header.length; i < n; i++) {
		header[i] = header[i].trim();
	}

	for(i = 0; n = body.length; i < n; i++) {
		body[i] = body[i].trim();
	}

	for(i = 0; n = footer.length; i < n; i++) {
		footer[i] = footer[i].trim();
	}
}

// Block scoped try() and catch()
function blockedScoped() {
	var x = "scoped";
	var result = [];
	result.push(x);

	try {
		throw "exception";
	} catch(x) {
		x = "catch";
	}

	result.push(x);
	return result;

}

console.log(blockedScoped());