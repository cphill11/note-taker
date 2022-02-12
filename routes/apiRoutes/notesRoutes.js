const router = require("express").Router();
const notes = require("../../lib/notes");
const getNewNotes = require("../../lib/notes");

router.get("/", (req, res) => {
 getNewNotes.read().then((notes) => {
    return res.json(notes);
  });
});

router.post("/", (req, res) => {
  getNewNotes.write(req.body).then((notes)=> {
    res.json(notes);
  })
  .catch((error) => res.status(500).json(error));
});

router.delete('/:id', (req, res) => {
  getNewNotes.deleteNotes(req.params.id).then(() => {
    res.json({ok:true});
  })
  .catch((error) => {
    console.log(error);
    res.status(500).json(error)
  })
});

module.exports = router;