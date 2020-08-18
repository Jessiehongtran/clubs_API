const router = require('express').Router()
const Clubs = require('./club.queries')

router.get('/', async (req,res) => {
    try {
        const clubs = await Clubs.getAll()
        res.status(200).json(clubs)
    } catch (err){
        res.status(500).json(err)
    }

})

router.post('/', async (req,res) => {
    const club = req.body
    try {
        const id = await Clubs.create(club)
        res.status(200).json(id)
    } catch (err){
        res.status(500).json(err)
    }
})

module.exports = router;