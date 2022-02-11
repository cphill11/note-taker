const router = require("express").Router();
const notes = require("../../lib/notes");
const NotesClass = require("../../lib/notes");
// const { notes } = require("../../db/db.json");
const { createNewNotes, validateNewNotes } = require("../../lib/notes");

// get
router.get("/notes", (req, res) => {
  NotesClass.getNotes().then((notes) => {
    return res.json(notes);
  });
});

// post
router.post("/notes", (req, res) => {
  if (!validateNewNotes(req.body)) {
    res.status(400).send("The note has not been properly updated.");
  } else {
    const newNote = createNewNotes(req.body, notes);
    res.json(newNote);
  }
});


// save (???)

// delete



module.exports = router;