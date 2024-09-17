const express = require('express')
import ConfigViewEngine from './configs/viewEngine'
import initWebRoutes from './routes/web'
const { connection } = require('./configs/connectDB')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 8080;

//Set up view engine
ConfigViewEngine(app)

//init all web routes
initWebRoutes(app)

app.get('/hi', (req, res) => {
    res.send('Hello World! vs Maotou')
})

//GET => http://localhost:8080/student
app.use('/api/student', require('./configs/testConnect'))

app.get('/', (req, res) => {
    res.render(`test/index.ejs`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});