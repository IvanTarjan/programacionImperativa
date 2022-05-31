// Micro desafio 1: Resultado 30
// Micro desafio 2 :resultados 20

let pulgToCm = pulg => pulg * 2.54;
console.log(pulgToCm(5));

let stringToUrl = palabra => `http://www.${palabra}.com`;
console.log(stringToUrl('pagina'));

let admiracion = frase => `${frase}!`;
console.log(admiracion("Frase muy buena"));

let edadPerro = hombre => hombre * 7;
console.log(edadPerro(8));

let pagoHora = mensual => mensual / 40;
console.log(pagoHora(40000));

let imc = (pesokg, alturamts) => pesokg / (alturamts*alturamts) ;
console.log(imc(68, 1.74));

let mayusculainnator = frase2 => frase2.toUpperCase();
console.log(mayusculainnator('Probando mayusculainnator'));

