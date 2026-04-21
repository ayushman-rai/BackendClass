const reqAge = (req, res, next) => {
    const age = req.query.age;

    if (!age) {
        res.send("Please provide age");
    } else if (age < 18) {
        res.send("You are not authorized to enter...");
    } else {
        next(); // VERY IMPORTANT
    }
};

module.exports = reqAge;