const express = require('express');
const path = require('path')
const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')))
app.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})
app.get('/json', (req, res) => {
    res.json({message: "Hello json"})
})

module.exports = app;