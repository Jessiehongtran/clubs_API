const router = require('express').Router()
const Comments = require('./comment.queries');


router.post('/club/:clubId', async (req,res) => {
    const comment = req.body
    const clubId = req.params.clubId
    Comments
            .create(comment)
            .then(response => {
                const commentId = response.id
                Comments
                        .createWithClubId({
                            club_id: clubId,
                            comment_id: commentId
                        })
                        .then(newres => {
                            res.status(200).json(response)
                        })
                        .catch(err => {
                            res.status(500).json(err)
                        })
            })
            .catch(err => {
                res.status(500).json(err)
            })
})

router.get('/club/:clubId', async (req,res) => {
    const clubId = req.params.clubId
    try {
        const comments = await Comments.getByClubId(clubId)
        res.status(200).json(comments)
    } catch (err){
        res.status(500).json(err)
    }
})

module.exports = router;