const express = require('express')
const spaceController = require('../controllers/space_controller')
const spaceRouter = express.Router()

// spaceRouter.get('/', (req, res) => {
//     res.send('list of launches go here')
// })

spaceRouter.get('/', spaceController.index)

module.exports = spaceRouter