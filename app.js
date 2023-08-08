// Não pode ser const para importar a classe
let Reader = require("./Reader")
let Processor = require("./Processor")
let Table = require("./Table")
let HtmlParser = require("./HtmlParser")
let Writer = require("./Writer")
let PDFWriter = require("./PDFWriter")

let leitor = new Reader()
let escritor = new Writer()

const teste = async(file) => {
    let dados= await leitor.Read(file)
    dadosProcess = Processor.Process(dados)
    dadosTabela = new Table(dadosProcess)
    html = await HtmlParser.Parse(dadosTabela)
    await escritor.Write("novoHTML.html", html)
    PDFWriter.WritePDF('teste.pdf', html)
}

teste('./users.csv')
