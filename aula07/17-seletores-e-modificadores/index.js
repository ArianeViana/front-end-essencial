function cadastrarProfessor () {    
    event.preventDefault(event) //para não recarregar o submit do form

    // Resgatar valores digitados nos inputs
    const nome = document.getElementById("input-nome").value;
    const materia = document.getElementById("input-materia").value;  

    // Criando novas colunas
    let colunaNome = document.createElement("td");
    let colunaMateria = document.createElement("td");  

    // Adicionando valores digitados nas colunas
    colunaNome.innerText = nome;
    colunaMateria.innerText = materia;

    // Criando a linha vazia
    const linha = document.createElement("tr");

    // Criando linha com as duas colunas preenchidas
    linha.appendChild(colunaNome);
    linha.appendChild(colunaMateria);

    // Adicionando linha na tabela
    document.querySelector("#conteudo-tabela").appendChild(linha)
}


//puxando a api
window.onload = function() {
    fetch("https://randomuser.me/api/?results=5").then(results => {
       return results.json()
    }).then(data => {
       console.log(data)
       // data.results.forEach(professor => {
       //    let colunaNome = document.createElement("td")
       //    colunaNome.innerText = professor.name.first
       //    const linha = document.createElement("tr")
       //    linha.appendChild(colunaNome)
       //    document.querySelector("#conteudo-tabela").appendChild(linha)
       })
    // })
 }


