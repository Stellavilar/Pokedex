const db_connection = require ('../db_connection');

const searchController = {
    searchResults: (req, res) => {
        const searchedName = req.body.nom;
        db_connection.getPokemonByLikeName(searchedName, (err, data) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            res.render('home', {
                pokemons: data.rows
            });
        });
    }
};

module.exports = searchController;