'use strict';

module.exports = function(sequelize, DataTypes) {

	var Users = sequelize.define('Users', {
		user_id: {
			autoIncrement: true,
			primaryKey: true,
			unique: true,
			type: DataTypes.INTEGER
		},
		user_name: {
			allowNull: false,
			type: DataTypes.STRING
		}
	}, {
		classMethods: {
			associate: function(models) {}
		}
	});

	return Users;

};
