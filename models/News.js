const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsPostSchema = new Schema ({
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

const NewsPost = mongoose.model('NewsPost', NewsPostSchema)
module.exports = NewsPost