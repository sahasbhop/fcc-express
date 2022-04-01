const express = require('express');
const path = require('path')
const app = express();
require('dotenv').config()

app.use('/public', express.static(path.join(__dirname, 'public')))
app.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})
app.get('/json', (req, res) => {
    const message = process.env.MESSAGE_STYLE === 'uppercase' ? "HELLO JSON" : "Hello json"
    res.json({message})
})

module.exports = app;