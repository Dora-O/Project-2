const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
 
class Projects extends Model{}

Projects.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
  },
    media_link:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    projects_date:{
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },  
    users_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
  },
{
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: 'projects',
}
);

module.exports = Projects;