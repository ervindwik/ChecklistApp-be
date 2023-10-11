const checklistRepository = require("../repositories/checklistRepository");

class ChecklistService {
    // ------------------------- Handle Get All Checklist ------------------------- //

    static async handleGetAllChecklist() {

        const handleGetAllChecklist = await checklistRepository.handleGetAllChecklist();

        return {
            status: true,
            status_code: 200,
            message: "Berhasil mendapatkan semua data Checklist",
            data: {
                get_all_checklist: handleGetAllChecklist,
            },
        };
    };

    // ------------------------- End Handle Get All Checklist ------------------------- //


    // ------------------------- Handle Create Checklist ------------------------- //

    static async handleCreateChecklist({ name}) {

        // ------------------------- Payload Validation ------------------------- //

        if (!name) {
            return {
                status: false,
                status_code: 400,
                message: "Nama Checklist wajib diisi!",
                data: {
                    registered_checklist: null,
                },
            };
        }

        const getChecklistByName = await checklistRepository.getChecklistByName({ name });

        if (getChecklistByName) {
            return {
                status: false,
                status_code: 400,
                message: "Nama Checklist sudah terdaftar!",
                data: {
                    registered_checklist: null,
                },
            };
        } else {
            const createdChecklist = await checklistRepository.handleCreateChecklist({
                name
            });

            return {
                status: true,
                status_code: 201,
                message: "Berhasil mendaftarkan checklist!",
                data: {
                    registered_checklist: createdChecklist,
                },
            };
        }
    }

    // ------------------------- End Create Checklist ------------------------- //


    // ------------------------- Handle Get Checklist By Id ------------------------- //

    static async handleGetChecklistById({ id }) {
        const handleGetChecklistById = await checklistRepository.handleGetChecklistById({ id });

        return {
            status: true,
            status_code: 200,
            message: "Berhasil mendapatkan data checklist berdasarkan id",
            data: {
                checklist_by_id: handleGetChecklistById,
            },
        };
    };

    // ------------------------- End Handle Get Checklist By Id ------------------------- //


    // ------------------------- Handle Update Checklist ------------------------- //

    static async handleUpdateChecklist({ id, name}) {

        const getChecklistById = await checklistRepository.handleGetChecklistById({ id });

        if (getChecklistById.id == id ) {
            const updatedChecklist = await checklistRepository.handleUpdateChecklist({
                id,
                name
            });
    
            return {
                status: true,
                status_code: 200,
                message: "Checklist berhasil di update",
                data: {
                    updated_checklist: updatedChecklist,
                },
            };
        } else {
            return {
                status: false,
                status_code: 401,
                message: "Resource Unauthorized",
                data: {
                    updated_category: null,
                },
            };
        }
    };

    // ------------------------- End Handle Update Checklist ------------------------- //


    // ------------------------- Handle Delete Checklist ------------------------- //

    static async handleDeleteChecklist({ id }) {

        const getChecklistById = await checklistRepository.handleGetChecklistById({ id });

        if (getChecklistById.id == id) {

            const deletedChecklist = await checklistRepository.handleDeleteChecklist({ id });

            return {
                status: true,
                status_code: 200,
                message: "Checklist berhasil di hapus",
                data: {
                    deleted_checklist: deletedChecklist,
                },
            };
        } else {
            return {
                status: true,
                status_code: 401,
                message: "Resource Unauthorized",
                data: {
                    deleted_categories: null,
                },
            };
        }
    }

    // ------------------------- End Handle Delete Checklist ------------------------- //


}

module.exports = ChecklistService;