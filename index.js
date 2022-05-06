// j'importe le module express pour utiliser ces fichier
const express = require(`express`);
// je crée le serveur express
const app = express();
// j'active le moteur de rendu EJS
app.set(`view engine`, `ejs`);
// je précise à express où se situe le dossier views
app.set(`views`, `./integration/`);
// je rend disponible les fichier static
app.use(express.static('./static/'));

app.use(express.urlencoded({ extended: true }));
// je require mon router
const router = require(`./router`);
// je rattache le router créé dans router.js à mon serveur stocké dans app
app.use(router);

console.log(app.id);
// j'indique une erreur 404 avec le status 404 pour les url on deffinit
router.use((req, res) => {

  res.status(404).render(`404`);
});
// je crée une variable qui stock mon port
const port = 3000;
// j'ecoute sur le port 3000 et je renvoi dans la console un lien cliquable pour redirigé sur mon index
app.listen(`${port}`, () => {
  console.log(`http://localhost:${port}/`);
});


