'use strict';

var Burgers = require('../models')['Burgers'];

module.exports = {

	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable('Burgers', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				unique: true,
				type: Sequelize.INTEGER
			},
			name: {
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
					key: 'id'
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
		}).then(function() {
			Burgers.bulkCreate([{
				name: "Cheesburger",
				devoured: 0
			}, {
				name: "Double Cheesburger",
				devoured: 0
			}, {
				name: "Triple Cheesburger",
				devoured: 0
			}, {
				name: "Quadruple Cheesburger",
				devoured: 0
			}, {
				name: "Quintuple Cheesburger",
				devoured: 0
			}]);
		});
	},

	down: function(queryInterface) {
		return queryInterface.dropTable('Customers');
	}

};
