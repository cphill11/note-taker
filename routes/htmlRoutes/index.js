const router = require("express").Router();
const path = require("path");

// route to index.html; ('/') connects to root route of server
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// wildcard ('*') route functionality
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;