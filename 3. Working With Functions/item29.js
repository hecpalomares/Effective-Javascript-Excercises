//	Stack inspections
//	Callstack: chain of active functions that are currently executing
//	Avoid arguments.caller and arguments.callee
let factorial = (function(n) {
	return (n <= 1) ? 1 : (n * arguments.callee(n - 1));
});

//	Refer a function by itself by name (more straightforward)
function factorial2(n) {
	return (n <= 1) ? 1 : (n * factorial2(n - 1));
}