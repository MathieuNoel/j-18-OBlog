// Notes de J.S :
// ce fichier servira à regrouper toute la logique de l'application (les fonctions middlewares des routes). On l'appelle le controller.

// on a besoin des articles
const articles = require(`./data/articles.json`);
// on a aussi besoin d'une liste des catégories car tu nous as fait un menu dans la vue index, on va se créer un petit tableau les repertoriant
const categories = [
  'Histoire',
  'DevOps',
  'Technologies',
  'Astuces'
]

// on créé un objet qui contiendra nos fonctions middlewares appelées par le router
const controller = {
  index: function (req, res) {
    // on renvoie simplement la vue index avec les articles et les catégories pour ton menu
    res.render('index', {
      articles,
      categories
    });
  },
  dynamique: function (req, res) {
    // il nous faut un nombre pour l'id donc bien vu pour le parseInt
    const id = parseInt(req.params.id);
    // on va chercher dans le tableau d'articles l'article qui possède l'id précisé dans la route
    const clickedArticle = articles.find(a => a.id === id);
    // si l'article en question n'existe pas, alors 404
    if (!clickedArticle) return next();
    // sinon on renvoie la vue avec le bon article
    res.render(`article`, {
      clickedArticle
    })
  },
  form: function (req, res) {

    // là c'est pas bon. Le but de cette fonction est de récupérer un article selon sa catégorie. On ne veut donc pas récupérer l'article selon son id dans la route (req.params.id) mais selon la catégorie saisie dans le formulaire (req.query.search).
    // cependant dans l'énoncé il était demandé une route paramétrée, c'est à dire quelque chose du genre : /category/:name. Il n'y avait pas besoin de formulaire. Attention à bien lire pour la prochaine fois.
    // Mais admettons, je vais corriger en tenant compte de ton formulaire :

    /* const id = parseInt(req.params.id);
    const clickedArticle = articles.find(a => a.id === id);
    if (!clickedArticle) return next()
    res.render(`article`, {
      clickedArticle
    })
    */
    // CORRECTION :
    // on stock dans une variable intermédiaire ce qu'a saisi l'utilisateur dans l'input search
    const categorySearch = req.query.search;
    // puis on va checker dans le tableau d'articles si des articles correspondent partiellement ou totalement à la catégorie renseignée
    const articlesSearch = articles.filter(a => a.category.includes(categorySearch));
    // puis on renvoie la vue index en lui donnant les bons articles. Attention, la vue index attend une variable qui s'appelle "articles"
    // on oublie pas de renvoyer les catégories pour ton menu (dans l'idéal il aurait fallu faire un choix entre le menu des catégories ou bien le formulaire de recherche, avoir les deux ne sert pas à grand chose)
    res.render('index', {
      articles: articlesSearch,
      categories
    });
  }
}

// on oublie pas d'exporter l'objet contenant nos fonctions
module.exports = controller;