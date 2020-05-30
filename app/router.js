const express = require ('express');

const router = express.Router();

const mainController = require ('./controllers/mainController');
const typeController = require ('./controllers/typeController');

router.get('/', mainController.homePage);
router.get('/types', typeController.typesPage);


module.exports = router;