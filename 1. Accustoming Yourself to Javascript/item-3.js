//	Type erros silently hidden by implicit casting/coercions
//	+ operator addition or string concatenation depending arguments types
// 	Objects casted to numbers via valueof && Objects casted to Strings via toString
// 	typeof to test for undefined
function xAndY(x, y) {
	if(!x) {
		x = 100
	}

	if(!y) {
		y = 50
	}

	return {x, y};
}

function xAndYUndefined(x, y) {
	if(typeof x === "undefined") {
		x = 100
	}

	if(typeof y === "undefined") {
		y = 50
	}

	return {x, y};
}


console.log(xAndYUndefined());