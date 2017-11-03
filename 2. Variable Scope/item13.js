//	IIFE (Immediately Invoked Function) creates Local Scopes
//	Closures store outer variables bu reference, not by value
//	IFFE changes the behaivor of a block. Can´t break/continue. this or arguments variables are different
function wrapElements(a) {
	let result = [];
	for (let i = 0, n = a.length; i < n; i++) {
		(function(){
			let j = i;
			result[i]	= function() {
				return a[j];
			};
		})();
	}
	return result;
}

let wrapped = wrapElements([10, 20, 30, 40, 50]);
let f = wrapped[0];
console.log(f());