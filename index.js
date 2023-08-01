const fs = require("fs");
const { stringify } = require("querystring");


/**
 * Lendo e editando um arquivo JSON, vamo usar a mesma estrutura para texto, convertendo esse 
 * texto para json depois, podendo, assim, manipular argumentos específicos do ob-
 * jeto. Parse: texto -> json StringFy: json -> texto
 */
fs.readFile("./teste.json", {encoding: "utf-8"}, (err, data) => {
    if(err) console.log(err);
    else{
        arquivo = JSON.parse(data)
        arquivo.id = 2
        arquivo.ano = "2032"
        fs.writeFile("./teste.json", JSON.stringify(arquivo), err=>console.log(err))
    }
})