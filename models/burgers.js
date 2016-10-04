'use strict';

var customDataTypes = require('../lib/sequelize-mysql-timestamp');

module.exports = function(sequelize, DataTypes) {

	var Burgers = sequelize.define('Burgers', {
		burger_id: {
			autoIncrement: true,
			primaryKey: true,
			unique: true,
			type: DataTypes.INTEGER
		},
		burger_name: {
			allowNull: false,
			type: DataTypes.STRING
		},
		devoured: {
			allowNull: false,
			type: DataTypes.BOOLEAN
		},
		date: {
			allowNull: false,
			defaultValue: sequelize.NOW,
			type: customDataTypes.TIMESTAMP
		}
	}, {
		timestamps: false,
		classMethods: {
			associate: function(models) {}
		}
	});

	return Burgers;
};
