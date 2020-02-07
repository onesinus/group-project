const express = require('express')
const router = express.Router()
const footballRoutes = require('./football')
const favoriteRoutes = require('./favorites')

router.use('/footballs', footballRoutes)
router.use('/favorites', favoriteRoutes)

module.exports = router