const NotesController = require("./NotesController");
const notesService = require("@Application/Notes");
const notesController = new NotesController(notesService);
 
module.exports = notesController;