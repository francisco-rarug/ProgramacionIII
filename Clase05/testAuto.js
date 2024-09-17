import { Auto } from './Clase05/auto.js'  

let auto1 = new Auto("toyota", "rojo", 20000, new Date(2024, 0, 1))
let auto2 = new Auto("toyota", "azul", 22000, new Date(2024, 0, 5))

let auto3 = new Auto("toyota", "negro", 25000, new Date(2024, 0, 10))
let auto4 = new Auto("toyota", "negro", 28000, new Date(2024, 0, 15))


auto2.agregarImpuestos(1500)
auto3.agregarImpuestos(1500)
auto4.agregarImpuestos(1500)
let suma = Auto.add(auto1, auto2)
console.log(`suma de precios de auto1 y auto2: ${suma}`)

console.log(`auto1 es igual a auto2: ${auto1.equals(auto2)}`)
console.log(`auto1 es igual a auto3: ${auto1.equals(auto3)}`)

Auto.mostrarAuto(auto1)
Auto.mostrarAuto(auto3)
