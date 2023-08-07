// Não pode ser const para importar a classe
let Reader = require("./Reader")

let leitor = new Reader()

const teste = async(file) => {
    let dado = await leitor.Read(file)
    console.log(dado)
}

teste('./users.csv')
