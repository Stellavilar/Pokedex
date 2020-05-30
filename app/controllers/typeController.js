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
    }

};

module.exports = typeController;