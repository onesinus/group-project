const express = require('express')
const router = express.Router()
const footballController = require('../controllers/footballController')

router.get('/league', footballController.getLeague)
router.get('/fixtures', footballController.getFixtures)

module.exports = router