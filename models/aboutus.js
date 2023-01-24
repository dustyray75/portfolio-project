const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const aboutusSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const AboutUs = mongoose.model('AboutUs', aboutusSchema);

module.exports = AboutUs;