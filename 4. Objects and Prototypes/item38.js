//	Superclass Constructors from Subclass Constructor
//	Call the superclass constructor explictly from subclass, passing this as the explicir receiver (line 65)
//	Object.create to on construct the subclass prototype object to avoid calling the superclass constructor (line 71)
function Scene(context, width, height, image) {
	this.context = context;
	this.width = width;
	this.height = height;
	this.images = images;
	this.actors = [];
}

Scene.prototype.register = function(actor) {
	this.actors.push(actor);
};

Scene.prototype.unregister = function(actor) {
	let i = this.actors.indexOf(actor);
	if(i >= 0) {
		this.actors.splice(i, 1);
	}
};

Scene.prototype.draw = function() {
	this.context.clearRect(0, 0, this.width, this.height);
	let a = this.actors;
	
	for(let i = 0; i < a.length; i++) {
		a[i].draw();
	}
};

function Actor(scene, x, y) {
	this.scene = scene;
	this.x = x;
	this.y = y;
	scene.register(this);
}

Actor.prototype.moveTo = function(x, y) {
	this.x = x;
	this.y = y;
	this.scene.draw();
};

Actor.prototype.exit = function() {
	this.scene.unregister(this);
	this.scene.draw();
};

Actor.prototype.draw = function() {
	let image = this.scene.images[this.type];
	this.scene.context.drawImage(image, this.x, this.y);
};

Actor.prototype.width = function() {
	return this.scene.images[this.type].width;
};

Actor.prototype.height = function() {
	return this.scene.images[this.type].height;
};

function Spaceship(scene, x, y) {
	//	Calling Actor constructor first ensures that the instance properties are added to the new Object
	Actor.call(this, scene, x, y);
	//	points its a own instance properties
	this.points = 0;
}

//	Spaceship proper subclass of Actor. Inherits from Actor.prototype
Spaceship.prototype = Object.create(Actor.prototype);

Spaceship.prototype.type = "spaceShip";

Spaceship.prototype.scorePoint = function() {
	this.points++;
}