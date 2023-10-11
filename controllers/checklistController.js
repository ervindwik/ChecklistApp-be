const checklistService = require("../services/checklistService");

// ------------------------- Handle Create Checklist ------------------------- //

const handleCreateChecklist = async (req, res) => {
    
    const { name } = req.body;

    const { status, status_code, message, data} = await checklistService.handleCreateChecklist({
        name
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};
// ------------------------- End handle Create Checklist ------------------------- //


// ------------------------- Handle Get All Checklist ------------------------- //

const handleGetAllChecklist = async (req, res) => {
    
    const { status, status_code, message, data} = await checklistService.handleGetAllChecklist();

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

// ------------------------- End Handle Get All Checklist ------------------------- //


// ------------------------- Handle Get Checklist By Id ------------------------- //

const handleGetChecklistById = async (req, res) => {
    
    const { id } = req.params;

    const { status, status_code, message, data} = await checklistService.handleGetChecklistById({ id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

// ------------------------- End Handle Get Checklist By Id ------------------------- //


// ------------------------- Handle Update Checklist ------------------------- //

const handleUpdateChecklist = async (req, res, next) => {

    const { id } = req.params;
    const { name } = req.body;

    const { status, status_code, message, data} = await checklistService.handleUpdateChecklist({
        id,
        name
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};


// ------------------------- End Handle Update Checklist ------------------------- //


// ------------------------- Handle Delete  Checklist ------------------------- //

const handleDeleteChecklist = async (req, res, next) => {
    const { id } = req.params;

    const { status, status_code, message, data } = await checklistService.handleDeleteChecklist({ id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
}


// ------------------------- End Handle Delete Checklist------------------------- //


module.exports = { 
    handleCreateChecklist,
    handleUpdateChecklist, 
    handleGetAllChecklist, 
    handleGetChecklistById, 
    handleDeleteChecklist
};

