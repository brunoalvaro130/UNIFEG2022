const express = require('express');
const app     = express();
const port    = 3000;

app.get('/', (req, res) => {
    res.send('hello world by GET method');
});

app.get('/about', (req, res) => {
    res.send('About by GET');
});

app.post('/', (req, res) => {
    res.send('hello world by POST method');
});

app.put('/', (req, res) => {
    res.send('hello world by PUT method');
});

app.delete('/', (req, res) => {
    res.send('hello world by DELETE method');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});