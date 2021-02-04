const { Schema, model } = require('mongoose')

const songSchema = new Schema(
    {
        title: { type: String, require: true },
        artist: { type: String, required: true },
        time: { type: String, required: true }
    },
    { timestamps: true }
)

const Song = model('Song', songSchema)

module.exports = Song