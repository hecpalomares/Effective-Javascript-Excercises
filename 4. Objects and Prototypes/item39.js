//	Beware of property names used by superclass
//	Never use superclass property name in a subclass

//	Superclass Actor
function Actor(scene, x, y) {
	this.scene = scene;
	this.x = x;
	this.y = y;
	this.actorID = ++Actor.nextID;
	scene.register(this);
}

Actor.nextID = 0;

//	Subclass Alien
function Alien(scene, x, y, direction, speed, strength) {
	Actor.call(this, scene, x, y);
	this.direction = direction;
	this.speed = speed;
	this.strength = strength;
	this.damage = damage;
	this.alienID = ++Alien.nextID;
}

Alien.nextID = 0;