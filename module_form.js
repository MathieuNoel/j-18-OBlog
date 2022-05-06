// j'importe le module express pour utiliser ces fichier
const express = require(`express`);
// j'importe mon tableau d'article
const articles = require(`./data/articles.json`);

const form = express();

form.set(`views`, `./integration/`);

form.set(`view engine`, `ejs`);
// je retourne une page en fonction de la req du form
form.get('/sendForm',(req, res, next) =>{
  const id = parseInt(req.params.id);
  const clickedArticle = articles.find(a => a.id === id);
  if(!clickedArticle) return next()
  res.render(`article`, {
    clickedArticle
  })
})

module.exports= form