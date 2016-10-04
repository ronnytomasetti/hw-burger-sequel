'use strict';

var customDataTypes = require('../lib/sequelize-mysql-timestamp');

module.exports = {

	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable('burgers', {
			burger_id: {
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
			date: {
				allowNull: false,
				defaultValue: Sequelize.NOW,
				type: customDataTypes.TIMESTAMP
			}
		});
  },

	down: function(queryInterface, Sequelize) {
		return queryInterface.dropTable('burgers');
  }

};
