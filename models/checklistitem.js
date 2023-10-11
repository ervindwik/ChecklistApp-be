'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class checklistItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      checklistItem.belongsTo(models.Checklist,{foreignKey:"cheklist_id",as:"cheklistitem",onDelete:"CASCADE"})
    }
  }
  checklistItem.init({
    itemName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'checklistItem',
  });
  return checklistItem;
};