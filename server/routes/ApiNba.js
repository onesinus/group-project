'use strict';

const router = require('express').Router();
const ApiNbaController = require('../controllers/ApiNbaController');

router.get('/listNBATeam', ApiNbaController.listNBATeam);
router.get('/listNBASeason', ApiNbaController.listNBASeason);
router.get('/listNBANext15Events', ApiNbaController.listNBANext15Events);
router.get('/searchNBAEvent', ApiNbaController.searchNBAEvent);

module.exports = router;