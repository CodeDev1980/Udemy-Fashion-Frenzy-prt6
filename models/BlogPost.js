const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema ({
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

const BlogPost = mongoose.model('ProjectPost', BlogPostSchema)
module.exports = BlogPost