const textb = "Bienvenido a Creador de personajes Ukitas"
const textb1 = "Hasta luego, Gracias por usar el programa de Ukitas"

const texto_r1 = "¡ERROR! Jugador no encontrado, reintente nuevamente: "
const texto_1 = "Ingresa nombre del jugador: "
const texto_2 = "Ingrese el nivel del jugador: "
const texto_3 = "Ingrese la experiencia del jugador: "
const texto_4 = "Desea ingresar un nuevo jugador (1), Eliminar un jugador (2), Salir (3): "
const texto_5 = "Desea ingresar un nuevo accesorio (1), Eliminar un accesorio (2), Salir(3): "
const texto_a = "Ingresa el accesorio del jugador: "
const texto_b = ""
class Party {
    constructor() {
        this.lista = {}
        // definimos la propiedad lista para trabajar
    }   // Hacemos un metodos o funciones dentro de esta clase
    lista_total() {
        console.log(textb)
        let op = prompt(`${texto_4}`)
        // op = operación 1
        // si es op es = 1, entonces ingresamos  al bucle
        while (op == 1 || op == 2) {
            if (op == 1) {
                let jugador = prompt(`${texto_1}`)
                // definimos la variable jugador y solicitamos ingreso de datos
                let nivel = parseInt(prompt(`${texto_2}`))
                // definimos la variable nivel y solicitamos ingreso de datos
                // experiencia siempre sera 0, que es el inicio
                this.lista[jugador] = {}
                this.lista[jugador] = ([nivel, 0])
                // se ingresa dentro de este diccionario clave nombre del jugador, valor su nivel
                // consultamos que desea hacer
            } else if (op == 2) {
                console.log(`Estos son los Jugadores ${Object.keys(this.lista)}`)
                let aeliminar = prompt(`${texto_1}`)
                if (aeliminar in Object.keys(this.lista)) {
                    delete this.lista[aeliminar]
                }
            } op = prompt(`${texto_4}`)
        }

    } imprimir() {
        let largo = Object.keys(this.lista)
        largo = largo.length
        if (largo > 0) {
            let c = 1
            for (let llave in this.lista) {
                console.log(`Jugador ${c} ${llave}, nivel ${this.lista[llave][0]}, experiencia ${this.lista[llave][1]}, accesorios ${this.lista[llave][2]}`)
                c += 1
            }
        }
    } accesorios() {
        console.log(`Estos son los Jugadores ${Object.keys(this.lista)}`)
        let op = prompt(`${texto_5}`)
        // op = operación 1
        // consultamos si desea tener un nuevo ingreso
        // si es op es = 1, entonces ingresamos  al bucle
        while (op == 1 || op == 2) {
            if (op == 1) {
                let jugador = prompt(`${texto_1}`)
                if (jugador in Object.keys(this.lista)) {
                    let accesorio = prompt(`${texto_a}`))
                    this.lista[jugador] = ([accesorio])
                } else {
                    console.log(texto_r1)
                    console.log(`Estos son los Jugadores ${Object.keys(this.lista)}`)
                    jugador = prompt(`${texto_1}`)
                }
            } else if (op == 2) {
                console.log(`Estos son los Jugadores ${Object.keys(this.lista)}`)
                let jugador = prompt(`${texto_1}`)
                if (jugador in Object.keys(this.lista)) {
                    console.log(`Estos son los accesorios ${this.lista[jugador]}`)
                }
                console.log(`Estos son los Jugadores ${this.lista}`)
                if (llave == aeliminar) {
                    delete this.lista[llave]
                }
            } else if (op > 2) {
                console.log(textb)
            }
        }
    }
}
                
const fiesta = new Party()
fiesta.lista_total()
fiesta.accesorios()
fiesta.imprimir()