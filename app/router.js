const express = require ('express');

const router = express.Router();

const mainController = require ('./controllers/mainController');
const typeController = require ('./controllers/typeController');
const searchController = require ('./controllers/searchController');


router.get('/', mainController.homePage);
router.get('/pokemon/:numero', mainController.pokemonPage);

router.get('/types', typeController.typesPage);
router.get('/type/:typeId', typeController.pokemonsByType);

router.post('/search', searchController.searchResults);


module.exports = router;