const express = require('express');
const router = express.Router();

/* INDEX page */
router.get('/', function(req, res) {
  const mainContents = [
    ['WorkA', 'description'],
    ['WorkB', 'description'],
    ['WorkC', 'description'],
    ['WorkD', 'description'],
    ['WorkE', 'description'],
    ['WorkF', 'description'],
  ]
  res.render('index', {
    title: 'Express',
    mainContents: mainContents
  });
});

module.exports = router;
