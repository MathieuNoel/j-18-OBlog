// j'importe le module express pour utiliser ces fichier
const express = require("express");
// j'appelle la méthode Router() de express pour qu'il me retourne un objet router
const router = express.Router();
// j'importe mon tableau d'article
const articles = require(`./data/articles.json`);

/* Notes de J.S : 

Inutile de complexifier le code ainsi, tu verras en S4 comment faire ça proprement en utilisant les controllers ;) 
Tu auras remarqué que tu te dupliques beaucoup dans tes fichiers module_truc.js, il faut justement éviter de faire ça.
Alors effectivement, le bonus 3 te demandait d'isoler la logique (les fonctions middlewares) des routes. Mais dans UN module, pas 12. :P
Regarde mon fichier controller.js ;)

*/

/* Donc ça on enlève 
const form = require(`./module_form`)
const dynamique = require(`./module_dynamique`)
const index = require(`./module_index`)

router.use(index);
router.use(dynamique);
router.use(form);

*/

// router.get('/sendForm',(req, res) => {
//   const search = req.query.search.toLowerCase()
//   // const searchGames = games.filter(g => g.title.includes(search))
//   const searchArticle = search ? articles.filter(a => a.category.toLowerCase().includes(search)) : false;
//   res.render('index', {
//     searchArticle
//   })

// on va faire ça mieux :

// on importe le controller, c'est à dire l'objet contenant nos méthodes de route (middlewares)
const controller = require('./controller');
// pour chaque route, on lui passe en second paramètre la méthode adéquate du controller (sans les parenthèses car on veut juste lui transmettre la fonction, pas l'executer !)
router.get('/', controller.index);
router.get('/article/:id', controller.dynamique);
router.get('/sendForm', controller.form);
// })
// j'exporte mon module
module.exports = router;