const router = require("express").Router();
const notes = require("../../lib/notes");
const getNewNotes = require("../../lib/notes");
// const { notes } = require("../../db/db.json");
const { createNewNotes, validateNewNotes } = require("../../lib/notes");

// get (path problem here???)   // public/assets/js/index.js
router.get("/notes", (req, res) => {
 getNewNotes.getNotes().then((notes) => {
    return res.json(notes);
  });
});

// post  (path problem here???)
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