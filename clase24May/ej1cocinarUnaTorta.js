const prompt = require("prompt-sync")({sigint: true});

let hayMezcla = prompt('Hay mezcla? ') ;
let hayHuevos = prompt('Hay Huevos? ') ;
let hayLeche = prompt('Hay Leche? ') ;
const cantidadHuevosNecesarios = 3
const cantidadLecheNecesaria = 400
const temperaturaHorno = 180
const tamanoMolde = 20
const tiempoCoccion = 60
let moldeEnmantecado = prompt('Esta el molde enmantecado? ')

console.log(hayMezcla);
console.log(hayHuevos);
console.log(hayLeche);
console.log(cantidadHuevosNecesarios);
console.log(cantidadLecheNecesaria);
console.log(temperaturaHorno);
console.log(tamanoMolde);
console.log(tiempoCoccion);
console.log(moldeEnmantecado);