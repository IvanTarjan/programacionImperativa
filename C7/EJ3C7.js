
function subway(base,pan,queso,tomate,lechuga,cebolla,mayonesa,mostaza){
    let bases = {"pollo":150,"carne":200,"vegeteriano":100}
    let panes = {"blanco": 50,"negro":60,"sin gluten":75}
    let quesos = {true: 20,false:0}
    let tomates = {true: 15,false:0}
    let lechugas = {true: 10,false:0}
    let cebollas = {true: 15,false:0}
    let mayonesas = {true: 5,false:0}
    let mostazas = {true: 5,false:0}
    console.log(bases[base],panes[pan],quesos[queso],tomates[tomate],lechugas[lechuga],cebollas[cebolla],mayonesas[mayonesa],mostazas[mostaza]);
    console.log(bases[base]+panes[pan]+quesos[queso]+tomates[tomate]+lechugas[lechuga]+cebollas[cebolla]+mayonesas[mayonesa]+mostazas[mostaza]);


}
subway("carne", "sin gluten",true,true,true,true,true,true,true)