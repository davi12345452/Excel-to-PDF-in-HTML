// Arquivo somente para aprendizado ao longo do projeto

// A função Read File recebe o path do arquivo à ser lido e uma função callback:
// contém o erro e data. Se houver erro de leitura, tratar esse erro. A data pre-
// cisa ser tratada também, pois o node devolve os bytes do conteúdo. Para tratar
// isso, usamos o enconding, que convertará os bytes no tipo desejado. 

fs.readFile("./teste.txt", {encoding: 'utf-8'}, (error, data) => {
    if(error){
        return error
    }else{
        console.log(data)
    }
})


/**
 * Para escrever em arquivos. A função recebe o arquivo, conteúdo à ser escrito e uma 
 * callback para retornar erro, caso ocorra.
 */

fs.writeFile("./teste.txt", "Olá", err => {
    if(err){
        console.log(err)
    }
})

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