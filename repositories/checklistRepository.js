const { Checklist } = require("../models");

class ChecklistRepository {
    // ------------------------- Handle Get All Checklist ------------------------- //

    static async handleGetAllChecklist(){
        const handleGetAllChecklist = await Checklist.findAll();

        return handleGetAllChecklist;
    };

    // ------------------------- End Handle Get All Checklist ------------------------- //

    
    // ------------------------- Get Cheklist By  Cheklist Name  ------------------------- //

    static async getChecklistByName({ name }) {
        const getChecklistName = await Checklist.findOne({
            where: {
                name: name
            }
        });

        return getChecklistName;
    };

    // ------------------------- End Get Cheklist By Cheklist Name  ------------------------- //
    

    // ------------------------- End Handle Get Cheklist By Id ------------------------- //

    static async handleGetChecklistById({ id }){
        const handleGetCheklistById = await Checklist.findOne({
            where: { id }
        });

        return handleGetCheklistById;
    }

    // ------------------------- End Handle Get Cheklist By Id ------------------------- //

    // ------------------------- Create Cheklist  ------------------------- //
    
    static async handleCreateChecklist({ name}) {
        const handleCreateChecklist = Checklist.create({
            name
        });

        return handleCreateChecklist;
    };
    
    // ------------------------- End Create Cheklist  ------------------------- //

    // ------------------------- Update Cheklist  ------------------------- //
    
    static async handleUpdateChecklist({ id, name}) {

        const updatedCheklist = await Checklist.update({
            name
        }, {
            where: { id },
        });

        return updatedCheklist;
        
    };

    // ------------------------- End Update Cheklist  ------------------------- //

    // ------------------------- Handle Delete Checklist ------------------------- //

    static async handleDeleteChecklist({ id }) {
        
        const deletedChecklist = await Checklist.destroy({ where: { id } });

        return deletedChecklist;
    }

    // ------------------------- End Handle Delete Checklist ------------------------- //
}

module.exports = ChecklistRepository;