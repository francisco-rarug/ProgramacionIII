import { Auto } from './Clase05/auto.js' 
import { Garage } from './Clase05/garage.js'

let auto1 = new Auto("toyota", "rojo", 20000, new Date(2024, 0, 1))
let auto2 = new Auto("toyota", "azul", 22000, new Date(2024, 0, 5))

let garage = new Garage("garaje avellaneda", 1000)

garage.add(auto1)
garage.add(auto2)

garage.mostrarGarage()

garage.remove(auto1)
garage.mostrarGarage()
