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
  
    
      
};

module.exports = db_connection;