//	Iteration methods > loops
//	Iteration methods .map and .filter makes more readable code and avoid traps of termination conditions
//	We can create custom iteration methods
//	Traditional loops provide an exit, unlike map and filter (some and every provide a solution thou) 
let scores = [68, 95, 71, 78, 90, 100, 65, 83, 55];
let players = [" Mike ", "    Andrew", "Pete   ", "Julie   ", "Alice"];

//	Iterate over players and return an new array
let trimmed = [];
players.forEach(s => {
	trimmed.push(s.trim());
});

console.log(trimmed);	// ['Mike', 'Andrew', 'Pete', 'Julie', 'Alice' ]

// Using ES5 Array.prototype.map
let trimmesES5 = players.map(player => {
	return player.trim();
});
console.log(trimmesES5);	// ['Mike', 'Andrew', 'Pete', 'Julie', 'Alice' ]

//Using ES5 Array.prototype.filter
let passingScores = scores.filter(score => {
	return score >= 70;
});

console.log(passingScores);	//	[ 95, 71, 78, 90, 100, 83 ]

function takeWhile(a, pred) {
	let result = [];
	for (let i = 0, n = a.length; i < n;i++) {
		if (!pred(a[i], i)) {
			break;	// You can break a for loop
		}
		result[i] = a[i];
	}
	return result;
}

let prefix = takeWhile([1, 2, 4, 8, 16, 32], function(n) {
	return n < 10;
});
console.log(prefix);	// [1, 2, 4, 8]

// Using every and some provides boolean

function takeWhileES6(a, pred) {
	let result = [];
	a.every((x, i) => {
		if(!pred(x)) {
			return false;	// break
		}
		result[i] = x;
		return true;	// continue
	});
	return result;
}

let prefixEvery = takeWhile([1, 2, 4, 8, 16, 32], function(n) {
	return n < 7;
});

console.log(prefixEvery);	// [1, 2, 4];