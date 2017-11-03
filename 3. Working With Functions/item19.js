//	Higher order functions (HoF): functions that take other functions as arguments (callback)
//	returns functions as their result
let names = ['Hector', 'Andrew', 'Peyton'];

let upper = names.map(name => {
	return name.toUpperCase();
})

console.log(upper);

let aIndex = "a".charCodeAt(0);

//	Abstract function buildString that shares functionality with multiple child-functions
//	Learn to detect common coding patterns to be replaced with HoF

function buildString(n, cb) {
	let result = "";
	for (let i = 0; i < n; i++) {
		result += cb(i);
	}
	return result;
}

let alphabet = buildString(26, function(i) {
	return String.fromCharCode(aIndex + i);
});

console.log("Alphabet: ", alphabet);

let digits = buildString(10, function(i) {
	return i
});

console.log("Digits: ", digits);


let randomsString = buildString(8, function() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + aIndex);
});

console.log("Random String: ", randomsString);