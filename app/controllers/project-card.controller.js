'use strict';

function ProjectCardController($scope, $rootScope)  {

var vm = this;

	vm.projectCardsRow1 = [
		{
			"title": "Non-Invasive Blood Pressure Monitor",
			"image": "/images/capstone-system.jpg",
			"teamsize": "6"
		},
		{
			"title": "SharkByte Solutions",
			"image": "/images/sharkbyte.png",
			"teamsize": "3"
		},
		{
			"title": "WiFi Energy Optimization",
			"image": "/images/wifi-setup-cropped.png",
			"teamsize": "3"
		}
	];

	vm.projectCardsRow2 = [
		{
			"title": "Roomr - Live Better",
			"image": "/images/roomr-logo.png",
			"teamsize": "1"
		},
		{
			"title": "Fiesta Music",
			"image": "/images/fiesta-logo.png",
			"teamsize": "5"
		},
		{
			"title": "Twitter and Stock Database",
			"image": "/images/twitter-logo.svg",
			"teamsize": "3"
		}
	];

	}
app.controller('ProjectCardController', ProjectCardController);
