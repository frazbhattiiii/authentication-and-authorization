
export default class DeleteNoteDTO {
	constructor(noteId) {
		this.noteId = noteId;
	}

	getNoteId() {
		return this.noteId;
	}
}
