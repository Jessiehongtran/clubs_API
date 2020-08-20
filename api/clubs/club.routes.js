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

router.delete('/:clubId', async (req,res) => {
    const clubId = req.params.clubId
    try {
        await Clubs.delete(clubId)
        res.status(200).json({message: 'deleted 1 club'})
    } catch (err){
        res.status(500).json(err)
    }
})

router.patch('/:clubId', async (req,res) => {
    const clubId = req.params.clubId
    const change = req.body
    try {
        await Clubs.update(clubId, change)
        res.status(200).json({message: 'updated 1 club'})
    } catch (err){
        res.status(500).json(err)
    }
})
module.exports = router;