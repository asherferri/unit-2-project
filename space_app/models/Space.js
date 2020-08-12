const db = require('../db/config')

class Launch {
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



}
