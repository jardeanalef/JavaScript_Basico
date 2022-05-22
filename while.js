var achou = false;

var numeroSorteado = 10;
var possivelValor = 0;

while (!achou) {
    possivelValor +=1; //possivelValor = possivelValor + 1;
    if (numeroSorteado === possivelValor) {
        achou = true;
    } else {
        console.log("Possivel valor não corresponde ao numero sorteado " + possivelValor);
    }
}