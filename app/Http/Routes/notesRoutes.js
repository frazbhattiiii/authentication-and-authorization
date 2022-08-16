const express = require("express")
const router = express.Router({mergeParams: true})

const notesController = require("../Controllers/Notes")

router.post("/", notesController.addNote)
router.put("/:noteId", notesController.updateNote)
router.get("/:noteId", notesController.findNote)
router.get("/", notesController.getNotes)
router.delete("/:noteId", notesController.deleteNote)


module.exports = router