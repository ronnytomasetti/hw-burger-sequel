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
		},
		customer_id: {
			references: {
				model: 'Customers',
				key: 'customer_id'
			},
			type: DataTypes.INTEGER
		}
	}, {
		underscored: true,
		classMethods: {
			associate: function(models) {
				// Burgers.hasOne(models.Customers, { foreignKey: 'customer_id' });
			}
		}
	});

	return Burgers;
};
