const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const faqSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const FAQ = mongoose.model('FAQ', faqSchema);

module.exports = FAQ;