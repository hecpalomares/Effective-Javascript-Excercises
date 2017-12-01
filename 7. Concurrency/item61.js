//	Don't block the Event Queue on I/O
//	Asynchronous APIs take callbacks to defer processing expensive operations and avoid blocking the main application.
//	In concurrent Javascript, never use any blocking I/0 APIs in the event queue 
const fetch = require('isomorphic-fetch');

//	Asynchronous Javascript
function asyncFetch() {
	//	Fetch API is not blocking
	fetch("https://api.github.com/users/hecpalomares").then(result => {
		return result.json();
	}).then(data => {
		console.log(`Hello my username ${data.login} and I'm located in ${data.location}`);
	});
}

function displayText() {
	let notBlockingEvent = "Fetch is not blocking";
	console.log(notBlockingEvent);
}

// Even that asynFetch() is called first, displayText() finish first.
asyncFetch();
displayText();

// Asynchronous Javascript with setTimeout
function doSomething() {
	let timeMS = 500;
	setTimeout(function() {
		console.log(`I've waited ${timeMS}ms`);
	}, timeMS);
}

function doSomethingPlus() {
	let timeMS = 1000;
	setTimeout(function() {
		console.log(`I've waited ${timeMS}ms`);
	}, timeMS);
}

function doSomethingPlusPlus() {
	let timeMS = 2000;
	setTimeout(function() {
		console.log(`I've waited ${timeMS}ms`);
	}, timeMS);
}

doSomethingPlusPlus();	// 	third to finish
doSomethingPlus();			//	second to finish
doSomething();					//	first to finish