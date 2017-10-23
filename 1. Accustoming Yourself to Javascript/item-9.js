//	Declare variables locally
//	Consider using lint tools (eslint) to avoid unbound variables
function alwaysDeclareLocalsSwap(a, b) {
	console.log(`Received ${a} ${b}`);
	let temp = a;
	a = b;
	b = temp;
	return `Returned ${a} ${b}`;
}

console.log(alwaysDeclareLocalsSwap('Hello', 'World'));
