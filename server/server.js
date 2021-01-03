const express = require("express")

const server = express();
server.use(express.json())

users = [] 

// server.use('/', (req, res) => {
//     res.send("api operational")
// })
server.post('/register', (req, res) => {
    console.log(req.body)
    const user = req.body.username
    users.push(user)
    res.status(201).send(`Hello, ${user}`)
});

server.listen(5000, () => {
    console.log("Server running on http://localhost:5000")
})