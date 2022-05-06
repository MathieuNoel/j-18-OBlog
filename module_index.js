// Rebelote 

// j'importe le module express pour utiliser ces fichier
const express = require(`express`);
// j'importe mon tableau d'article
const articles = require(`./data/articles.json`);

const index = express();

index.set(`views`, `./integration/`);

index.set(`view engine`, `ejs`);
// je paramétre ma page d'accueil
index.get(`/`, (req, res) => {
  res.render(`index`, {
    // je partage le valeurs de articles dans locals (ou artilces : articles,)
    articles
  });
});

module.exports = index