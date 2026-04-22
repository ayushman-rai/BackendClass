const mongoose = require('mongoose');

async function connection(mongoUrl) {
    try {
        await mongoose.connect(mongoUrl);
        console.log("MongoDB Connected");
    } catch (error) {
        console.log("DB Error:", error);
    }
}

module.exports = { connection };