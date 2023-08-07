const fs = require("fs")

class Reader {
    
    Read(file){
        fs.readFileSync(file, 'utf-8', (error, data) => {
            if(error){
                console.log(error)
            }else{
                return data
            }
        })
    }
}

module.exports = Reader