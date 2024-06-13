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

const Home = document.getElementById('home');

Home.addEventListener('mouseover', function() {
    Home.style.backgroundColor = 'lightblue';
});

Home.addEventListener('mouseout', function() {
    Home.style.backgroundColor = 'white';
});

function pageHome(){
    window.location.href = "index.html";
}

function pageCategoria(id){
    window.location.href = 'categorias.html?texto=' + encodeURIComponent(id);
}

function pageNovaTask(){
    window.location.href = "novaTask.html";
}

const listaPessoal = document.getElementById('PessoalTask');
const listaTrabalho = document.getElementById('TrabalhoTask');
const listaEstudo = document.getElementById('EstudoTask');


var listaPessoalLocalStorage = localStorage.getItem('Pessoal');
var listaTrabalhoLocalStorage = localStorage.getItem('Trabalho');
var listaEstudoLocalStorage = localStorage.getItem('Estudo');

var listaPessoalConvertida = JSON.parse(listaPessoalLocalStorage); 
var listaTrabalhoConvertida = JSON.parse(listaTrabalhoLocalStorage); 
var listaEstudoConvertida = JSON.parse(listaEstudoLocalStorage);


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





