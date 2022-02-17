let texto = window.prompt( "Digite um texto um texto")


window.document.write("<p>" + `Em maisculo: ${texto.toLocaleUpperCase()}`+ "</p> ");
window.document.write("<p>" + `Em minusculo: ${texto.toLocaleLowerCase()}`+ "</p> ");
window.document.write("<p>" + `Texto quebrado com split: ${texto.split("")}`+ "</p> ");

