// Não pode ser const para importar a classe
let Reader = require("./Reader")
let Processor = require("./Processor")

let leitor = new Reader()

const teste = async(file) => {
    let dados= await leitor.Read(file)
    dados = Processor.Process(dados)
    console.log(dados)
}

teste('./users.csv')
