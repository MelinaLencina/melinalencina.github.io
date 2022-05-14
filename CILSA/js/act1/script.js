
function respuesta() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    
    

    document.getElementById("datos").innerHTML = 
    `Nombre: ${nombre}
    <br />
    Apellido: ${apellido}
    <br />
    Edad: ${edad} años`;

}