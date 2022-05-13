// as variáveis não são tipadas
// var primeiroNome = "Ariane"
// var idade = 31
// var altura = 1.55

// console.log(primeiroNome)
// console.log(idade)
// console.log(altura)

// objetos
// const usuario = {
//     primeiroNome: "Ariane",
//     idade: 31,
//     altura: 1.55,
// }

// console.log(usuario.primeiroNome)

// lista simples
// const lista = [
//     "Javascript",
//     "HTML",
//     "CSS"
// ]

// console.log(lista[0])
// console.log(lista[1])

// lista de objetos
// const jogadores =[
//     {
//         nome:"Obina",
//         posicao: "Atacante"
//     },
//     {
//         nome:"Adriano",
//         posicao:"Atacante"
//     },
//     {
//         nome: "Julio Cesar"
//         posicao:"Goleiro"
//     }

// ]

// for(i = 0; i < jogadores.length; i++){
//     console.log(jogadores[i].nome)
// }

// jogadores.forEach(jogador => {
//     console.log(jogador.nome)
// })

// funções
// function somarValores(a,b){
//     return a + b
// }

// const valor = somarValores(5,2);
// console.log(valor)


// arrow function
// const somarValores = (a,b) => {
//     return a + b
// }

// callback -- funções que funcionam como parâmetro para outras funções

const somarMostrarValores = (a, b, mostrar) => {
    const valor = a + b
    mostrar(valor)
}

somarMostrarValores(3, 5, function(x) {
    alert(x)
})

