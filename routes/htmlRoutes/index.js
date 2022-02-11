// draft based off zookeeper
const path = require("path");
const router = require("express").Router();

// route to index.html; ('/') connects to root route of server
router.get("/", (req, res) => {
    // was ../../public/index.html"));
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/notes", (req, res) => {
    // was ../../public/notes.html"));
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// wildcard ('*') route functionality
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

module.exports = router;