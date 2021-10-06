let maioridade =  function (ano) {
    let anoAtual = new Date().getFullYear();

    let idade = anoAtual - ano
    
    if (idade>= 18) {
        console.log("maior de idade")
    }
    if (idade < 18) {
        console.log("é menor de idade")
    }
}

maioridade(2005)

