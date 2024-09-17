class Auto {

    #_color
    #_precio
    #_marca
    #_fecha

    constructor(marca, color, precio, fecha) {
        this.#_marca = marca
        this.#_color = color
        this.#_precio = precio
        this.#_fecha = fecha
    }

    agregarImpuestos(impuesto) {
        this.#_precio += impuesto
    }

    static mostrarAuto(auto) {
        console.log(`Marca: ${auto.#_marca}, Color: ${auto.#_color}, Precio: ${auto.#_precio}, Fecha: ${auto.#_fecha}`)
    }

    equals(auto) {
        return this.#_marca === auto.#_marca
    }

    static add(auto1, auto2) {
        if (auto1.#_marca === auto2.#_marca && auto1.#_color === auto2.#_color) {
            return auto1.#_precio + auto2.#_precio
        } else {
            console.log("los autos no son de la misma marca o color")
            return 0
        }
    }
}

export { Auto }
