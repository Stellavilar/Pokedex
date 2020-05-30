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
    pokemonPage: (req, res) => {
        // un objet partagé par toutes les views, qui contient les labels des stats
        res.locals.statsLabels = {
          pv: 'PV',
          attaque: 'Attaque',
          defense: 'Défense',
          attaque_spe:'Attaque Spé.',
          defense_spe:'Défense Spé.',
          vitesse: 'Vitesse'
        };
        const pokemonNum = req.params.numero;
        db_connection.getPokemonDetails(pokemonNum, (err, data) => {
          if (err) {
            console.log(err);
            return res.status(500).send(err);
          }
          db_connection.getPokemonTypes(pokemonNum, (err2, data2) => {
            if (err2) {
              console.log(err2);
              return res.status(500).send(err2);
            }
            res.render('details', {
              pokemon: data.rows[0],
              types: data2.rows
            });
        });
      });
    }

   
};

module.exports = mainController;