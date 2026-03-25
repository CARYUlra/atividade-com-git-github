let renda = Number(prompt("quantos milhões de dolores você possue?"))
if(!isNaN(renda)){
    if (renda >= 3000) {
        let nomeLimpo = prompt("deseja entrar?(sim ou nao)")
        if (nomeLimpo === "sim") {
            alert("vamos ir a `fenda do bikini´")
        } else {
            alert("sai de minha ilha")
        }
    } else{
        alert("sai melão mosca")
    }
}