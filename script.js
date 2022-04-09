// Lista de usuários padrão
let users = [
    ["Lauren Shaxby", "lshaxby0@php.net", "16/10/2021"],
    ["Ardenia Paddingdon", "apaddingdon1@nsw.gov.au", "27/07/2021"],
    ["Renaldo Alenichev", "ralenichev2@ftc.gov", "10/06/2021"],
    ["Nichole OHeneghan", "noheneghan3@flavors.me", "28/06/2021"],
    ["Haywood Daintry", "hdaintry4@nhs.uk", "18/03/2021"],
    ["Leslie Daile", "ldaile5@vimeo.com", "23/05/2021"],
    ["Byrann Slorance", "bslorance6@kickstarter.com", "15/05/2021"],
    ["My Swendell", "mswendell7@moonfruit.com", "15/12/2021"],
    ["Brier Esson", "besson8@usa.gov", "14/03/2021"],
    ["Seth Piddle", "spiddle9@nationalgeographic.com", "20/10/2021"],
    ["Fer Piddle", "ferspiddle9@nationalgeographic.com", "20/10/2022"],
]

// Função para varrer e limpar elementos
const limpar = classe => {
    let remover = document.getElementsByClassName(classe);
    let n = remover.length;
    for(i=0;i<n;i++) {
        remover[0].remove();
    }
}

// Função de evento em vários botões
const evento = tipo => {
    let i, botoes = document.getElementsByClassName(tipo);
    if(tipo=="excluir") {
        for(i=0;i<botoes.length;i++) { 
            botoes[i].addEventListener("click", function() { users.splice(this.id.replace(tipo+"-", ""), 1); listarUsuarios(pagina); adicionarPagina(pagina)}) 
        }
    } else {

    }
}

// Função para adicionar as páginas
const adicionarPagina = pagina => {
    let i;

    // Limpa os botões
    limpar("paginas-botoes");

    // Número de páginas
    let nPaginas = Math.ceil(users.length / 5);
    let local = document.getElementById("paginas");
    // Botão de Voltar
    local.innerHTML += `<button class="paginas-botoes" id="voltar"><<</button>`;
    
    // Botões das páginas
    for(i=1;i<=nPaginas;i++) {
        if (pagina == i) { 
            local.innerHTML += `<button class="paginas-botoes" id="pagina-selecionada">${i}</button>`;
        } else {
            local.innerHTML += `<button class="paginas-botoes">${i}</button>`;
        }
    }
    // Botão de avançar
    local.innerHTML += `<button class="paginas-botoes" id="avancar">>></button>`;

    // Funções ao clicar
    const voltar = document.getElementById("voltar");
    const avancar = document.getElementById("avancar");

    voltar.addEventListener("click", () => { if (pagina > 1) { pagina--; adicionarPagina(pagina); listarUsuarios(pagina) }})
    avancar.addEventListener("click", () => { if (pagina <= 3) { pagina++; adicionarPagina(pagina); listarUsuarios(pagina) }})
}


// Função para listar os usuários
const listarUsuarios = pagina => {
    let i, j;

    // Limpa a tabela
    limpar("usuario");

    let local = document.getElementById("dados-usuarios");

    // Máximo de 5 por página
    //if (users.length < pagina * 5) { max=users.length } else { max=pagina*5 }
    users.length < pagina * 5 ? max=users.length : max=pagina*5

    for(i=pagina*5-5;i<max;i++) {
        let nRow = local.insertRow();
        nRow.classList.add("usuario");
        for(j=0;j<users[i].length;j++) {
            nCell = nRow.insertCell();
            nCell.innerText = users[i][j];
        }

        // Adicionando botões Editar e Excluir
        let botoes = nRow.insertCell();
        botoes.innerHTML += `<button class="editar" id="editar-${i}">Editar</button>`;
        botoes.innerHTML += `<button class="excluir" id="excluir-${i}">Excluir</button>`;
    }

    // Função do botão excluir
    evento("excluir")
}

let pagina = 1;

adicionarPagina(pagina)
listarUsuarios(pagina)
