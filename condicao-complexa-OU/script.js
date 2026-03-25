let idade = Number(prompt("diga sua idade ui"))
let estudante = prompt("É estudado(sim ou nao)")
let professor = prompt("é professor(sim ou nao)")

if (idade >= 60 || estudante === "sim" || professor === "sim"){
    alert("tem direito ao dd desconto")
} else{
    alert("nao tem o dd desconto")
}