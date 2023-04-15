const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DesignPostSchema = new Schema ({
    title: String,
    body: String,
    image: String,
    dates: String,
    designer: String,
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

const DesignPost = mongoose.model('DesignPost', DesignPostSchema)
module.exports = DesignPost