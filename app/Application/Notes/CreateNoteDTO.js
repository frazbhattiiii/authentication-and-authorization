import { v4 as uuidv4 } from "uuid";
export default class CreateNoteDTO {
  constructor(title, description, userID) {
    this.noteId = uuidv4();
    this.userID = userID;
    this.title = title;
    this.description = description;
  }
  getTitle() {
    return this.title;
  }
  getUserId() {
    return this.userID;
  }
  getNoteId() {
    return this.noteId;
  }
  getDescription() {
    return this.description;
  }
  getNote() {
    const { userID, noteId, title, description } = this;
    return { userID, noteId, title, description };
  }
}
