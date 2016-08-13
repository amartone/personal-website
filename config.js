/**
 * Created by Andrew on 2/24/16.
 */

'use strict';

//Set up URL routes for each controller.
app.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/personal-website', {
			templateUrl: 'views/home/home.view.html'
		});

	$locationProvider.html5Mode(true);

});
