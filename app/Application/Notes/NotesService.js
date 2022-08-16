import { notesValidation } from "./validations";

class NotesService {
  constructor(notesRepository) {
    this.notesRepository = notesRepository;
  }

  async addNote(dto) {
    if (notesValidation(dto) != true) {
      return { status: 400, message: notesValidation(dto).message };
    }

    const notes = await this.notesRepository.add(dto.getNote());

    if (!notes) {
      return { status: 400, message: "Note cannot be added" };
    }

    return {  status: 200,  message: "Note added successfully"};
  }

  async updateNote(dto) {
    if (notesValidation(dto) != true) {
      return { status: 400, message: notesValidation(dto).message };
    }

    const note = await this.notesRepository.fetchById(dto.getNoteId());

    if (note.length == 0) {
      return { status: 404, message: "No notes found with such title" };
    }

    const notes = await this.notesRepository.update(dto.getNote());

    if (!notes) {
      return { status: 400, message: "Note update failed" };
    }

    return {  status: 200, message: "Note updated successfully"};
  }

  async findNote(dto) {
    const note = await this.notesRepository.fetchById(dto.getNoteId());

    if (note.length == 0) {
      return { status: 404,  message: "no notes found against the provided input"};
    }

    return { status: 200,  message: note};
  }

  async getNotes() {
    const notes = await this.notesRepository.fetchAll();

    return { status: 200, message: notes};
  }

  async deleteNote(dto) {
    const note = await this.notesRepository.fetchById(dto.getNoteId());

    if (note.length == 0) {
      return { status: 400, message: "Note doesn't exists" };
    }

    await this.notesRepository.remove(dto.getNoteId());

    return { status: 200, message: "Note deleted successfully"};
  }
}

module.exports = NotesService;
