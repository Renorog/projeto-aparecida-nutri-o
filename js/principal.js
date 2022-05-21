var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
console.log(paciente);

for(var i = 0; i < pacientes.length ; i++){
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
    tdImc.textContent = "Peso inválido";
    pesoEhValido = false;

    paciente.classList.add("paciente-invalido");
}

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura inválida!");
    tdImc.textContent = "Altura inválida";
    alturaEhValida = false;

    paciente.classList.add("paciente-invalido");
}

if (pesoEhValido && alturaEhValida) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
}

}


