const express = require('express')
const router = express.Router()
const footballRoutes = require('./football')

router.use('/footballs', footballRoutes)


module.exports = router