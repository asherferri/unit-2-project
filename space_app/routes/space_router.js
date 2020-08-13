const express = require('express')
const spaceController = require('../controllers/space_controller')
const spaceRouter = express.Router()

// spaceRouter.get('/', (req, res) => {
//     res.send('list of launches go here')
// })

//gets all
spaceRouter.get('/', spaceController.index)
//create launches
spaceRouter.post('/', spaceController.create)
//creates launch in view new
spaceRouter.get('/new', (req, res) => {
    res.render('space/new')
})

module.exports = spaceRouter