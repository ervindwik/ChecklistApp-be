require("dotenv").config()
const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express()
app.use(express.json())
app.use(bodyParser.json());
app.use(cors());




// ------------------------- Import Controllers ------------------------- //

const authController = require("./controllers/authController");
const checklistController = require("./controllers/checklistController");
const checklistItemController = require("./controllers/checklistItemController");

// ------------------------- End Import Controllers ------------------------- //

// ------------------------- Import middlewares ------------------------- //
const middleware = require("./middlewares/auth");
// ------------------------- End Import middlewares ------------------------- //






// ------------------------- Define Routes ------------------------- //

// ------------------------- 1.1 Auth ------------------------- //
app.post("/v1/auth/register", authController.handleRegister);
app.post("/v1/auth/login", authController.handleLogin);
// ------------------------- 1.1 End Auth ------------------------- //




// ------------------------- 1.2 Checklist ------------------------- // 

app.get("/checklist", middleware.authenticate, checklistController.handleGetAllChecklist);
app.post("/checklist", middleware.authenticate, checklistController.handleCreateChecklist);
app.delete("/checklist/:id", middleware.authenticate, checklistController.handleDeleteChecklist);

// ------------------------- 1.2 End Checklist --------------------------//

// ------------------------- 1.3 Checklist Item ------------------------- //

app.get("/checklist", middleware.authenticate, checklistItemController.handleGetAllChecklist);
app.post("/checklist", middleware.authenticate, checklistItemController.handleCreateChecklist);
app.get("/checklist/:id", middleware.authenticate, checklistItemController.handleDeleteChecklistItemById);
app.put("/checklist/item/rename/:id", middleware.authenticate, checklistItemController.handleRenameItemNameById)

// ------------------------- 1.3 End Checklist Item --------------------------//





const port = process.env.TOKEN_SERVER_PORT 
//get the port number from .env file
app.listen(port, () => { 
console.log(` Server running on ${port}...`)
})