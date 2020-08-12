const Space = require('../models/Space')

const spaceController = {
    index(req, res, next) {
        Space.getAll()
        .then(launches => {
            res.json({
                launches
            })
        }).catch(next)
    }


}

module.exports = spaceController