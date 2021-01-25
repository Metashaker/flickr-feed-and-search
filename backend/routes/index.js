const express = require('express');

const router = express.Router();

const feedController = require('../controllers/feed');
const searchController = require('../controllers/search');

router.get('/feed', feedController);
router.get('/search', searchController);

module.exports = router;
