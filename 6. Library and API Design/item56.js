//	Item 56: Avoid Unnecessary State
//	Stateless API: Provides functons or methods whose behaivor depends only on their inputs.
//	Stateful API: Produce different results based on their methods.

//	Example of a stateful canvas
let c = canvas.getContext("2d");
c.fillStyle = "blue";
c.font = "24pt Serif";
c.textAlign = "center";
c.fillText("hello", 75, 25);

//	Example of a less stateful canvas
//	Less fragile. Easier to declare defaults, the States are not modified by several resources.
//	Modular code, avoids bugs on multiple interactions from differents parts of the code. Easier to read.
let c.fillText("hello", 75, 25, {
	fillStyle: "blue",
	font: "24pt serif",
	textAlign: "center"
});


// 	Example of Defaults.
//	Stateless is less code, less prone to bugs.
let ctx = canvas.getContext("2d");
ctx.fillText("Text 1", 0, 0); 	// default color
ctx.fillStyle = "blue";
ctx.fillText("Text 2", 0, 30);	// color is blue
ctx.fillStyle = "black";				// color is black
ctx.fillText("Text 3", 0, 60);	// back in black

ctx.fillText("Text 1", 0, 0);												// default color;
ctx.fillText("Text 2", 0, 30, {fillStyle: "blue"}); // color blue
ctx.fillText("Text 3", 0, 60);											// default color;