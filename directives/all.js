'use strict';

app.directive('workCard', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/directives/work/work-card.directive.html'
	}
});
