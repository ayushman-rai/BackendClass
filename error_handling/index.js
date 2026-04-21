const express = require('express');
const errorHandler = require('./error_handler');

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to Contact Page");
});

app.get('/error', (req, res, next) => {
    const err = new Error("Something went wrong!");
    err.statusCode = 404;
    err.status = 'failed';
    next(err);
});

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Server running...');
});