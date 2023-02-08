const express = require('express')
import ConfigViewEngine from './configs/viewEngine'
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8080;

ConfigViewEngine(app)

app.get('/hi', (req, res) => {
    res.send('Hello World! vs Maotou')
})

app.get('/', (req, res) => {
    res.render(`test/index.ejs`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})