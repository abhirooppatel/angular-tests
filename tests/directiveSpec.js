describe('Testing widget directive', function() {
	beforeEach(module('angularTest'));
	var compile, mockBackend, rootScope;
	beforeEach(inject(function($compile, $httpBackend, $rootScope) {
		compile = $compile;
		mockBackend = $httpBackend;
		rootScope = $rootScope;
	}));

	it('should render the widget correctly', function() {
		var scope = rootScope.$new();
		scope.team = {
					    name: 'South Africa',
					    pool: 'B',
					    ranking: 3,
					    logo_url: "http://upload.wikimedia.org/wikipedia/en/thumb/5/59/Southafrica_cricket_logo.svg/156px-Southafrica_cricket_logo.svg.png",
					    home_page_url: "http://www.icc-cricket.com/cricket-world-cup/teams/south-africa"
					  };

		mockBackend.expectGET('app/widget.html').respond(
				'<div class="team-widget" ng-class="getPoolClass()" ng-click="selectTeam()"><div class="content" ng-class="{\'selected\': team.selected}"><div class="logo"><img ng-src="{{team.logo_url}}"/></div><div class="info"><div class="title" ng-bind="team.name"></div><div class="pool">Pool {{team.pool}}</div><div class="ranking">Ranking {{team.ranking}}</div>			<div class="gotohome"><a ng-href="{{team.home_page_url}}">Go To Team</a></div></div></div></div>');
		var element = compile('<div team-widget team="team"></div>')(scope);

		scope.$digest();
		mockBackend.flush();
		expect(element.html()).toEqual('<div class="content" ng-class="{\'selected\': team.selected}"><div class="logo"><img ng-src="http://upload.wikimedia.org/wikipedia/en/thumb/5/59/Southafrica_cricket_logo.svg/156px-Southafrica_cricket_logo.svg.png" src="http://upload.wikimedia.org/wikipedia/en/thumb/5/59/Southafrica_cricket_logo.svg/156px-Southafrica_cricket_logo.svg.png"></div><div class="info"><div class="title ng-binding" ng-bind="team.name">South Africa</div><div class="pool ng-binding">Pool B</div><div class="ranking ng-binding">Ranking 3</div>			<div class="gotohome"><a ng-href="http://www.icc-cricket.com/cricket-world-cup/teams/south-africa" href="http://www.icc-cricket.com/cricket-world-cup/teams/south-africa">Go To Team</a></div></div></div>');
	});

	it('should have selected as null', function() {
		var scope = rootScope.$new();
		scope.team = {
					    name: 'South Africa',
					    pool: 'B',
					    ranking: 3,
					    logo_url: "http://upload.wikimedia.org/wikipedia/en/thumb/5/59/Southafrica_cricket_logo.svg/156px-Southafrica_cricket_logo.svg.png",
					    home_page_url: "http://www.icc-cricket.com/cricket-world-cup/teams/south-africa"
					  };

		mockBackend.expectGET('app/widget.html').respond(
				'<div class="team-widget" ng-class="getPoolClass()" ng-click="selectTeam()"><div class="content" ng-class="{\'selected\': team.selected}"><div class="logo"><img ng-src="{{team.logo_url}}"/></div><div class="info"><div class="title" ng-bind="team.name"></div><div class="pool">Pool {{team.pool}}</div><div class="ranking">Ranking {{team.ranking}}</div>			<div class="gotohome"><a ng-href="{{team.home_page_url}}">Go To Team</a></div></div></div></div>');
		var element = compile('<div team-widget team="team"></div>')(scope);

		scope.$digest();
		mockBackend.flush();
		var compiledElementScope = element.isolateScope();
		expect(compiledElementScope.team.selected)
		.toBeUndefined();
		
	});

	it('should toggle selected state', function() {
		var scope = rootScope.$new();
		scope.team = {
					    name: 'South Africa',
					    pool: 'B',
					    ranking: 3,
					    logo_url: "http://upload.wikimedia.org/wikipedia/en/thumb/5/59/Southafrica_cricket_logo.svg/156px-Southafrica_cricket_logo.svg.png",
					    home_page_url: "http://www.icc-cricket.com/cricket-world-cup/teams/south-africa"
					  };

		mockBackend.expectGET('app/widget.html').respond(
				'<div class="team-widget" ng-class="getPoolClass()" ng-click="selectTeam()"><div class="content" ng-class="{\'selected\': team.selected}"><div class="logo"><img ng-src="{{team.logo_url}}"/></div><div class="info"><div class="title" ng-bind="team.name"></div><div class="pool">Pool {{team.pool}}</div><div class="ranking">Ranking {{team.ranking}}</div>			<div class="gotohome"><a ng-href="{{team.home_page_url}}">Go To Team</a></div></div></div></div>');
		var element = compile('<div team-widget team="team"></div>')(scope);

		scope.$digest();
		mockBackend.flush();
		var compiledElementScope = element.isolateScope();
		compiledElementScope.selectTeam();
		expect(compiledElementScope.team.selected)
		.toBeTruthy();
		compiledElementScope.selectTeam();
		expect(compiledElementScope.team.selected)
		.toBeFalsy();
		
	});
	
	it('should return proper pool class', function() {
		var scope = rootScope.$new();
		scope.team = {
					    name: 'South Africa',
					    pool: 'B',
					    ranking: 3,
					    logo_url: "http://upload.wikimedia.org/wikipedia/en/thumb/5/59/Southafrica_cricket_logo.svg/156px-Southafrica_cricket_logo.svg.png",
					    home_page_url: "http://www.icc-cricket.com/cricket-world-cup/teams/south-africa"
					  };

		mockBackend.expectGET('app/widget.html').respond(
				'<div class="team-widget" ng-class="getPoolClass()" ng-click="selectTeam()"><div class="content" ng-class="{\'selected\': team.selected}"><div class="logo"><img ng-src="{{team.logo_url}}"/></div><div class="info"><div class="title" ng-bind="team.name"></div><div class="pool">Pool {{team.pool}}</div><div class="ranking">Ranking {{team.ranking}}</div>			<div class="gotohome"><a ng-href="{{team.home_page_url}}">Go To Team</a></div></div></div></div>');
		var element = compile('<div team-widget team="team"></div>')(scope);

		scope.$digest();
		mockBackend.flush();
		var compiledElementScope = element.isolateScope();
		expect(compiledElementScope.getPoolClass()).toEqual('pool-b');
	});
});