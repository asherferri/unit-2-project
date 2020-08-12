const db = require('../db/config')

class Space {
    constructor(launch) {
        this.id = launch.id || null
        this.name = launch.name
        this.launch_date = launch.launch_date
        this.launch_time = launch.launch_time
        this.lsp = launch.lsp
        this.pad = launch.pad
        this.location = launch.location
        this.cc = launch.cc
        this.mission = launch.mission || null
    }
    static getAll() {
        return db
        .manyOrNone('SELECT * FROM launch ORDER BY id ASC')
        .then((launches) => {
            return launches.map((launch) => new this(launch))
        })
    }

    
}

module.exports = Space
