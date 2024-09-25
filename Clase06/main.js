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
        const usuarioExistente = this.usuarios.find(user => user.mail === mail && user.clave === clave)

        if (usuarioExistente) {
            this.mostrarMensaje("El usuario ya está registrado con este correo y contraseña")
        } else {
            const nuevoUsuario = new Usuario(nombre, clave, mail)
            this.usuarios.push(nuevoUsuario)
            localStorage.setItem("usuarios", JSON.stringify(this.usuarios))
            this.mostrarMensaje("Usuario registrado con exito")
        }
    }

    login(mail, clave) {
        const usuario = this.usuarios.find(user => user.mail === mail)
        if (usuario) {
            if (usuario.clave === clave) {
                this.mostrarMensaje("Inicio de sesion exitoso")
            } else {
                this.mostrarMensaje("Clave incorrecta")
            }
        } else {
            this.mostrarMensaje("Usuario no registrado")
        }
    }

    mostrarMensaje(mensaje) {
        document.getElementById("mensaje").innerText = mensaje
        setTimeout(() => {
            document.getElementById("mensaje").innerText = ""
        }, 3000)
    }
}

const registro = new RegistroUsuarios()

document.getElementById("form-registro").addEventListener("submit", function(event) {
    event.preventDefault()
    const nombre = document.getElementById("nombre").value
    const mail = document.getElementById("mail").value
    const clave = document.getElementById("clave").value

    registro.registro(nombre, clave, mail)
    
    document.getElementById("form-registro").reset()
})

document.getElementById("form-login").addEventListener("submit", function(event) {
    event.preventDefault()
    const mail = document.getElementById("login-mail").value
    const clave = document.getElementById("login-clave").value

    registro.login(mail, clave)

    document.getElementById("form-login").reset()
})

document.getElementById("tab-registro").addEventListener("click", function() {
    document.getElementById("form-registro").classList.add("active")
    document.getElementById("form-login").classList.remove("active")
    document.getElementById("tab-registro").classList.add("active")
    document.getElementById("tab-login").classList.remove("active")
})

document.getElementById("tab-login").addEventListener("click", function() {
    document.getElementById("form-registro").classList.remove("active")
    document.getElementById("form-login").classList.add("active")
    document.getElementById("tab-registro").classList.remove("active")
    document.getElementById("tab-login").classList.add("active")
})