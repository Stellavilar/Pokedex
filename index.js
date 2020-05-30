const dotenv = require ('dotenv');
dotenv.config();
const PORT  = process.env.PORT || 1234 ;

const express = require ('express');
const app = express();

//Import fichiers statiques
app.use(express.static('public'));

//Import views from ejs
app.set('view engine', 'ejs');
app.set('views', 'app/views');


const router = require ('./app/router');
app.use(router);

//lancement de l'application
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});