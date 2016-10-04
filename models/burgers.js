'use strict';

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
		}
	}, {
		classMethods: {
			associate: function(models) {
				Burgers.hasOne(models.Users);
			}
		}
	});

	return Burgers;
};
