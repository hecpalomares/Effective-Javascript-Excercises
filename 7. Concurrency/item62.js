//	Nested or Named Callbacks for Async Sequencing
//	* Use nested or named callbacks to perforn several asynchornous operations in sequence
//	* Balance out named callbacks and nested to make readable code
//	* Avoid sequencing operations that should be done concurrently

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
				//
			});
		});
	});
}

