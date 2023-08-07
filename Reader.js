const fs = require("fs")
const util = require("util")

// Vamos usar promisify para usar promises ao invés de callbacks no readFile
class Reader {

    constructor(){
        this.reader = util.promisify(fs.readFile)
    }
    
    async Read(file){
        try {
            return await this.reader(file, "utf-8")
        } catch (error) {
            return undefined
        }
        
    }
}

module.exports = Reader