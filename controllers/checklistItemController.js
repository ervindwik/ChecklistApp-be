const checklistItemService = require("../services/checklistItemService");


// ------------------------- Handle Rename Item ------------------------- //

const handleRenameItemNameById = async (req, res, next) => {

    const { id } = req.params;
    const { itemName} = req.body;

    const { status, status_code, message, data} = await checklistItemService.handleRenameItemById({
        id,
        itemName
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};


// ------------------------- End Handle Rename Item  ------------------------- //



// ------------------------- Handle Delete  Checklist Item ------------------------- //

const handleDeleteChecklistItemById = async (req, res, next) => {
    const { id } = req.params;

    const { status, status_code, message, data } = await checklistItemService.handleDeleteChecklistItem({ id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
}


// ------------------------- End Handle Delete Checklist Item ------------------------- //

// ------------------------- Handle Get All Checklist Item ------------------------- //

const handleGetChecklistItemByChecklistId = async (req, res) => {

    const {checklist_id} = req.params;
    
    const { status, status_code, message, data} = await checklistItemService.handleGetChecklistItemByChecklistId({checklist_id});

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

// ------------------------- End Handle Get All Checklist Item ------------------------- //

module.exports = { 
    handleCreateCourse,
    handleRenameItemNameById, 
    handleGetAllCourses, 
    handleGetCourseById, 
    handleGetCourseByUserId, 
    handleDeleteChecklistItemById,
    handleGetChecklistItemByChecklistId
};

