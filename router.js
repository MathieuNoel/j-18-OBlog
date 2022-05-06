// j'importe le module express pour utiliser ces fichier
const express = require("express");
// j'appelle la méthode Router() de express pour qu'il me retourne un objet router
const router = express.Router();
// j'importe mon tableau d'article
const articles = require(`./data/articles.json`);
// je paramétre ma page d'accueil
router.get(`/`, (req, res) => {
  res.render(`index`, {
    // je partage le valeurs de articles dans locals (ou artilces : articles,)
    articles
  });
});
// je paramétre une route dynamique
router.get(`/article/:id`, (req, res, next) => {
  const id = parseInt(req.params.id);
  const clickedArticle = articles.find(a => a.id === id);
  if(!clickedArticle) return next()
  res.render(`article`, {
    clickedArticle
  })
});


// j'exporte mon module
module.exports = router;