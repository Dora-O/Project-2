const { Model, DataTypes, EmptyResultError } = require('sequelize');
const sequelize = require('../config/connection');
const { create } = require('./Comments');

class Comments extends Model { }

Comments.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    users_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    projects_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: create,
      references: {
        model: 'projects',
        key: 'id',
      },
    },
    comment_content: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'create',
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Date.now,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments',
  }
);
module.exports = Comments;