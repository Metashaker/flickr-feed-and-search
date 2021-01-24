const express = require('express');
const router = express.Router();
const axios = require('axios');
const Flickr = require('flickr-sdk');

const feedController = require('../controllers/feed');

const feeds = Flickr.Feeds();

router.get('/feed', feedController);

router.get('/search', (req, res, next) => {
  res.send('respond with search result');
});

module.exports = router;
