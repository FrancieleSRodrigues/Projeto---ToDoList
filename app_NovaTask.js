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

//navegando entre as páginas
function pageHome(){
    window.location.href = "index.html";
}

//ajustando radio prioridade e checkbox notificacao
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

//criando lista de Categoria Pessoal
var listaCategoriaPessoal = [];

//criando a classe tarefa
class Tarefa {
    constructor(titulo, descricao, categoria, vencimento, prioridade, notificacao, status) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.categoria = categoria;
        this.vencimento = (vencimento);  //Converte a data para um objeto Date
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
        document.getElementById("titulo").value, //titulo
        document.getElementById("descricao").value, //descricao 
        categoria, //categoria
        document.getElementById("data").value, //vencimento
        prioridade,  // Prioridade de 1 a 5, por exemplo
        notificacao, // Notificação habilitada
        status
    );

    var lista = localStorage.getItem(categoria);//Vetor pegando o json do LocalStorage (string)
    var templist = [] //lista temporária
    
    if ( lista == null) {

        templist.push(Tarefa1); //Adicionando a tarefa criada
        const jsonString = JSON.stringify(templist, null, 2); //criando um json com o objeto Tarefa1 criado.
        localStorage.setItem(categoria, jsonString);//salvando o json criado no navegador.
    } else {
        var jsonConvertido = JSON.parse(lista); //Convertendo o json para um objeto JS
        jsonConvertido.push(Tarefa1); //Adicionando a tarefa criada
        const jsonString = JSON.stringify(jsonConvertido, null, 2); //criando um json com o objeto Tarefa1 criado.
        localStorage.setItem(categoria, jsonString);//salvando o json criado no navegador.
    }
    
    
    return(alert("Tarefa criada com sucesso!"));
}