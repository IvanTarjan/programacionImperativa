let totalAPagar = (vehiculo, litrosConsumidos) => {
    if(vehiculo == "coche" && litrosConsumidos <=25){
        return "El total a pagar es: " + (litrosConsumidos * 86 + 50) + " pesos";
    }
    else if(vehiculo == "coche" && litrosConsumidos >25){
        return "El total a pagar es: " + (litrosConsumidos * 86 + 25) + " pesos";
    }
    else if(vehiculo == "moto" && litrosConsumidos <=25){
        return "El total a pagar es: " + (litrosConsumidos * 70 + 50) + " pesos";
    }
    else if(vehiculo == "moto" && litrosConsumidos >25){
        return "El total a pagar es: " + (litrosConsumidos * 70 + 25) + " pesos";
    }
    else if(vehiculo == "autobús" && litrosConsumidos <=25){
        return "El total a pagar es: " + (litrosConsumidos * 55 + 50) + " pesos";
    }
    else if(vehiculo == "autobús" && litrosConsumidos >25){
        return "El total a pagar es: " + (litrosConsumidos * 55 + 25) + " pesos";
    }
}
console.log(totalAPagar("autobús", 2));
