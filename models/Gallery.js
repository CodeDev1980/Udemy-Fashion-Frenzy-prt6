const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GalleryPostSchema = new Schema ({
    title: String,
    body: String,
    image: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    datePosted: {
        type: Date,
        default: new Date
    }
})

const GalleryPost = mongoose.model('GalleryPost', GalleryPostSchema)
module.exports = GalleryPost