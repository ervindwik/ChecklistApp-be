'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Checklist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Checklist.hasMany(models.checklistItem,{foreignKey:"checklist_id",as:"checklistItem"});
    }
  }
  Checklist.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Checklist',
  });
  return Checklist;
};