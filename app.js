// Não pode ser const para importar a classe
let Reader = require("./Reader")

let leitor = new Reader()

leitor.Read("./users.csv")