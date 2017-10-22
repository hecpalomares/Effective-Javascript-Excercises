function avoidNonStrictEqualityOperator() {
	//	Converts "1.0e0" to 1 and true to 1, with implicit coercion
	let boolean = ("1.0e0" == {valueOf: function() {return true;}});
	console.log(boolean);	// True

	// Date stringOf returns different that Y/M/D format
	let date = new Date("1999/12/31");
	console.log(date == "1999/12/31"); // False
	console.log(date);

	//	Arguments of the same type no difference == and ===
	//	(===) is clearer since no conversion is involved like (==)
	// 	Use own methods for explicit coercions if needed

}

avoidNonStrictEqualityOperator();