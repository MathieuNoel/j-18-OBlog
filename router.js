// j'importe le module express pour utiliser ces fichier
const express = require("express");
// j'appelle la méthode Router() de express pour qu'il me retourne un objet router
const router = express.Router();
// j'importe mon tableau d'article
const articles = require(`./data/articles.json`);

// j'importe le controller, c'est à dire l'objet contenant mes méthodes de route (middlewares)
const controller = require('./controller');
// pour chaque route, je lui passe en second paramètre la méthode adéquate du controller (sans les parenthèses car je veut juste lui transmettre la fonction, pas l'executer !)
router.get('/', controller.index);

router.get('/article/:id', controller.dynamique);

router.get('/sendForm', controller.form);


// j'exporte mon module
module.exports = router;