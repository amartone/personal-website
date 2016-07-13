'use strict';

app.directive('workCard', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/directives/work/work-card.directive.html'
	}
});

'use strict';

app.directive('projectCard', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/directives/project/project-card.directive.html'
	}
});
