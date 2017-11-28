//	Structural Typing for Flexible Interfaces
//	Avoid inheritance when structural interfaces are more flexible and lightweight
//	Mock objects for unit testing
function Wiki(format) {
	this.format = format;
}

Wiki.prototype.displayPage = function(source) {
	let page = this.format(source);
	let title = page.getTtitle();
	let author = page.getAuthor();
	let output = page.toHTML();
};

//	It is enough to provide an interface with a simple object literal
Wiki.formats.MEDIAWIKI = function(source) {
	//	Extract contents from source
	return {
		getTitle: function() {/**/},
		getAuthor: function() {/**/},
		toHTML: function() {/**/}
	};
};

//	Structural Typing or Duck Typing: Any object will work as long it has the expected structure.