const router = require('express').Router();

// add middleware
const notesRoutes = require('./notesRoutes');

// router.use(path, fxn)
router.use('/notes', notesRoutes);

module.exports = router;