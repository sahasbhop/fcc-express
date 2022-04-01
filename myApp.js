const express = require('express');
const path = require('path')
const app = express();
require('dotenv').config()

app.use('/public', express.static(path.join(__dirname, 'public')))
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next()
})
app.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})
app.get('/json', (req, res) => {
    const message = process.env.MESSAGE_STYLE === 'uppercase' ? "HELLO JSON" : "Hello json"
    res.json({message})
})
app.get('/now', (req, res, next) => {
    req.time = new Date().toString()
    next()
}, (req, res) => {
    res.json({time: req.time})
})
app.get('/:word/echo', (req, res) => {
    res.json({echo: req.params['word']})
})
app.get('/name', (req, res) => {
    const name = "".concat(req.query['first'], " ", req.query['last'])
    res.json({name})
})
module.exports = app;