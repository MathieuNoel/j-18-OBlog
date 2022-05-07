// ce fichier servira à regrouper toute la logique de l'application (les fonctions middlewares des routes).

// j'importe mon tableau d'article
const articles = require(`./data/articles.json`);
// j'ai aussi besoin d'une liste des catégories donc je crée un petit tableau les repertoriant
const categories = [
  'Histoire',
  'DevOps',
  'Technologies',
  'Astuces'
]

// je créé un objet qui contiendra nos fonctions middlewares appelées par le router
const controller = {
  index: function (req, res) {
    // je renvoie simplement la vue index avec les articles et les catégories pour le menu
    res.render('index', {
      articles,
      categories,
    });
  },
  dynamique: function (req, res) {
    // il nous faut un nombre pour l'id donc j'utilise le parseInt
    const id = parseInt(req.params.id);
    // je vai chercher dans le tableau d'articles l'article qui possède l'id précisé dans la route
    const clickedArticle = articles.find(a => a.id === id);
    // si l'article en question n'existe pas, alors 404
    if (!clickedArticle) return next();
    // sinon on renvoie la vue avec le bon article
    res.render(`article`, {
      clickedArticle
    })
  },
  form: function (req, res) {

    
    // je stock dans une variable intermédiaire ce qu'a saisi l'utilisateur dans l'input search
    const categorySearch = req.query.search;
    // puis je vai checker dans le tableau d'articles si des articles correspondent partiellement ou totalement à la catégorie renseignée
    const articlesSearch = articles.filter(a => a.category.toLowerCase().includes(categorySearch));
    // puis je renvoie la vue index en lui donnant les bons articles.
    res.render('index', {
      articles: articlesSearch,
      categories
    });
  }
}

// je n'oublie pas d'exporter l'objet contenant mes fonctions.
module.exports = controller;