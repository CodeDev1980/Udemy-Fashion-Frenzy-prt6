const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Please provide a unique username'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide a password']
    },
    email: {
        type: String
    },
    about: {
        type: String
    },
    dateJoined: {
        type: Date,
        default: new Date
    }
})

UserSchema.plugin(uniqueValidator)

UserSchema.pre('save', function(next){
    const user = this
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash
        next()
    })
})

const User = mongoose.model('User', UserSchema);
module.exports = User