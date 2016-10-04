'use strict';

module.exports = {

	up: function(queryInterface, Sequelize) {
		return queryInterface.bulkInsert('Burgers', [{
			burger_name: "Cheeseburger",
			devoured: "0",
			createdAt: Sequelize.fn('NOW'),
			updatedAt: Sequelize.fn('NOW')
		}, {
			burger_name: "Double Cheeseburger",
			devoured: "0",
			createdAt: Sequelize.fn('NOW'),
			updatedAt: Sequelize.fn('NOW')
		}, {
			burger_name: "Triple Cheeseburger",
			devoured: "0",
			createdAt: Sequelize.fn('NOW'),
			updatedAt: Sequelize.fn('NOW')
		}, {
			burger_name: "Quadruple Cheeseburger",
			devoured: "0",
			createdAt: Sequelize.fn('NOW'),
			updatedAt: Sequelize.fn('NOW')
		}, {
			burger_name: "The Heart Clogger Burger",
			devoured: "0",
			createdAt: Sequelize.fn('NOW'),
			updatedAt: Sequelize.fn('NOW')
		}, {
			burger_name: "Krabby Patty",
			devoured: "1",
			user_id: 1,
			createdAt: Sequelize.fn('NOW'),
			updatedAt: Sequelize.fn('NOW')
		}, {
			burger_name: "Whopper Jr.",
			devoured: "1",
			user_id: 2,
			createdAt: Sequelize.fn('NOW'),
			updatedAt: Sequelize.fn('NOW')
		}]);
	},

	down: function(queryInterface, Sequelize) {
		return queryInterface.bulkDelete('Burgers', null, {});
	}
};
