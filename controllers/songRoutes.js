const express = require('express')
const router = express.Router()
const Song = require('../models/song')

//////// LIST ALL SONGS /////////////
router.get('/', (req, res) => {
    Song.find({}).then (allSongs => {
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

/////// UPDATE A SONG /////////////

/////// DELETE A SONG ////////////

module.exports = router
