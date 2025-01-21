const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Add = require('./models/addModel');
const app = express();

app.use(express.json());
app.use(cors());

// POST: Add new user
app.post('/add', async (req, res) => {
    try {
        const body = req.body;
        const data = new Add(body);
        await data.save();
        res.json("Data stored successfully");
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Failed to store data" });
    }
});

// GET: Fetch all users or a specific user by name
app.get('/fetch', async (req, res) => {
    try {
        const { name } = req.query; // Check if a name is passed in the query
        if (name) {
            const user = await Add.find({ name });
            if (user.length === 0) {
                return res.status(404).json({ message: "User not found" });
            }
            return res.json(user);
        }
        const users = await Add.find({});
        res.json(users);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Failed to fetch data" });
    }
});

// DELETE: Delete a user by ID
app.delete('/deleteuser', async (req, res) => {
    try {
        const { id } = req.body; // Expecting ID in request body
        if (!id) {
            return res.status(400).json({ message: "User ID is required" });
        }

        const result = await Add.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ message: "User deleted successfully" });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Failed to delete user" });
    }
});

// PUT: Update user details by name
app.put('/updateuser', async (req, res) => {
    try {
        const { name, age, city } = req.body;
        if (!name) {
            return res.status(400).json({ message: "User name is required" });
        }

        const result = await Add.findOneAndUpdate(
            { name },
            { age, city },
            { new: true }
        );
        if (!result) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ message: "User updated successfully", result });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Failed to update user" });
    }
});

// MongoDB Connection and Server Start
mongoose.connect('mongodb://127.0.0.1:27017/employee')
    .then(() => {
        app.listen(5000, () => {
            console.log('Server is running on port 5000');
        });
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error(error);
    });
