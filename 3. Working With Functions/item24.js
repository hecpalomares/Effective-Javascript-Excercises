//	arguments Object: use a variable to save a reference to arguments object
// 	iterator example
function iteratorValues() {
	let i = 0, n = arguments.length, a = arguments;
	return {
		hasNext: function() {
			return i < n;
		},
		next: function() {
			if(i >= n) {
				throw new Error("done");
			}
			// a is explicitly scoped reference to arguments in order to refer it at nested functions (next in this case)
			return a[i++];
		}
	};
}

let iterator = iteratorValues(1, 2, 8, 2, 6, 9);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.hasNext());