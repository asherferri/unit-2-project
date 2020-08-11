const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('passport')

const app = express()
require('dotenv').config()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(cookieParser())

app.set('views', 'views')
app.set('view engine', 'ejs')

const PORT = process.env.PORT || 7777
app.listen(PORT, () => {
    console.log(`Listening Party with the Animals by Ozzy Osbourne on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.json({
        spaceApp: `this is a spaceApp 🤘🏻`
    })
})

app.use('*', (req, res) => {
    res.status(404).send('Nein Nein not hereee')
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack,
    })
})