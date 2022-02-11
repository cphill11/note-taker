const router = require('express').Router();

// add middleware so that app knows about routes into animalRoutes.js
const notesRoutes = require('./notesRoutes');

router.use('/notes', notesRoutes);

module.exports = router;