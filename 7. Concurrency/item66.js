//	Use Counter to perform Concurrent Operations
//	* Events in Javasctipr occur nondeterministic (unpredictable order).
//	*	Counters can avoid data races in concurrent operations 
function downloadAllSync(urls, onsuccess, onerror) {
	let pending = urls.length;
	let result = [];

	// finish all my operations
	if(pending) === 0) {
		setTimeout(onsuccess.bind(null, result), 0);
		return;
	}

	urls.forEach(function(url, i) {
		downloadAsync(url, function(text) {
			if(result) {
				result[i] = text;	// store at first index
				pending--;				// register the success
				if(pending === 0) {
					onsuccess(result);
				}
			}, function(error) {
				if(result) {
					result = null;
					onerror(error)
				}
			}
		});
	});

}