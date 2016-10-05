'use strict';

module.exports = {

	up: function(queryInterface, Sequelize) {
		return queryInterface.bulkInsert('Burgers', [{
			burger_name: "Cheeseburger",
			devoured: "0",
			created_at: Sequelize.fn('NOW'),
			updated_at: Sequelize.fn('NOW')
		}, {
			burger_name: "Double Cheeseburger",
			devoured: "0",
			created_at: Sequelize.fn('NOW'),
			updated_at: Sequelize.fn('NOW')
		}, {
			burger_name: "Triple Cheeseburger",
			devoured: "0",
			created_at: Sequelize.fn('NOW'),
			updated_at: Sequelize.fn('NOW')
		}, {
			burger_name: "Quadruple Cheeseburger",
			devoured: "0",
			created_at: Sequelize.fn('NOW'),
			updated_at: Sequelize.fn('NOW')
		}, {
			burger_name: "The Heart Clogger Burger",
			devoured: "0",
			created_at: Sequelize.fn('NOW'),
			updated_at: Sequelize.fn('NOW')
		}, {
			burger_name: "Krabby Patty",
			devoured: "1",
			customer_id: 1,
			created_at: Sequelize.fn('NOW'),
			updated_at: Sequelize.fn('NOW')
		}, {
			burger_name: "Whopper Jr.",
			devoured: "1",
			customer_id: 2,
			created_at: Sequelize.fn('NOW'),
			updated_at: Sequelize.fn('NOW')
		}]);
	},

	down: function(queryInterface, Sequelize) {
		return queryInterface.bulkDelete('Burgers', null, {});
	}
};
