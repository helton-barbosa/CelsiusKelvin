import data from 'readline-sync'

console.log("==========================================")
console.log("=    CONVERSOR DE CELSIUS PARA KELVIN    =")
console.log("==========================================\n")

let grausCelsius = Number(data.question("Qual o valor em Celsius? "))
let paraKelvin = (grausCelsius + 273.15)

console.log(`==> ${grausCelsius}Cº equivale a ${paraKelvin}K.`)