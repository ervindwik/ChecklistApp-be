const checklistItemRepository = require("../repositories/checklistItemRepository");

class checklistItemService {

    // ------------------------- Handle Rename Item  ------------------------- //

    static async handleRenameItemById({ id, itemName }) {

        const handleGetChecklistItemById = await checklistItemRepository.handleGetChecklistItemById({ id });

        if (handleGetChecklistItemById.id == id ) { 
            const renameItemById = await checklistItemRepository.handleRenameItemById({
                id,
                itemName
            });
    
            return {
                status: true,
                status_code: 200,
                message: "item name berhasil di update",
                data: {
                    rename_name: renameItemById,
                },
            };
        } else {
            return {
                status: false,
                status_code: 401,
                message: "Resource Unauthorized",
                data: {
                    updated_course: null,
                },
            };
        }
    };

    // ------------------------- End Handle Rename Item  ------------------------- //


    // ------------------------- Handle Delete Checklist Item  ------------------------- //

    static async handleDeleteChecklistItem({ id }) {

        const handleGetChecklistItemById = await checklistItemRepository.handleGetChecklistItemById({ id });

        if (handleGetChecklistItemById.id == id) {

            const deletedChecklistItem = await checklistItemRepository.handleDeleteChecklistItem({ id });

            return {
                status: true,
                status_code: 200,
                message: "Checklist Item berhasil di hapus",
                data: {
                    deleted_checklist_item: deletedChecklistItem,
                },
            };
        } else {
            return {
                status: true,
                status_code: 401,
                message: "Resource Unauthorized",
                data: {
                    deleted_courses: null,
                },
            };
        }
    }

    // ------------------------- End Handle Checklist Item  ------------------------- //

    // ------------------------- Handle Get All Checklist Item By Checklist Id  ------------------------- //

    static async handleGetChecklistItemByChecklistId({checklist_id}) {

        const handleGetChecklistItemByChecklistId = await checklistItemRepository.handleGetChecklistItemByChecklistId({checklist_id});

        return {
            status: true,
            status_code: 200,
            message: "Success Get Checklist Item By Checklist Id",
            data: {
                get_all_checklist_item_by_checklist_id: handleGetChecklistItemByChecklistId,
            },
        };
    };

    // ------------------------- End Handle Get All Checklist Item By Checklist Id ------------------------- //



}

module.exports = checklistItemService;