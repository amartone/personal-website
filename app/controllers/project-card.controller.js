'use strict';

function ProjectCardController($scope, $rootScope)  {

var vm = this;

	vm.projectCards = [
		{
			"title": "Non-Invasive Blood Pressure Monitor",
			"image": "/images/spotlight-logo.png",
			"teamsize": "6"
		},
		{
			"title": "SharkByte Solutions",
			"image": "/images/amazon-250px.png",
			"teamsize": "3"
		},
		{
			"title": "WiFi Driver Automated Energy Optimization in Low Power Devices",
			"image": "/images/imprivata-250px.png",
			"teamsize": "3"
		},
		{
			"title": "Roomr - Live Better",
			"image": "/images/draper-250px.png",
			"teamsize": "1"
		}
	];

	}
app.controller('ProjectCardController', ProjectCardController);
