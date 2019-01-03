var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

// buscou paciente e pegou a td e dentro da td pegou o peso
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido")
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido")
    }

  if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}


titulo.addEventListener("click", mostraMensagem);

function mostraMensagem(){
    console.log("Olá eu fui clicado!");
}
// colocando o imc valor dentro da tag imc
// text content além de colocar uma string, ele pode pegar o valor
// função tofixed() limita o numero de elementos


btn = document.querySelector("#adicionar-paciente");

btn.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona")
    console.log(form.altura.value)
    
    // cria váriaveis para pegar o valor dos input
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    // cria a linha 
    var pacienteTr = document.createElement("tr");

    // cria coluna
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    // altera o valor das tds criadas 
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    // Cria uma linha para objeto
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    // coloca tudo dentro da tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
})
