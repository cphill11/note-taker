// draft based on  zookeeper
const router = require("express").Router();
const {
  filterByQuery,
  findById,
  // was createNewZookeeper
  createNewNote,

  //was validate Zookeeper
  validateNote,
  //path might be wrong!!
} = require("../../lib/notes");
//path might be wrong!!
const { notes } = require("../../db/notes");

router.get("/notes", (req, res) => {
  let results = notes;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

router.get("/notes/:id", (req, res) => {
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.post("/notes", (req, res) => {
  req.body.id = notes.length.toString();

  if (!validateNote(req.body)) {
    res.status(400).send("The note is not properly formatted.");
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});

module.exports = router;