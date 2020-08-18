const db = require('../../database/dbConfig');

module.exports = {
    create: (club) => {
        return db("clubs")
                .returning("id")
                .insert(club)
                .then(ids => ({id: ids[0]}))
    },
    getAll: () => {
        return db("clubs")
    }
}