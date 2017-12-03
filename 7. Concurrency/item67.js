//	Never call Async Callbacks Synchronously
//	Disrupts expected sequence of operations and can lead to unexpected interleaving code.
//	Lead to stack overflows or mishandlead exceptions
//	Use an async API (setTimeout) to schedule and async callbacks to run in another turn (line 30)
function Dict(elements) {
	this.elements = elements || {};

	Dict.prototype.has = function(key) {
		return {}.hasOwnProperty.call(this.elements, key);
	};

	Dict.prototype.get = function(key) {
		return this.has(key) ? this.elements[key] : undefined;
	};

	Dict.prototype.set = function(key, val) {
		this.elements[key] = val;
	};

	Dict.prototype.remove = function(key) {
		delete this.elements[key];
	};
};

let cache = new Dict();

function downloadCachingAsync(url, onsuccess, onerror) {
	if(cache.has(url)) {
		let cached = cache.get(url);
		setTimeout(onsuccess.bind(null, cached), 0);
		return;
	}

	return downloadAsync(url, function(file) {
		cache.set(url, file);
		onsuccess(file);
	}, onerror);

}