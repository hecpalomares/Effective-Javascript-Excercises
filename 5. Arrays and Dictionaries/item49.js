//	For Loops >> for...in Loops at Array iteration

let scores = [22, 44, 59, 76, 32, 97];
let total = 0;

// Enumerates keys, not actual values of the array
for(let score in scores) {
	total += score;
}

let mean = total / scores.length;
console.log("Wrong: ",mean);	//	2057.55

/*FOR LOOP*/

let totalFor = 0;

//	Array length variable n, avoid recomputing property lookup scores.length
//	Easier to read stating that n is simple and fixed
for (var i = 0, n = scores.length; i < n; i++) {
	totalFor+=scores[i];
}

let meanFor = totalFor / scores.length;
console.log("Correct: ",meanFor);	// 55

/*ES6 WAY*/
let totalES6 = scores.reduce((a, b) => {
	return a + b;
});
let meanES6 = totalES6 / scores.length;
console.log("meanES6: ", meanES6);