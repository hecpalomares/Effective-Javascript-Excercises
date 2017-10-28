// Explicity bind local variables to object properties
// Avoid binding them with "with" statement
// Every reference  to an outer variable in a with block asumes there is no property
// -> of the same name in the with object
function status(info) {
	let w = new Widget();
	w.setBackground("blue");
	w.setForeground("white");
	w.addText("Status: " + info);
	w.show();
}

status('connecting');		//Status: connecting
Widget.prototype.info = "[[new widget info]]";
status('connected');		// Status: connected