//assim que carregar a página
window.onload = function() {
    atualizarData();
};

function atualizarData() {
    var dataAtual = new Date();
    var dataFormatada = formatarData(dataAtual);
    document.getElementById('dataHoje').innerText = dataFormatada;
}

function formatarData(data) {
    var diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    var meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    
    var diaSemana = diasDaSemana[data.getDay()];
    var dia = data.getDate();
    var mes = meses[data.getMonth()];
    var ano = data.getFullYear();
    
    return diaSemana + ", " + dia + " de " + mes + " de " + ano;
}

//variaveis universais
var contadora = 1;

//navegando entre as páginas
function pageHome(){
    window.location.href = "index.html";
}

function pageCategoria(id){
    window.location.href = 'categorias.html?texto=' + encodeURIComponent(id);
}


const listaPessoal = document.getElementById('PessoalTask');
const listaTrabalho = document.getElementById('TrabalhoTask');
const listaEstudo = document.getElementById('EstudoTask');


var listaPessoalLocalStorage = localStorage.getItem('Pessoal');//Vetor pegando o json do LocalStorage (string)
var listaTrabalhoLocalStorage = localStorage.getItem('Trabalho');//Vetor pegando o json do LocalStorage (string)
var listaEstudoLocalStorage = localStorage.getItem('Estudo');//Vetor pegando o json do LocalStorage (string)

var listaPessoalConvertida = JSON.parse(listaPessoalLocalStorage); //Convertendo o json para um objeto JS
var listaTrabalhoConvertida = JSON.parse(listaTrabalhoLocalStorage); //Convertendo o json para um objeto JS
var listaEstudoConvertida = JSON.parse(listaEstudoLocalStorage); //Convertendo o json para um objeto JS


if(listaPessoalConvertida == null){
    listaPessoalConvertida = [];
}

if(listaTrabalhoConvertida == null){
    listaTrabalhoConvertida = [];
}

if(listaEstudoConvertida == null){
    listaEstudoConvertida = [];
}


listaPessoalConvertida.forEach((item, indice) => {
    const div = document.createElement('div');
    div.className = "task";

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = "checkbox" + indice;
    checkbox.checked = listaPessoalConvertida[indice].status == 0 ? true : false ;

    div.appendChild(checkbox);

    const textNode = document.createTextNode(item.titulo);
    div.appendChild(textNode);

    listaPessoal.appendChild(div);
});

listaTrabalhoConvertida.forEach((item, indice) => {

    const div = document.createElement('div');
    div.className = "task";

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = "checkbox" + indice;
    checkbox.checked = listaTrabalhoConvertida[indice].status == 0 ? true : false ;

    div.appendChild(checkbox);

    const textNode = document.createTextNode(item.titulo);
    div.appendChild(textNode);

    listaTrabalho.appendChild(div);
});

listaEstudoConvertida.forEach((item, indice) => {

    const div = document.createElement('div');
    div.className = "task";

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = "checkbox" + indice;
    checkbox.checked = listaEstudoConvertida[indice].status == 0 ? true : false ;

    div.appendChild(checkbox);

    const textNode = document.createTextNode(item.titulo);
    div.appendChild(textNode);

    listaEstudo.appendChild(div);
});





