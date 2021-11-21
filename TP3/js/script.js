function yourInput() {
  var input = document.getElementById("input").value;
  var nombres = [];

  for (i = 0; i < input; i++) {
    var insert = prompt("Ingrese un nombre: ");
    nombres.push(insert);
  }

  for (i = 0; i < nombres.length; i++) {
  alert(`Nombre Nº ${i + 1}: ${nombres[i]}`);
  }
}




//***********************************************************/

function yourRadio() {
  var radio = document.segundo.paridad.value; 
  var resultado = [];

  for (i = 1; i <= 100; i++) {
    var dos = i % 2 == 0;
    var cinco = i % 5 == 0;
  switch (radio) {
    case "par":
        if (dos && cinco) {
          resultado.push(i);
        }
      break;
    case "impar":
        if (!dos && cinco) {
          resultado.push(i);
        }
        break;
    default :
        break;
  }}
  
  for (i = 0; i <= resultado.length - 10; i++) {
    alert(resultado);
  }
}


//******************************************************/

function yourSelect() {
  var operacion = document.getElementById("opciones").value;
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  switch (operacion) {
    case "suma":
      var suma = num1 + num2;
      alert(
        `El resultado de la operación ${operacion} entre los números ${num1} y ${num2} es igual a ${suma}.`
      );
      break;

    case "resta":
      var resta = num1 - num2;
      alert(
        `El resultado de la operación ${operacion} entre los números ${num1} y ${num2} es igual a ${resta}.`
      );
      break;

    case "multiplicación":
      var multip = num1 * num2;
      alert(
        `El resultado de la operación ${operacion} entre los números ${num1} y ${num2} es igual a ${multip}.`
      );
      break;

    default:
      break;
  }
}
