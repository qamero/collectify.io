'use strict';

app.directive('decorateCategory', function() {
	return {
		template: 'Catégorie no "{{ category.id }}" : {{ category.name }}',
		restrict: 'E'
	}
})