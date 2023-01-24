const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const loginSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    Address: {
        type: string,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
}, {
    timestamps: true
});

const Login = mongoose.model('Login', loginSchema);

module.exports = Login;