//	Options Object for Keyword Arguments

//	argument creep example
let alert = new Alert(100, 75, 300, 200, "Error", message, "blue", "white", "black", "error", true);

//	Options Object: Easier to read, argument becomes self-documenting. Its property-name explains its role.
let alert2 = new Alert({
	x: 100, y:75,
	width: 300, height: 200,
	title: "Error", message: message,
	titleColor: "blue", bgColor: "white", textColor: "black",
	icon: "error", modal: true
});

// Options Objects consist exclusively of options arguments, we can omit them
let alertDefualt = new Alert();	//	use all default parameters

// If theres one or two required arguments, keep them separate ('app' and 'message' are required)
let alert3 = new Alert(app, message, {
	width: 300, height: 200,
	title: "Error", titleColor: "blue", 
	bgColor: "white", textColor: "black",
	icon: "error", modal: true
});