'use strict';

var items = [
	{'name': 'Django Unchained', 'categoryId': 1},
	{'name': 'Forrest Gump', 'categoryId': 1}
];

app.service('itemProvider', function() {
	this.getItems = function() {
		return items;
	}

	this.create = function(item) {
		items.push(item);

		return items;
	}
});