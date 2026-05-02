const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');

app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send("Server is running");
});

// Use routes
app.use('/api/users', userRoutes);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

// backend class regular push