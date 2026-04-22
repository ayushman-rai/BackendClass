const express = require('express');
const { connection } = require('./config/db');
const urlRoutes = require('./routes/urlRoute'); // fixed name

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', urlRoutes);

connection("mongodb://127.0.0.1:27017/urlShortner");

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});