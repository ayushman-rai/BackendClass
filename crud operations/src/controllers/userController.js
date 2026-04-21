const { getAllUsers, saveUsers } = require('../models/userModel');

// GET all users
const getUsers = (req, res) => {
    const users = getAllUsers();
    res.json(users);
};

// GET user by ID
const getUserById = (req, res) => {
    const users = getAllUsers();
    const id = Number(req.params.id);

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
};

// CREATE user
const createUser = (req, res) => {
    const users = getAllUsers();
    const newUser = req.body;

    users.push(newUser);
    saveUsers(users);

    res.json({ message: "User added successfully", user: newUser });
};

// DELETE user
const deleteUser = (req, res) => {
    const users = getAllUsers();
    const id = Number(req.params.id);

    const filteredUsers = users.filter(user => user.id !== id);
    saveUsers(filteredUsers);

    res.json({ message: "User deleted successfully" });
};

// UPDATE user (PATCH)
const updateUser = (req, res) => {
    const users = getAllUsers();
    const id = Number(req.params.id);
    const updates = req.body;

    const updatedUsers = users.map(user =>
        user.id === id ? { ...user, ...updates } : user
    );

    saveUsers(updatedUsers);

    res.json({ message: "User updated successfully" });
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
};