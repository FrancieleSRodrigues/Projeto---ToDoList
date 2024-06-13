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

function verificaRadioCheck(id){
    switch(id){
        case 5:
            document.getElementById("4").checked = true;
            document.getElementById("3").checked = true;
            document.getElementById("2").checked = true;
            document.getElementById("1").checked = true;
            break;
        case 4:
            document.getElementById("3").checked = true;
            document.getElementById("2").checked = true;
            document.getElementById("1").checked = true;
            break;
        case 3:
            document.getElementById("2").checked = true;
            document.getElementById("1").checked = true;
            break;
        case 2:
            document.getElementById("1").checked = true;
            break;
    }

    return true;
}

function verificaCheckbox(){
    if(document.getElementById("notificar_Sim").checked){
        document.getElementById("notificar_Nao").checked = false;
    }else if(document.getElementById("notificar_Nao").checked){
        document.getElementById("notificar_Sim").checked = false;
    }
    return true;
}

class Tarefa {
    constructor(titulo, descricao, categoria, vencimento, prioridade, notificacao, status) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.categoria = categoria;
        this.vencimento = vencimento;
        this.prioridade = prioridade;
        this.notificacao = notificacao;
        this.status = status;
    }
}

var categoria;

function verificarCategoria() {
    var selecao = document.getElementById("listaCategorias");
    categoria = selecao.options[selecao.selectedIndex].text;
}

function criarTarefa(){
    
    if(document.getElementById("titulo").value == ""){
        return(
            alert("O campo Título não pode estar vazio!")
            
        );
    }
    if(document.getElementById("descricao").value == ""){
        return(
            alert("O campo Descrição não pode estar vazio!")
        );
    }
    if(document.getElementById("data").value == ""){
        return(
            alert("O campo Data não pode estar vazio!")
        );
    }
    if(document.getElementById("listaCategorias").value == "Selecione uma categoria"){
        return(
            alert("Selecione uma categoria!")
        );
    }


    var prioridade = 0;
    var notificacao = 0;
    var status = 1; // 1-nao concluido, 0-concluido

    for(var i = 0; i<5; i++){
        if (document.getElementById((i+1)).checked){
            prioridade += 1;
        }    
    }

    if(document.getElementById("notificar_Sim").checked){
        notificacao = 1;
    }

    var Tarefa1 = new Tarefa(
        document.getElementById("titulo").value,
        document.getElementById("descricao").value, 
        categoria, 
        document.getElementById("data").value,
        prioridade, 
        notificacao, 
        status
    );

    var lista = localStorage.getItem(categoria);
    var templist = [] 
    
    if ( lista == null) {

        templist.push(Tarefa1);
        const jsonString = JSON.stringify(templist, null, 2);
        localStorage.setItem(categoria, jsonString);
    } else {
        var jsonConvertido = JSON.parse(lista);
        jsonConvertido.push(Tarefa1);
        const jsonString = JSON.stringify(jsonConvertido, null, 2);
        localStorage.setItem(categoria, jsonString);
    }
    
    pageHome();
    return(alert("Tarefa criada com sucesso!"));
}