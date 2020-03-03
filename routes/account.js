const express = require('express');
const router = express.Router();

// Works list page
router.get('/', (req, res) => {
  res.render('template', {
    title: 'MiPortfolio',
    pageTitle: 'アカウント',
    ejsfile: './partial/account.ejs'
  });
});

module.exports = router