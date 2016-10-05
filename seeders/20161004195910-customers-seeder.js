'use strict';

module.exports = {

	up: function(queryInterface, Sequelize) {
		return queryInterface.bulkInsert('Customers', [{
			customer_name: "Luke Skywalker",
			created_at: Sequelize.fn('NOW'),
			updated_at: Sequelize.fn('NOW')
		}, {
			customer_name: "Anakin Skywalker",
			created_at: Sequelize.fn('NOW'),
			updated_at: Sequelize.fn('NOW')
		}, {
			customer_name: "C-3PO",
			created_at: Sequelize.fn('NOW'),
			updated_at: Sequelize.fn('NOW')
		}, {
			customer_name: "Princess Leia",
			created_at: Sequelize.fn('NOW'),
			updated_at: Sequelize.fn('NOW')
		}, {
			customer_name: "Master Yoda",
			created_at: Sequelize.fn('NOW'),
			updated_at: Sequelize.fn('NOW')
		}]);
	},

	down: function(queryInterface, Sequelize) {
		return queryInterface.bulkDelete('Customers', null, {});
	}
};
