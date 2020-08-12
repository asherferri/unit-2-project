const express = require('express')
const spaceRouter = express.Router()

spaceRouter.get('/', (req, res) => {
    res.send('list of launches go here')
})

module.exports = spaceRouter