const express = require('express')
const router = express.Router()
const footballController = require('../controllers/footballController')

// router.get('/league', footballController.getLeague)
router.post('/fixtures', footballController.getFixtures)
router.post('/addFavorites', footballController.addToFavorite)

module.exports = router