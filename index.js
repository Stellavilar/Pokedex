const dotenv = require ('dotenv');
dotenv.config();
const PORT  = process.env.PORT || 1234 ;

const express = require ('express');
const app = express();

//lancement de l'application
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});