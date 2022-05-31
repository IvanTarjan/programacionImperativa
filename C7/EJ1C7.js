function puedeSubir (altura, vieneAcompanado, penalizado){
    if (altura >= 140 && altura < 200 && !penalizado){
    return true
    } else if (altura >= 120 && altura < 140 && vieneAcompanado && !penalizado){
    return true
    } else {
    return false
    }
}
console.log(puedeSubir(130,true,false)); 