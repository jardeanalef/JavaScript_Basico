
function calcularImc(peso, altura) {
    var imc = peso / (altura * altura)
    return imc;
}

var imcJardean = calcularImc(50, 1.68);
var imcAmigo = calcularImc(60, 1.88);

console.log(imcJardean);
console.log(imcAmigo);