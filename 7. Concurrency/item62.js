//	Nested or Named Callbacks for Async Sequencing
//	* Use nested or named callbacks to perforn several asynchornous operations in sequence (lines 9-11)
//	* Balance out named callbacks and nested to make readable code (lines 9-27)
//	* Avoid sequencing operations that could be done concurrently (line 29-34)

let lookupURL = "https://example.com"

//	Sequence 1
db.lookupAsync(lookupURL, function(url) {
	downloadURLAndFiles(url);
});

//	Sequence 2
function downloadURLAndFiles(url) {
	downloadSync(url, downloadFiles.bind(null, url));
}

//	Sequence 3
function downloadFiles(url, file) {
	downloadSync("a.txt", function(a) {
		downloadSync("b.txt", function(b) {
			downloadSync("c.txt", function(c) {
				console.log("Contents: " + a + b + c);
			});
		});
	});
}

function downloadAllFiles(url, file) {
	downloadAllSync(["a.txt", "b.txt", "c.txt"], function(all) {
		let a = all[0], b = all[1], c = all[2];
		//	Work with variables a, b and c
	})
}