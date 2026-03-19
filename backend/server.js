const express = require('express');
const app = express();
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());

// Temporary "database" for storing clips
let clips = {};

// Save text with an ID
app.post('/save', (req, res) => {
    const id = Math.floor(1000 + Math.random() * 9000); // Generate 4-digit ID
    clips[id] = req.body.text;
    res.json({ id });
});

// Retrieve text by ID
app.get('/get/:id', (req, res) => {
    const id = req.params.id;
    const text = clips[id];

    if (!text) {
        return res.status(404).send("Not found or expired");
    }

    delete clips[id]; // Delete after retrieval
    res.json({ text });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
