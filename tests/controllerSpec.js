describe('Testing Controllers', function() {
	beforeEach(module('angularTest'));
	describe('Testing MainController', function() {
		var controller = null;

		beforeEach(inject(function($controller) {
			controller = $controller('MainController');
		}));

		it('should have teams as empty', function() {
			expect(controller.teams.length).toBe(0);
		});
	});
});