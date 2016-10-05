'use strict';

module.exports = function(sequelize, DataTypes) {

	var Customers = sequelize.define('Customers', {
		customer_id: {
			autoIncrement: true,
			primaryKey: true,
			unique: true,
			type: DataTypes.INTEGER
		},
		customer_name: {
			allowNull: false,
			type: DataTypes.STRING
		}
	}, {
		underscored: true,
		classMethods: {
			associate: function(models) {
				// Customers.hasMany(models.Burgers, { foreignKey: 'Customers.customer_id' });
			}
		}
	});

	return Customers;

};
