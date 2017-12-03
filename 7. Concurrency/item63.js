//	Dropped Errors
//	* Abstract onError logic to a error-handling cuntion in a shared scope (line 5)
//	* Make sure to handle all error conditions explicitly to avoid dropped errors

function onError(error) {
	console.log("Error: " + error);
}

downloadSync("a.txt", function(a) {
	downloadSync("b.txt", function(b) {
		downloadSync("c.txt", function(c) {
			console.log("Contents: " + a + b + c);
		}, onError);
	}, onError);
}, onError);

//	Only a single error callback (less code)
downloadAllSync(["a.txt", "b.txt", "c.txt"], function(all) {
	let a = all[0], b = all[1], c = all[2];
	console.log("Contents: " + a + b + c);
}, onError);

/* NodeJS Example */
//	Single callback, first argument is a error
let filenames = ["a.txt", "b.txt", "c.txt"];
downloadAllSync(filenames, function(error, abc) {
	if(error){
		console.log("Error: " + error);
		return;
	}
	console.log("Contents: " + abc[0] + abc[1] + abc[2]);
});