//	Support Method Chaining
// For Stateless API, does not modify the object it returns a new one object (line 13)
// For Stateful API, supports chainability by returning this instead of undefined (line 23)

// Stateless API benefits from method chaining
function escapeBasicHTML(str) {
	return str.replace(/&/g, "&amp")
						.replace(/</g, "&lt")
						.replace(/>/g, "&gt")
						.replace(/"/g, "&quot")
						.replace(/'/g, "&apos");
}

// Array iteration are great for chaining as well
let users = records.map(record => {	
							return record.username;	// get the username of the record
						}).filter(username => {
							return !!username; 			// remove empty usernames
						}).map(username => {
							return username.toLowerCase();	// converts the username to lowercase strings
						});

element.setBackgroundColor("yellow")
			 .setColor("red")
			 .setFontWeight("bold");