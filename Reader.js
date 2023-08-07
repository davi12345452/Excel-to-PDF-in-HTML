const fs = require("fs")

class Reader {
    
    Read(file){
        fs.readFile(file, 'utf-8', (error, data) => {
            if(error){
                console.log(error)
            }else{
                console.log(data)
            }
        })
    }
}

module.exports = Reader