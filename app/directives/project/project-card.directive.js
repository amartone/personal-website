'use strict';

app.directive('projectCard', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/directives/project/project-card.directive.html'
	}
});
