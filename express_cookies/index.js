const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.use(cookieParser());

app.get('/home-cookie', (req, res) => {

    res.cookie("uName", "sectionFC", {
        maxAge: 24*60*60*1000,
        httpOnly: true,
        secure: false,

    });
    res.send("cookie setup successfully");
});

app.get('/set-cookie', (req, res) => {
    const data = req.cookies.uName;
    if(data)
        res.send(data);
});

app.get('/clear-cookie', (req, res) => {
    res.clearCookie("uName");
    res.send("Cookie cleared successfully");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});