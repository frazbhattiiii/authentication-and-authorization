export default class UpdateNoteDTO {
  constructor(noteId, title, description) {
    this.noteId = noteId;
    this.title = title;
    this.description = description;
  }

  getNoteId() {
    return this.noteId;
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  getNote() {
    const { noteId, title, description } = this;
    return { title, description, noteId };
  }
}
