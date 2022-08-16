const NotesRepository = require("./NotesRepository");
const connection = require("../../Database/mysqlConnection");
const notesRepository = new NotesRepository(connection);

module.exports = notesRepository;