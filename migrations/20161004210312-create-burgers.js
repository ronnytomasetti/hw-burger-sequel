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
			customer_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Customers',
					key: 'customer_id'
				}
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},

	down: function(queryInterface, Sequelize) {
		return queryInterface.dropTable('Burgers');
	}

};
