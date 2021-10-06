let mediaAluno = function(n1,n2){

    let media = (n1+n2)/2

    if (media>= 7){
        console.log("O Aluno foi Aprovado")
    }else if(media>=5 && media <7){

        console.log("O Aluno está em recuperação")
        
    }else if(media>5){
        console.log("O aluno foi Reprovado")
    }
}

mediaAluno(7,9)