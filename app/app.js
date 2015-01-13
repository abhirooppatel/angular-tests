var app = angular.module('angularTest', []);

app.service('MainService', ['$http', '$location', function($http, $location) {
	var self = this;

	self.getItems = function() {
		return $http.get('/api/teams');
	};
}]);

app.controller('MainController', ['MainService', '$window', function(MainService, $window) {
   var self = this;
   self.teams = [];

   var loadTeams = function() {
   		MainService.getItems().then(function(res) {
   			console.log('Data : ', res);
   			self.teams = res.data;
   		}, function(error) {
   			console.log('Error : ', error);
   		});
   };
   loadTeams();

   self.goToTeam = function(team) {
   		console.log('Selected');
   		$window.location.href = team.home_page_url;
   };
}]);

app.directive('teamWidget', [function() {
	return {
		restrict: 'A',
		replace: true,
		template: '<div ng-click="selectTeam(team)" ng-class="{\'selected\': team.selected}"><img ng-src="{{team.logo_url}}" style="height: 50px; width: 50px;"></img><span ng-bind="team.name"></span></div>',
		scope: {
			team: '=',
			teamSelect: '&'
		},
		link: function(scope, elem, attrs) {
			scope.selectTeam = function(team) {
				team.selected = !team.selected;
				scope.teamSelect({team: team});
			};
		}
	};
}]);