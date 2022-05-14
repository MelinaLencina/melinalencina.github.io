
function respuesta() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    
    

    document.getElementById("datos").innerHTML = 
    `Según los datos ingresados, su nombre
    <br />
    completo es ${nombre} ${apellido}
    <br />
    y tiene ${edad} años.`;

}