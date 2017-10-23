//	Avoid declaring global variables
//	Declare variables locally

// let sum, average;
function avoidGlobals() {
	let sum, average; // Locally declared
	let scores = [6, 13, 8, 5, 16];

	sum = scores.reduce((total, score) => {
		return total + score
	}, 0);

	average = sum / scores.length;

	return average;
}

console.log(avoidGlobals());

// 	Avoid adding properties to global object
// 	Global object platform (feature detection) with this keyword
if(!this.JSON) {
	this.JSON = {
		parse: 1
		stringify: 2
	};
}