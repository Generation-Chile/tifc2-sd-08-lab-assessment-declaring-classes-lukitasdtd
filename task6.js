const prompt = import("prompt-sync");

const texto_1 = "Ingresa nombre del jugador: "
const texto_2 = "Ingrese el nivel del jugador: "
const texto_3 = "Ingrese la experiencia del jugador: "
const texto_4 = "Desea ingresar un nuevo jugador (1), Eliminar un jugador (2), Salir (3): "
class Party {
    constructor() {
        this.lista = {}
        // definimos la propiedad lista siendo "l" la lista ingresada para trabajar
    }   // Hacemos un metodos o funciones dentro de esta clase
    lista_total() {
        let op = 1
        let c = 1
        // op = operación 1
        // consultamos si desea tener un nuevo ingreso
        // si es op es = 1, entonces ingresamos  al bucle
        while (op == 1) {
            let jugador = prompt(`${texto_1}`)
            let nivel = parseInt(prompt(`${texto_2}`))
            let exp = parseInt(prompt(`${texto_3}`))
            this.lista[jugador] = {}
            this.lista[jugador] = ([nivel,exp])
            // se ingresa dentro de este diccionario clave nombre del jugador, valor su nivel
            c += 1
            op = prompt(`${texto_4}`)
             // si op = 1 re-ingresamos al bucle
              // si op = 2 ingresamos a la eliminación de un dato
            if (op == 2) {
                console.log(`Estos son los Jugadores ${Object.keys(this.lista)}`)
                let aeliminar = prompt(`${texto_1}`)
                for (let llave in this.lista) {
                    console.log(`Estos son los Jugadores ${this.lista}`)
                    if (llave == aeliminar) {
                        delete this.lista[llave]
                    }
                }
            }
        }

    } imprimir() {
        for (let llave in this.lista) {
            console.log(`Jugador ${llave}, nivel ${this.lista[llave][0]}, experiencia ${this.lista[llave][0]}`)
        }
    }
}
const fiesta = new Party()
fiesta.lista_total()
fiesta.imprimir()