function init() {
	$.getJSON("all-products.json", goodOut);
}

function goodOut(data) {
	console.log(data);
}

init();