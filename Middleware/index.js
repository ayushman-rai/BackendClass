const express = require('express');
const app = express();
const router = express.Router();
router = use(reqAge);

const reqAge = require('./MIDDLEWARE/middle_ware'); // import

app.get('/', (req, res) => {
    res.send("Home Page");
});

// Apply middleware to about route
app.get('/about', reqAge, (req, res) => {
    res.send("Welcome to About Page");
});

app.get('/contact', reqAge, (req, res) => {
    res.send("Welcome to Contact Page");

})

app.listen(4000, () => {
    console.log("Server running on port 4000");
});