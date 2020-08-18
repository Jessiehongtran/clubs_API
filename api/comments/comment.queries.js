const db = require('../../database/dbConfig');

module.exports = {
    create: (comment) => {
        return db("comments")
                .returning("id")
                .insert(comment)
                .then(ids => ({ id: ids[0] }))
    },
    createWithClubId: (ids) => {
        return db("club_comment")
                .returning("id")
                .insert(ids)
                .then(ids => ({id: ids[0]}))
    },
    getByClubId: (clubId) => {
        return db("clubs as cl")
                .where("cl.id", clubId)
                .join("club_comment as cc", "cc.club_id", "cl.id")
                .join("comments as cm", "cc.comment_id", "cm.id")
                .select(
                    "cm.comment"
                )
    } 
}