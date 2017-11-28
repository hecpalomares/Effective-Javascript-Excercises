//	Difference between Array and Array-Like
function BitVector() {
	this.bits = [];
	this.enableBit = function(x) {
		this.bits.push(x);
	};
	this.bitAt = function(x) {
		return this.bits.indexOf(x);
	}
};

// enable method is overloaded. You can pass diferent parameters, either an index or an array of indices
BitVector.prototype.enable = function(x) {
	if(typeof x === "number") {
		this.enableBit(x);
	} else {	// assume x is array-like
		for (var i = 0, n = x.length; i < n; i++) {
			this.enableBit(x[i]);
		}
	}
};

let bits = new BitVector();

bits.enable(4);
bits.enable([1, 3, 8, 17]);

bits.bitAt(4);	// 1
bits.bitAt(8);	// 1
bits.bitAt(9);	// 0


function StringSet(){
	this.strings = [];
	this.addString = function(s) {
		this.strings.push(s);
	};
	this.contains = function(s) {
		return (this.strings.indexOf(s) > -1);
	};
};

//	Similar to enable method, add method is overloaded. Can accept strings, true arrays and a (non-arrays) objects
StringSet.prototype.add = function(x) {
	if(typeof x === "string") {
		this.addString(x);
	} else if(Array.isArray(x)) {	// test for a true array
			x.forEach(function(s) {
				this.addString(s);
			}, this);
	} else {
		for(var key in x) {
			this.addString(key);
		}
	}
};

let set = new StringSet();

set.add("Hamlet");
set.add(["John", "Paul"]);
set.add({"Ophelia": 1, "Alice": 2, "Carter": 3});

set.contains("Alice");	// true
set.contains("John"); 	// true
set.contains("Jimmy");	// false