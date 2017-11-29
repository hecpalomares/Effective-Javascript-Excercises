//	Avoid Excessive Coercion
//	Avoid mixing coercions with overloading (line 12)
//	Consider defensively guarding against unexpected inputs (line 20)
function square(x) {
	return x * x;
}

console.log(square("3"));	// returns 3
console.log(typeof square("4")); // returns number

//	Defensive programming: defend against potential errors with additional checks
BitVector.prototype.enable = function(x) {
	if(typeof x === "number") {
		this.enableBit(x);
	} else if(typeof x === "object" && x) {	// is an object and exist
			for (var i = 0, n = x.length; i < n; i++) {
				this.enableBit(x[i]);
			}
	} else {
			throw new TypeError("expected number or array-like as a parameter");
	}
};

//	Utility library guard
let guard = {
	guard: function(x) {
		if(!this.test(x)) {
			throw new TypeError("expected " + this);
		}
	}
};

// Each guard object implements own test method
/* uint32 object */
let uint32 = Object.create(guard);

uint32.test = function(x) {
	return typeof x === "number" && x === (x >>> 0);
};

uint32.toString = function() {
	return "uint32";
};


/* arrayLike object */
let arrayLike = Object.create(guard);

arrayLike.test = function(x) {
	return typeof x === "object" && x && uint32.test(x.length);
};

arrayLike.toString = function() {
	return "array-like object";
};