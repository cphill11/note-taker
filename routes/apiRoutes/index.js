const router = require('express').Router();

// add middleware so that app knows about routes into animalRoutes.js
const notesRoutes = require('../routes/apiRoutes/notesRoutes');

router.use(notesRoutes);
router.use(require('./notesRoutes'));

module.exports = router;