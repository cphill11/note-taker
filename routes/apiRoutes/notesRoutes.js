const router = require("express").Router();
const notes = require("../../lib/notes");
const getNewNotes = require("../../lib/notes");
// const { notes } = require("../../db/db.json");


// get (path problem here???)   // public/assets/js/index.js
router.get("/", (req, res) => {
 getNewNotes.read().then((notes) => {
    return res.json(notes);
  });
});

// post  (path problem here???)
router.post("/notes", (req, res) => {
  store.addNotes(req.body).then((notes)=> {
    res.json(notes);
  })
  .catch((error) => res.status(500).json(error));
});


// delete not right; add colon??
router.delete('/notes/', (req, res) => {
   res.json(req.body);
});

module.exports = router;