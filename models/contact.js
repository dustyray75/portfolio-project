const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const contactSchema = new Schema({
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
        type: String,
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

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;