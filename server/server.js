const express = require("express")

const server = express();

server.post('/register', (req, res) => {
    res.status(201).send("Hello World")});

server.listen(5000, () => { 
    console.log("Server running on http://localhost:5000") })