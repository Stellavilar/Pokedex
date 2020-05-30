const db_connection = require ('../db_connection');

const typeController = {
    typesPage: (req,res) => {
        db_connection.getAllTypes((err,data) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            res.render('types', {
                types:data.rows
            })
        })
    },
    pokemonsByType: (req,res) => {
        const typeId = req.params.typeId;
        db_connection.getPokemonsByType(typeId, (err,data) => {
            if (err) {
                console.log(err);
                return res.status(500).sned(err);
            }
            res.render('home', {
                pokemons: data.rows,
            });
        });
    },

};

module.exports = typeController;