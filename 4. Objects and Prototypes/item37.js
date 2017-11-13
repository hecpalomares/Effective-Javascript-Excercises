//	Implicit Binding this
//	Scope of this is determined by its nearest enclosing function
//	Local variable (self, me, that) to make a this-binding available to inner functions
function CSVReader(separators) {
	this.separators = separators || [","];
	this.regexp = new RegExp(this.separators.map(function(sep) {
			return "\\" + sep[0];
	}).join("|"));
}

CSVReader.prototype.read = function(str) {
	let lines = str.trim().split(/\n/);
	//	Lexically scoped variable to save an additional reference to the outher binding of this
	var self = this;
	return lines.map(function(line) {
		return line.split(self.regexp);
	});
};

//	Use bind(this) callback function bind method
CSVReader.prototype.readBind = function(str) {
	let lines = str.trim().split(/\n/);
	return lines.map(function(line) {
		return line.split(this.regexp);
	}.bind(this));
};


let reader = new CSVReader();

console.log(reader.readBind("a,b,c\nd,e,f\n"));
