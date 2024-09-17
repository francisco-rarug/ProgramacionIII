class Usuario {
    constructor(nombre, clave, mail) {
        this.nombre = nombre
        this.clave = clave
        this.mail = mail
    }
}

class RegistroUsuarios {
    constructor() {
        this.usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
    }

    registro(nombre, clave, mail) {
        const nuevoUsuario = new Usuario(nombre, clave, mail)
        this.usuarios.push(nuevoUsuario)
        localStorage.setItem("usuarios", JSON.stringify(this.usuarios))
    }

    listado() {
        console.log("usuarios registrados:", this.usuarios)
    }

    login(mail, clave) {
        const usuario = this.usuarios.find(user => user.mail === mail)
        if (usuario) {
            if (usuario.clave === clave) {
                console.log("verificado")
            } else {
                console.log("error en los datos")
            }
        } else {
            console.log("usuario no registrado")
        }
    }
}

const registro = new RegistroUsuarios()
registro.registro("francisco", "12345", "frarug@mail.com")
registro.registro("micaela", "hola123", "mica@mail.com")

registro.listado()

registro.login("frarug@mail.com", "12345")
registro.login("mica@mail.com", "hola")
