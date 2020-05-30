const db_connection = require ('../db_connection');

const mainController = {
    homePage: (req,res) => {
        db_connection.getAllPokemons((err, data) => {
            if (err) {
                console.log(err);
                return res.send(err);
            }
            res.render('home', {
                pokemons: data.rows
            });
        });
    },
   
};

module.exports = mainController;