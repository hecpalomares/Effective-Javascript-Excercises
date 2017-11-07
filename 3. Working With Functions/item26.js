//	Use bind methods to curry a function. Delegate function with a fixed subsets of the req arguments
//	Pass null or undefined as a receiver argument since there is no need for this
function simpleURL(protocol, domain, path) {
	return `${protocol}://${domain}/${path}`;
}

//	Produces a new function that delegates simpleURL
// arg[0]: receiver value, 
let urls = paths.map(simpleURL.bind(null, "http", siteDomain));