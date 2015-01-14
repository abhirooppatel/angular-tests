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

		it('should have sort order as ranking', function() {
			expect(controller.sortOrder).toBe('ranking');
		});

		it('should have pool filter as empty', function() {
			expect(controller.teamFilter.pool).toBe('');
		});

		it('should clear sort Order', function() {
			controller.clearSortOrder();
			expect(controller.sortOrder).toBe('');
		});

		it('should clear pool filter', function() {
			controller.teamFilter.pool = 'A';
			expect(controller.teamFilter.pool).toBe('A');
			controller.clearFilter();
			expect(controller.teamFilter.pool).toBe('');
		});
	});
});