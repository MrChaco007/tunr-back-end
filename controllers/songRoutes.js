const express = require('express')
const router = express.Router()
const Song = require('../models/song')

//////// LIST ALL SONGS /////////////
router.get('/', (req, res) => {
    Song.find({}).then(allSongs => {
        res.json(allSongs)
    }).catch(err => res.json({status:400, err: err}))
})

/////// GET SONG BY TITLE //////////
router.get('/:title', (req, res) => {
    Song.findOne({title: req.params.title})
    .then((song) => res.json(song)
    )
    .catch(err => res.json({status:400, err: err}))
})

//////// CREATE A SONG /////////////
router.post('/', (req, res) => {
    const song = req.body
    Song.create(song)
    .then((song) => res.json({status: 200, data: song})
    )
    .catch(err => res.json({status:400, err: err}))
})

/////// UPDATE A SONG /////////////
router.put('/updateSong/:id', (req, res) => {
    Song.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((song) => res.json({status: 200, data: song})
    )
    .catch(err => res.json({status:400, err: err}))
})

/////// DELETE A SONG ////////////
router.delete('/:id', (req, res) => {
    Song.findByIdAndDelete(req.params.id)
    .then((song) => res.json({status: 200, msg: 'Song has been deleted'})
    )
    .catch(err => res.json({status:400, err: err}))
})

module.exports = router
