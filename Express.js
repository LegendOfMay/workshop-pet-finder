const express = require('express'); 

const pets  = require('./data');

const app = express(); 

const PORT = 1337;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

app.get('/', (req,res) => {
    res.send('Hello, this is the root page!');
})

app.get('/pets', (req,res) => {
    res.send(pets);
    console.log(pets)
})

app.get('/pets/:name', (req,res) => {
    const name = req.params.name; res.send(`Hey doggie ${name}`)
})

app.get('/pets/owner', (req,res) => {
    const owner = req.params.owner; res.send(`Hey ${owner}`)
})