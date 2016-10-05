'use strict';

module.exports = {

	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable('Customers', {
			customer_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				unique: true,
				type: Sequelize.INTEGER
			},
			customer_name: {
				allowNull: false,
				type: Sequelize.STRING
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
		return queryInterface.dropTable('Customers');
	}

};
