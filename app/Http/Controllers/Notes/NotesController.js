import CreateNoteDTO from "@Application/Notes/CreateNoteDTO";
import GetNoteDTO from "@Application/Notes/GetNoteDTO";
import UpdateNoteDTO from "@Application/Notes/UpdateNoteDTO";
import DeleteNoteDTO from "@Application/Notes/DeleteNoteDTO";

class NotesController {
	constructor(NotesService) {
		this.NotesService = NotesService
	}

	addNote= async (req, res) => {
		const { title,description,userID } = req.body
		const dto = new CreateNoteDTO(title,description,userID)
		
		const response = await this.NotesService.addNote(dto);
		res.send(response)
	}

	updateNote = async (req, res) => {
		const { noteId } = req.params
		const {title,description} = req.body
		const dto =new UpdateNoteDTO(noteId,title,description)
		
		const response = await this.NotesService.updateNote(dto);
		res.send(response)
	}

	findNote = async (req, res) => {
		const { noteId } = req.params
		const dto = new GetNoteDTO(noteId)

		const response = await this.NotesService.findNote(dto)
		res.send(response)
	}

	getNotes = async (req, res) => {
		const response = await this.NotesService.getNotes()
		res.send(response)
	}

    deleteNote = async (req, res) => {
        const { noteId } = req.params
		const dto = new DeleteNoteDTO(noteId)

		const response = await this.NotesService.deleteNote(dto)
		res.send(response)
    }
}

module.exports = NotesController