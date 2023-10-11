const { checkListItem } = require("../models");
const { QueryTypes } = require("sequelize");
const { sequelize } = require("../models/index.js");

class checklistItemRepository {

  // ------------------------- End Handle Get Course By Id ------------------------- //

  static async handleGetChecklistItemById({ id }){
      const handleGetChecklistItemById = await checkListItem.findOne({
          where: { id }
      });

      return handleGetChecklistItemById;
  }

  // ------------------------- End Handle Get Course By Id ------------------------- //

  // ------------------------- Rename Item  ------------------------- //
  
  static async handleRenameItemById({ id, itemName }) {

      const renameItem = await checkListItem.update({
        itemName
      }, {
          where: { id },
      });

      return renameItem;
      
  };

  // ------------------------- End Rename Item ------------------------- //

  // ------------------------- Handle Delete Checklist Item ------------------------- //

  static async handleDeleteChecklistItem({ id }) {
      
      const deletedChecklistItem = await checkListItem.destroy({ where: { id } });

      return deletedChecklistItem;
  }

  // ------------------------- End Handle Delete Checklist Item ------------------------- //

  // ------------------------- Handle Get checklistItem By checklistId------------------------- //

  static async handleGetChecklistItemByChecklistId({ checklist_id }) {
      
    return await sequelize.query(`select c.*, c2.name
    from public."Checklist" as c2
    join "checkListItem" c ON c.checklist_id  = c2.id 
    where c2.checklist_id  = :checklist_id`,{
        type: QueryTypes.SELECT,
        replacements: {
            checklist_id:checklist_id,
        }
    });
};

// ------------------------- End Handle Get Checklist By ChecklistId ------------------------- //
}

module.exports = checklistItemRepository;