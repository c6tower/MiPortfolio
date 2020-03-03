const express = require('express');
const router = express.Router();

// Works list page
router.get('/', (req, res) => {
  res.render('template', {
    title: 'MiPortfolio',
    pageTitle: '作品一覧',
    ejsfile: './partial/works_list.ejs'
  });
});

// Each work page
const worksRender = (urlName, workName, partialFile) => {
  router.get(`/${urlName}`, (req, res) => {
    res.render('template', {
      title: 'MiPortfolio',
      pageTitle: workName,
      ejsfile: `./partial/${partialFile}`,
    })
  })
}

// (urlName, workName, fileName)
// 配列とループ処理
worksRender('rakuXsta', 'らくXすた', 'work_rakuXsta')

module.exports = router;
