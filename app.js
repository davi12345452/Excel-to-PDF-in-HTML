// Não pode ser const para importar a classe
let Reader = require("./Reader")
let Processor = require("./Processor")
let Table = require("./Table")

let leitor = new Reader()

const teste = async(file) => {
    let dados= await leitor.Read(file)
    dadosProcess = Processor.Process(dados)
    dadosTabela = new Table(dadosProcess)
}

teste('./users.csv')
