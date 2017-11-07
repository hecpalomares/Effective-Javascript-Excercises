//	Closures in apis (callbacks) > Strings in eval. When encapsulating code
//	Prefer apis that accepts functions (callbacks) rater that call strings with eval
function repeat(n, action) {
	for(let i = 0; i < n; i++) {
		action();
	}
}

function benchmark() {
	let start = [], end = [], timings = [];
		
	function sumDates() {
		for (var i = 0; i < 100000; i++) {
 			Math.sqrt(i);
		}
	}

	repeat(10, function() {
		start.push(Date.now());
		sumDates();
		end.push(Date.now());
	});

	for(let i = 0, n = start.length; i < n; i++) {
		timings[i] = end[i] - start[i];
	}

	return timings;

}

console.log(benchmark());