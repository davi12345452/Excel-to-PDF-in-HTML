// Não pode ser const para importar a classe
let Reader = require("./Reader")
let Processor = require("./Processor")
let Table = require("./Table")

let leitor = new Reader()

const teste = async(file) => {
    let dados= await leitor.Read(file)
    dadosProcess = Processor.Process(dados)
    console.log(dadosProcess)
    dadosTabela = new Table(dadosProcess)
    console.log(dadosTabela.header)
}

teste('./users.csv')
