var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

// buscou paciente e pegou a td e dentro da td pegou o peso
var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

// Altura do paciente
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;


// Imc do paciente

var imc = peso / (altura * altura);
var tdImc = paciente.querySelector(".info-imc");

// colocando o imc valor dentro da tag imc
// text content além de colocar uma string, ele pode pegar o valor
tdImc.textContent = imc;
console.log(paciente);
console.log(peso)
console.log(altura)
console.log(imc)