'use strict';

function WorkCardController($scope, $rootScope)  {

var vm = this;

	vm.workCards = [
		{
			"title": "Spotlight",
			"image": "/images/spotlight-logo.png"
		},
		{
			"title": "Amazon",
			"image": "/images/amazon-250px.png"
		},
		{
			"title": "Imprivata",
			"image": "/images/imprivata-250px.png"
		},
		{
			"title": "Draper",
			"image": "/images/draper-250px.png"

		}
	];

	}
app.controller('WorkCardController', WorkCardController);
