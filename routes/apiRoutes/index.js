const router = require('express').Router();

// add middleware
const notesRoutes = require('./notesRoutes');

router.use('/notes', notesRoutes);

module.exports = router;