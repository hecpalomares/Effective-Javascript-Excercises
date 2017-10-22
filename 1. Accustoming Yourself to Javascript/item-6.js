//	Automatic colon insertion
function limitsSemicolonInsertion() {

	function Point(x, y) {
		this.x = x || 0
		this.y = y || 0
	}

	Point.prototype.isOrigin = function() {
		return this.x === 0 && this.y === 0
	}

	let myPoints = new Point(12, 12);

	console.log(myPoints);

	// Better use semi-colons easier to remember all the rules

}

limitsSemicolonInsertion();