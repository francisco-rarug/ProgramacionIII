import { Auto } from './Clase05/auto.js'

class Garage {
    #_razonSocial
    #_precioPorHora
    #_autos

    constructor(razonSocial, precioPorHora) {
        this.#_razonSocial = razonSocial
        this.#_precioPorHora = precioPorHora
        this.#_autos = []
    }

    mostrarGarage() {
        console.log(`razon social: ${this.#_razonSocial}, precio por Hora: ${this.#_precioPorHora}`)
        console.log("Autos en el garaje:")
        this.#_autos.forEach(auto => Auto.mostrarAuto(auto))
    }

    equals(auto) {
        return this.#_autos.includes(auto)
    }

    add(auto) {
        if (!this.equals(auto)) {
            this.#_autos.push(auto)
        } else {
            console.log("el auto ya está en el garaje.")
        }
    }

    remove(auto) {
        if (this.equals(auto)) {
            this.#_autos = this.#_autos.filter(a => a !== auto)
        } else {
            console.log("el auto no esta en el garaje.")
        }
    }
}

export { Garage }
