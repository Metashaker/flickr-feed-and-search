var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.get('/feed', (req, res, next) => {
  res.send('respond with a feed');
});

router.get('/search', (req, res, next) => {
  res.send('respond with search result');
});



module.exports = router;
