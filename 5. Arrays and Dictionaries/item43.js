//	Build lightweight Dictionaries from Direct Instances of the Object
//	Protected against prototype pollution for...in loops
let dict = {};

dict.alice = 25;
dict.bob = 19;
dict.cris = 64;

let names = [];

for(let name in dict) {
	names.push(name);
}

console.log(names);