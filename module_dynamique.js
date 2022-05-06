// notes de J.S : tu dupliques des choses inutilement ici

// j'importe le module express pour utiliser ces fichier
const express = require(`express`);
// j'importe mon tableau d'article
const articles = require(`./data/articles.json`);

// notes de J.S : aïe, pourquoi recréer un serveur ?
const dynamique = express();
// tu as déjà ça dans index.js
dynamique.set(`views`, `./integration/`);
// pareil ici
dynamique.set(`view engine`, `ejs`);
// je paramétre une route dynamique
dynamique.get(`/article/:id`, (req, res, next) => {
  const id = parseInt(req.params.id);
  const clickedArticle = articles.find(a => a.id === id);
  if (!clickedArticle) return next()
  res.render(`article`, {
    clickedArticle
  })
});

module.exports = dynamique