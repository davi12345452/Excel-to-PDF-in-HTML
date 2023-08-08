const fs = require("fs")
const util = require("util")

class Writer {
    constructor(){
        this.writer = util.promisify(fs.writeFile)
    }

    async Write(file, data){
        try {
            await this.writer(file, data)
            return true
        } catch (error) {
            return false
        }
    }
}

module.exports = Writer