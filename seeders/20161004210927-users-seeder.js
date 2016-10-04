'use strict';

module.exports = {

	up: function(queryInterface, Sequelize) {
		return queryInterface.bulkInsert('Users', [{
			user_name: "Luke Skywalker",
			createdAt: Sequelize.fn('NOW'),
			updatedAt: Sequelize.fn('NOW')
		}, {
			user_name: "Anakin Skywalker",
			createdAt: Sequelize.fn('NOW'),
			updatedAt: Sequelize.fn('NOW')
		}, {
			user_name: "C-3PO",
			createdAt: Sequelize.fn('NOW'),
			updatedAt: Sequelize.fn('NOW')
		}, {
			user_name: "Princess Leia",
			createdAt: Sequelize.fn('NOW'),
			updatedAt: Sequelize.fn('NOW')
		}, {
			user_name: "Master Yoda",
			createdAt: Sequelize.fn('NOW'),
			updatedAt: Sequelize.fn('NOW')
		}]);
	},

	down: function(queryInterface, Sequelize) {
		return queryInterface.bulkDelete('Users', null, {});
	}
};
