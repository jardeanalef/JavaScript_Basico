// VARIÁVEIS COM NUMEROS
var operador = 100;
var operando = 50;

var resultado = operador * operando;

console.log(resultado)

// VARIÁVEIS COM LETRAS
var nome = "jardean";
var sobrenome = "alef";

var nomeCompleto = nome +" "+sobrenome;

console.log(nomeCompleto);

// CONDICIONAIS (SE, SENÃO)
var nome = "jardean";

if (nome === "jardean") {
    console.log("legal! seu nome é esse mesmo.");
} else {
    console.log("que pena! seu nome não é jardean");
}

//CONDICÃO CASO
var nome = "joao";

switch (nome) {
    case "joao":
        console.log("Legal! você é o joao mesmo!");
        break;
    case "jardean":
        console.log("ha! Você tambem serve!");
        break;
    default:
        console.log("que pena! Você não é quem eu estou procurando");

}


