function validar() {
    let nombre, edad, genero

    nombre = document.getElementById('nombre').value
    edad = document.getElementsById('edad').value
    genero = document.getElementById('genero').value

    if (edad<18) {
        alert("No tienes permiso de ingresar")
    else
        if (genero=="Hombre")
            alert("Hola "+nombre+" para ingresar debes pagar #35,000 pesos.")
        else
            alert("Hola "+nombre+" para ingresar debes pagar #20,000 pesos.")

    }

}