// User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    cedula: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    cellphone: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);


