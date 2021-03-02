var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
  { title: 'Travelbriefing', greeting: 'Hello!' }
  );
});

router.get('/index.json', function(req, res, next) {
  res.json({ title: 'Travelbriefing', greeting: 'Hello!' });
});

module.exports = router;
