const express = require('express')
const router = express.Router()
const favoriteController = require('../controllers/favoriteController')

// router.get('/league', footballController.getLeague)
router.get('/', favoriteController.findAll)
router.delete('/:id', favoriteController.delete)


module.exports = router