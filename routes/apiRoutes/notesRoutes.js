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
router.post("/", (req, res) => {
  getNewNotes.write(req.body).then((notes)=> {
    res.json(notes);
  })
  .catch((error) => res.status(500).json(error));
});


// delete not right; add colon??
router.delete('/:id', (req, res) => {
  getNewNotes.deleteNotes(req.params.id).then(() => {
    res.json({ok:true});
  })
  .catch((error) => {
    console.log(error);
    res.status(500).json(error)
  })
   //res.json(req.body);
});

module.exports = router;