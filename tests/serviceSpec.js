describe('Testing Service', function() {
	beforeEach(module('angularTest'));

	var service, mockBackend, controller;
	var mockData = [
			  {
			    name: 'England',
			    pool: 'A',
			    ranking: 5,
			    logo_url: "http://upload.wikimedia.org/wikipedia/en/thumb/c/ce/England_cricket_team_logo.svg/128px-England_cricket_team_logo.svg.png",
			    home_page_url: "http://www.icc-cricket.com/cricket-world-cup/teams/england"
			  },
			  {
			    name: 'India',
			    pool: 'B',
			    ranking: 2,
			    logo_url: "http://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/265px-Cricket_India_Crest.svg.png",
			    home_page_url: "http://www.icc-cricket.com/cricket-world-cup/teams/india"
			  },
			  {
			    name: 'South Africa',
			    pool: 'B',
			    ranking: 3,
			    logo_url: "http://upload.wikimedia.org/wikipedia/en/thumb/5/59/Southafrica_cricket_logo.svg/156px-Southafrica_cricket_logo.svg.png",
			    home_page_url: "http://www.icc-cricket.com/cricket-world-cup/teams/south-africa"
			  },
			  {
			    name: 'Australia',
			    pool: 'A',
			    ranking: 1,
			    logo_url: "http://upload.wikimedia.org/wikipedia/en/thumb/3/35/Australia_cricket_logo.svg/300px-Australia_cricket_logo.svg.png",
			    home_page_url: "http://www.icc-cricket.com/cricket-world-cup/teams/australia"
			  },
			  {
			    name: 'Sri Lanka',
			    pool: 'A',
			    ranking: 4,
			    logo_url: "http://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Sri_Lanka_Cricket_Cap_Insignia.svg/283px-Sri_Lanka_Cricket_Cap_Insignia.svg.png",
			    home_page_url: "http://www.icc-cricket.com/cricket-world-cup/teams/sri-lanka"
			  }];

	beforeEach(inject(function($injector, $httpBackend, $controller) {
		mockBackend = $httpBackend;
		controller = $controller('MainController');
		mockBackend.expectGET('/api/teams')
		.respond(mockData);
		service = $injector.get('MainService');
	}));
	it('should have teams as empty initially', function() {
		expect(service.teams.length).toBe(0);
	});
	it('should give proper result', function() {
		expect(service.teams.length).toBe(0);
		mockBackend.flush();
		service.getTeams();
		expect(service.teams.length).toBe(5);
	});
});