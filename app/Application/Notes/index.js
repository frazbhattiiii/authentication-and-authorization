const NotesService = require("./NotesService");
const notesRepository = require("@Infrastructure/Repositories/Notes");
const notesService = new NotesService(notesRepository);

module.exports = notesService;