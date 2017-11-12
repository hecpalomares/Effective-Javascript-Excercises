//	Store Instance State on Instance Objects
//	Mutable data can be problematic when shared. Prototypes are shared between all their instances
//	Store mutable per-instance state on instance objects
function Tree(x) {
	this.value = x;
	this.children = [];	// mutable data, stored per instance
}

Tree.prototype = {
	addChild: function(x) {
		this.children.push(x);
	}
};

let left = new Tree(2);
left.addChild(1);
left.addChild(3);

let right = new Tree(6);
right.addChild(5);
right.addChild(7);

let top = new Tree(4);
top.addChild(left);
top.addChild(right);

console.log(top.children);