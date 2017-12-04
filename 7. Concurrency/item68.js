//	Use 'promises' for cleaner Async Logic
//	Promises represent eventual values, concurrent computations that eventually would have a result
//	Avoid data races
//	"Joinability" of operations, multiple .then()
const fetch = require('isomorphic-fetch');

fetch("https://api.github.com/users/hecpalomares").then(function(result) {
	console.time("timer");
	return result.json();
}).then(function(data) {
	console.log("My data is:", data);
	console.timeEnd("timer")
});

