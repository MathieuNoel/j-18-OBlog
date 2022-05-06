// j'importe le module express pour utiliser ces fichier
const express = require(`express`);
// j'importe mon tableau d'article
const articles = require(`./data/articles.json`);

const dynamique = express();

dynamique.set(`views`, `./integration/`);

dynamique.set(`view engine`, `ejs`);
// je paramétre une route dynamique
dynamique.get(`/article/:id`, (req, res, next) => {
  const id = parseInt(req.params.id);
  const clickedArticle = articles.find(a => a.id === id);
  if(!clickedArticle) return next()
  res.render(`article`, {
    clickedArticle
  })
});

module.exports = dynamique