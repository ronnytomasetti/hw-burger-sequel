'use strict';

module.exports = {

	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable('Burgers', {
			burger_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				unique: true,
				type: Sequelize.INTEGER
			},
			burger_name: {
				allowNull: false,
				type: Sequelize.STRING
			},
			devoured: {
				allowNull: false,
				type: Sequelize.BOOLEAN
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			user_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Users',
					key: 'user_id'
				}
			}
		});
	},

	down: function(queryInterface, Sequelize) {
		return queryInterface.dropTable('Burgers');
	}

};
