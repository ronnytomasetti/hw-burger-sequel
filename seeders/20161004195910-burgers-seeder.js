'use strict';

module.exports = {

	up: function (queryInterface, Sequelize) {
		return queryInterface.bulkInsert('burgers', [
			{ burger_name: "Cheeseburger", devoured:"0" },
			{ burger_name: "Double Cheeseburger", devoured:"0" },
			{ burger_name: "Triple Cheeseburger", devoured:"0" },
			{ burger_name: "Quadruple Cheeseburger", devoured:"0" },
			{ burger_name: "The Heart Clogger Burger", devoured:"0" }
		]);
  },

	down: function (queryInterface, Sequelize) {
	    return queryInterface.bulkDelete('burgers', null, {});
	}
};
