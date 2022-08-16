export default class GetNoteDTO {
	constructor(noteId) {
		this.noteId = noteId;
	}

	getNoteId() {
		return this.noteId;
	}
}