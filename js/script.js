// Declaro una funcion que devolvera un mensaje con las opciones seleccionadas
function reservar() {

    // Primero declaro todas las variables de los elementos que necesito recuperar del documento
    let nombre = document.getElementById("nombre")
    let apellido = document.getElementById("apellido")
    let adultos = document.getElementById("adultos")
    let niños = document.getElementById("niños")
    let comida = document.getElementsByName("comida")

    // Bucle for que servira para recorrer la seleccion de los radio button
    // y devolvera el que esta seleccionado (.checked)
    for (let i = 0; i < comida.length; i++) {
        if (comida[i].checked) {
            comida = comida[i]
        }
    }

    // Mensaje creado con template strings para poder darle el formato
    // y agregar las variables en la misma plantilla
    let mensaje = `
    Datos de la reserva
    Nombre: ${nombre.value}
    Apellido: ${apellido.value}
    Adultos: ${adultos.value}
    Niños: ${niños.value}
    Comida: ${comida.value}
    `
    // La función devuelve un alert con el mensaje
    alert(mensaje)
}