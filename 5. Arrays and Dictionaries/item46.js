/**	Prefer arrays to Dictionaries for Ordered Collections **/
//	Avoid relying on the order for...in loops to enumerate object properties

//	Accepting an array of objects. 
//	predictably iterates over the elements in a precise order: from 0 to highscores.length - 1
function report(highScores) {
	var result = "";
	for(var i = 0; i < highScores.length; i++) {
		var score = highScores[i];
		result += `${i + 1}. ${score.name}: ${score.points}\n`;
	}
	return result;
}

let result = report(	[{name: "Hank", points: 120},
											{name: "Ron", points: 300},
											{name: "Alice", points: 100},
											{name: "Sally", points: 170}]);

console.log(result);