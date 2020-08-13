const Space = require('../models/Space')

const spaceController = {
    index(req, res, next) {
        Space.getAll()
        .then(launches => {
            /*json object*/ //res.json({
                //launches
            res.render('space/index', {
                launches,
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
            /*json object*/ //res.json({ launch })
            res.redirect('/launches');
        }).catch(next)
    },


}

module.exports = spaceController