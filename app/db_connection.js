const pg = require ('pg');
const client = new pg.Client(process.env.PG_URL)
client.connect();

const db_connection = {
    getAllPokemons: (callback) => {
        client.query("SELECT * FROM pokemon;", callback);
    },
    getAllTypes: (callback) => {
      const myQuery = "SELECT * FROM type";
      client.query(myQuery, callback);
    },
    getPokemonsByType: (typeId, callback) => {
      const myQuery = `SELECT * FROM pokemon p
      JOIN pokemon_type pt ON p.numero=pt.pokemon_numero
      WHERE pt.type_id=${typeId}`;
      client.query(myQuery, callback);
    },
    getPokemonTypes: (numero, callback) => {
      const myQuery = `SELECT * FROM type t 
      JOIN pokemon_type pt ON t.id = pt.type_id
      WHERE pt.pokemon_numero=${numero}`;
      client.query(myQuery, callback);
    },
    getPokemonDetails: (numero, callback) => {
      const myQuery = `SELECT * FROM pokemon WHERE numero=${numero}`;
      client.query(myQuery, callback);
    },
    getPokemonByLikeName: (name, callback) => {
      const myQuery = `SELECT * FROM pokemon
      WHERE nom ILIKE '%${name}%'`;
      client.query(myQuery, callback);
    },
  
    
      
};

module.exports = db_connection;