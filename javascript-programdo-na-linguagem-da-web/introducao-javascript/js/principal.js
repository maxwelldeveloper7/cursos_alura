var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoValido = true;
var alturaValida = true;

if(peso  <= 0 || peso >= 1000){
    console.log("peso inválido");
    pesoValido = false;
    tdImc.textContent = "Peso Inválido";
}

if(altura <= 0 || altura >= 3.0){
    console.log("altura inválida");
    alturaValida = false;
    tdImc.textContent = "Altura Inválida";
}

if(pesoValido && alturaValida){    
    var imc = peso/(altura * altura);
    tdImc.textContent = imc;
}

console.log(imc);