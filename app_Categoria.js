window.onload = function() {
    atualizarData();

    var categoria = getCategoria();

    document.getElementById("cabecalho").innerHTML = `Home | ${categoria}`;
}

function getCategoria() {
    const urlParams = new URLSearchParams(window.location.search);
    const texto = urlParams.get('texto');

    return texto
}

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

var lista = localStorage.getItem(getCategoria());
var jsonConvertido = JSON.parse(lista);

const listaDeItensElement = document.getElementById('Pessoal');

if(jsonConvertido == null){
    jsonConvertido = [];
}

jsonConvertido.forEach((item, indice) => {

    const div = document.createElement('div');
    div.className = `box ${getCategoria().toLocaleLowerCase()}`;

    div.id = jsonConvertido[indice].status == 0 ? 'completa' : `${getCategoria().toLocaleLowerCase()}` ;


    const div1 = document.createElement('div');
    div1.className = "box-actions";

    const buttonEdit = document.createElement('button');
    buttonEdit.className = "edit";
    
    const imgButton = document.createElement('img');
    imgButton.src = "img/Icone_Editar.png";

    buttonEdit.onclick = function EditarTask(){    
        window.location.href = `editTask.html?categoria=${encodeURIComponent(getCategoria())}&indice=${indice}`;
    }

    
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = "P_task_check";

    checkbox.checked = jsonConvertido[indice].status == 0 ? true : false ;
    
    checkbox.onclick = function TaskConcluida(){
        if(jsonConvertido[indice].status == 1){
            jsonConvertido[indice].status = 0;
            div.id = "completa";
        }else{
            jsonConvertido[indice].status = 1;
            div.id = `${ getCategoria().toLocaleLowerCase() }`;
        }
        

        const jsonString = JSON.stringify(jsonConvertido, null, 2);
        localStorage.setItem(getCategoria(), jsonString);
    }


    const buttonDelete = document.createElement('button');
    buttonDelete.className = "delete";
    buttonDelete.onclick = function DeleteTask(){       
        jsonConvertido.splice(indice,1);

        const jsonString = JSON.stringify(jsonConvertido, null, 2); 
        localStorage.setItem(getCategoria(), jsonString);

        location.reload();
    }
    
    const imgButtonDelete = document.createElement('img');
    imgButtonDelete.src = "img/Icone_Lixeira.png";

    buttonEdit.appendChild(imgButton);

    buttonDelete.appendChild(imgButtonDelete);

    div1.appendChild(checkbox);
    div1.appendChild(buttonEdit);
    div1.appendChild(buttonDelete);
    

    div.appendChild(div1);

    const div2 = document.createElement('div');
    div2.className = "box-content";
    
    const labelTitle = document.createElement('label');
    const labelDescription = document.createElement('label');
    const labelVencimento = document.createElement('label');

    const input1 = document.createElement('input');
    const input2 = document.createElement('input');
    const input3 = document.createElement('input');
    const input4 = document.createElement('input');
    const input5 = document.createElement('input');

    input1.type = "radio";
    input2.type = "radio";
    input3.type = "radio";
    input4.type = "radio";
    input5.type = "radio";

    labelTitle.textContent = item.titulo;
    labelDescription.textContent = item.descricao;
    labelVencimento.textContent = item.vencimento;

    div2.appendChild(labelTitle);
    div2.appendChild(labelDescription);
    div2.appendChild(labelVencimento);
    
    const div3 = document.createElement('div');

    div3.textContent = "Prioridade: "

    div2.appendChild(div3);

    div3.appendChild(input1);
    div3.appendChild(input2);
    div3.appendChild(input3);
    div3.appendChild(input4);
    div3.appendChild(input5);

    switch(item.prioridade){
        case 5:
            input5.checked = true;
            input4.checked = true;
            input3.checked = true;
            input2.checked = true;
            input1.checked = true;
            break;
        case 4:
            input4.checked = true;
            input3.checked = true;
            input2.checked = true;
            input1.checked = true;
            break;
        case 3:
            input3.checked = true;
            input2.checked = true;
            input1.checked = true;
            break;
        case 2:
            input2.checked = true;
            input1.checked = true;
            break;
        case 1:
            input1.checked = true;
            break;

    }

    div.appendChild(div2);

    listaDeItensElement.appendChild(div);
});


const divAdd = document.createElement('div');
divAdd.className = "add-task";
divAdd.textContent = "+";
divAdd.onclick = function pageNovaTask(){
    window.location.href = "novaTask.html";
};
listaDeItensElement.appendChild(divAdd);











