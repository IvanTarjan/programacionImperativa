const prompt = require('prompt-sync')({sigint: true})

let sumar = (n1, n2) => n1 + n2;

let restar = (n1, n2) => n1 - n2;

let multiplicar = (n1, n2) => n1 * n2;

let dividir = (n1, n2) => n1 / n2;

console.log('-------------- Testeo de Operaciones / Calculadora --------------')

console.log(sumar(2,2));
console.log(restar(4,2));
console.log(multiplicar(2,2));
console.log(dividir(4,2));
console.log(dividir(4,0));

let cuadradoDeUnNumero = numero => multiplicar(numero, numero);
let promedioDeTresNumeros = (n1,n2,n3) => dividir(sumar(sumar(n1,n2),n3),3)
let calcularPorcentaje = (n1, n2) => multiplicar(dividir(n1,100), n2)
let generadorDePorcentaje = (n1, n2) => dividir(multiplicar(n1, 100), n2);
