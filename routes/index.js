const express = require('express')
const router = express.Router()

/* Index page */
router.get('/', (req, res) => {
  const menuContents = [
    ['WorkA', 'description'],
    ['WorkB', 'description'],
    ['WorkC', 'description'],
    ['WorkD', 'description']
  ]
  res.render('index', {
    title: 'Express',
    menuContents: menuContents
  })
})

module.exports = router
