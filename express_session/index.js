const express = require("express");
const path = require("path");
const session = require("express-session");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60, // 1 hour
        httpOnly: true
    }
}));

const FileStore = require("session-file-store")(session);

app.use(session({
    store: new FileStore({
        path: "./sessions"   // folder will be created
    }),
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: false
}));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("login");
});
app.get("/home", (req, res) => {
    res.render("home", { username: "Ayushman" });
});
app.post("/login", (req, res) => {
    const { username } = req.body;   // get data from form

    if (!username) {
        return res.send("Username is required");
    }

    req.session.user = username;     // store in session
    res.redirect("/home");
});

app.get("/home", (req, res) => {
    if (!req.session.user) {
        return res.redirect("/");
    }

    res.render("home", { username: req.session.user });
});
app.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/");
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});