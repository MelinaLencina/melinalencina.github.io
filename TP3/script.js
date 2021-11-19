function yourInput() {
  var input = document.getElementById("input").value;
  var nombres = [];

  for (i = 0; i < input; i++) {
    var insert = prompt("Ingrese un nombre: ");
    nombres.push(insert);
  }

  for (i = 0; i < nombres.length; i++) {
    document.write(`Nombre Nº ${(i+ 1)}: ${nombres[i]}<br>`);
  }
}

//***********************************************************/

function yourRadio() {
  var radio = document.getElementById("paridad").value;
  var resultado = [];


  switch (radio) {
      case ("par" && i % 5 == 0 ) : 
      for (i=1;i<=100;i++){
            resultado.push(i)};
            break;
        case ("impar" && i % 5 == 0 ) :
            for (i=1;i<=100;i++){
            resultado.push(i)};
          break;
  
      default:
          break;
  }
  
//   if (radio == "par") {
//     for (i = 1; i <= 100; i++) {
//       if (i % 2 == 0 && i % 5 == 0) {
//         resultado.push(i);
//       }
//     }
//   } else {
//     for (i = 1; i <= 100; i++) {
//       if (i % 2 != 0 && i % 5 == 0) {
//         resultado.push(i);
//       }
//     }
//   }

  for (i = 0; i <=(resultado.length - 1); i++) {
    document.write(resultado[i] + " ");
  }
}


//******************************************************/

function yourSelect () {

var operacion = document.getElementById("opciones").value;
var num1 = parseInt(document.getElementById("num1").value);
var num2 = parseInt(document.getElementById("num2").value); 
    switch (operacion) {
        case "suma": 
        var suma = num1+num2;
        document.write(`El resultado de la operación ${operacion} entre los números ${num1} y ${num2} es igual a ${suma}.`);    
        break;
    
        case "resta": 
        var resta = num1-num2;
        document.write(`El resultado de la operación ${operacion} entre los números ${num1} y ${num2} es igual a ${resta}.`); 
        break;

        case "multiplicación":
        var multip = num1*num2;
        document.write(`El resultado de la operación ${operacion} entre los números ${num1} y ${num2} es igual a ${multip}.`); 
        break;

        default:
        break;
    }
}
 