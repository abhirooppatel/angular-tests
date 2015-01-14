var app = angular.module('angularTest', []);

app.service('MainService', ['$http', '$location', function($http, $location) {
	var self = this;
	self.teams = [];
	self.getTeams = function(success, failure) {
		$http.get('/api/teams').then(function(res) {
			self.teams = res.data
			success();
		}, function(err) {
			failure(err);
		});
	};
}]);

app.controller('MainController', ['MainService', '$window', function(MainService, $window) {
   var self = this;
   self.teams = [];

   var loadTeams = function() {
   		MainService.getTeams(function() {
   			self.teams = MainService.teams;
   		}, function(err) {
   			
   		});
   };
   loadTeams();
   self.sortOrder = 'ranking';
   self.teamFilter = {pool: ''};
   

   self.clearFilter = function() {
   		self.teamFilter = {pool : ''};
   };

   self.clearSortOrder = function() {
   		self.sortOrder = '';
   };
}]);

app.directive('teamWidget', [function() {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'app/widget.html',
		scope: {
			team: '='
		},
		link: function(scope, elem, attrs) {
			scope.selectTeam = function() {
				scope.team.selected = !scope.team.selected;
			};

			scope.getPoolClass = function() {
				return 'pool-' + scope.team.pool.toLowerCase();
			};
		}
	};
}]);