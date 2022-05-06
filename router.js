// j'importe le module express pour utiliser ces fichier
const express = require("express");
// j'appelle la méthode Router() de express pour qu'il me retourne un objet router
const router = express.Router();
// j'importe mon tableau d'article
const articles = require(`./data/articles.json`);

const form= require(`./module_form`)
const dynamique= require(`./module_dynamique`)
const index= require(`./module_index`)

router.use(index)

router.use(dynamique);

router.use(form);
// router.get('/sendForm',(req, res) => {
//   const search = req.query.search.toLowerCase()
//   // const searchGames = games.filter(g => g.title.includes(search))
//   const searchArticle = search ? articles.filter(a => a.category.toLowerCase().includes(search)) : false;
//   res.render('index', {
//     searchArticle
//   })
  
// })
// j'exporte mon module
module.exports = router;