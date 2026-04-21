const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/users.json');

const getAllUsers = () => {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};

const saveUsers = (users) => {
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};

module.exports = {
    getAllUsers,
    saveUsers
};