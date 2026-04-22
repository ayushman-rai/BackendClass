const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortUrl: {
        type: String,
        required: true,
        unique: true
    },
    actualUrl: {
        type: String,
        required: true
    },
    visitRecord: []
}, { timestamps: true });

const urlModel = mongoose.model('urlModel', urlSchema);

module.exports = urlModel;
module.exports = urlModel;