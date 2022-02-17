let totalDeVezes = Number.parseInt(window.prompt('informe a quantidade de posições do seu array'));

let array = [];
let soma = 0;
let posicao = 0;

for(i = 0; i < totalDeVezes; i++){
    let auxiliar = Number.parseFloat(window.prompt(`informe o ${i+1}° valor`));
    array.push(auxiliar);
}

for(let i of array){
    
    soma += i;
    window.document.write("<p>" + ` posicão = ${posicao} --- valor = ${i} --- ao quadrado = ${Math.pow(i,2)} --- ao cubo ${Math.pow(i,3)}`+ "</p> ");
    posicao++;
}


window.document.write("<p>" + "soma = " + soma + "</p> ");

window.document.write("<p>" + "media = " + soma / array.length +"</p>");