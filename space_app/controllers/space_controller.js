const Space = require('../models/Space')

const spaceController = {
    index(req, res, next) {
        Space.getAll()
        .then(launches => {
            res.json({
                launches
            })
        }).catch(next)
    },
    
    create(req, res, next) {
        new Space({
            name: req.body.name,
            launch_date: req.body.launch_date,
            launch_time: req.body.launch_time,
            lsp: req.body.lsp,
            pad: req.body.pad,
            location: req.body.location,
            cc: req.body.cc,
            mission: req.body.mission,
        })
        .save()
        .then((launch) => {
            res.json({ launch })
        }).catch(next)
    }


}

module.exports = spaceController