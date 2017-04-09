"use strict";

module.exports = function(sequelize, DataTypes) {
	var TaskColums = {
		title: DataTypes.STRING,
		status: DataTypes.STRING
	};

	var TaskConfig ={
		classMethods:{

		}
	};

  	var Task = sequelize.define("Task",TaskColums, TaskConfig);
    
 	return Task;
};