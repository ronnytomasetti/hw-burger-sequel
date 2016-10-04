'use strict';

module.exports = {

	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable('Users', {
			user_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				unique: true,
				type: Sequelize.INTEGER
			},
			user_name: {
				allowNull: false,
				type: Sequelize.STRING
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},

	down: function(queryInterface, Sequelize) {
		return queryInterface.dropTable('Users');
	}

};
