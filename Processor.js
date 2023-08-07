const fs = require('fs')

class Processor {
    static Process(data){
        let dados = data.split('\r\n')
        let _data = []
        dados.forEach(elem => {
            _data.push(elem.split(','))
        })
        return _data
    }
}

module.exports = Processor