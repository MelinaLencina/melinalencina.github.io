//Creé una función que toma el input del usuario

function yourInput() {
  var input = document.getElementById("input").value;

//Creé un array vacío, al usar prompt(), el usuario va agregando datos al array (mediante push())
  var nombres = [];

  for (i = 0; i < input; i++) {
    var insert = prompt("Ingrese un nombre: ");
    nombres.push(insert);
  }

//Usando alert(), se muestra cada nombre ingresado por el usuario

  for (i = 0; i < nombres.length; i++) {
  alert(`Nombre Nº ${i + 1}: ${nombres[i]}`);
  }
}


//***********************************************************/

//Creé una función que toma el valor elegido con un input de tipo radio

function yourRadio() {
  var radio = document.segundo.paridad.value;
  
/*Creé un array vacío,
en el cual se almacenarán los numeros pares o impares, según corresponda, siguiendo el bucle for */

  var resultado = [];

  for (i = 1; i <= 100; i++) {

/*Creé dos variables que definirán si i es par y múltiplo de cinco.
En caso de usar un condicional, estas variables tomarían el valor de true o false */

    var dos = i % 2 == 0;
    var cinco = i % 5 == 0;

//Usé switch para comprobar los casos "par" e "impar"

    switch (radio) {

/*En este caso, se comprueba si las var dos y cinco son true;
si lo son, usando push() se pasa el valor de i al array */
      
    case "par":
        if (dos && cinco) {
          resultado.push(i);
        }
      break;

/*Sino, se comprueba si !dos (equivalente a i%2!=0) y cinco son true.
Al igual que antes, se pasa el valor de i al aray */
      
      case "impar":
        if (!dos && cinco) {
          resultado.push(i);
        }
        break;
    default :
        break;
    }
  }

/*En este bucle, muestro el resultado (array) en pantalla usando alert(). Quería que me muestre
todos los valores juntos, por eso bajé el length del array usando ese -10 en la condición */

  for (i = 0; i <= resultado.length - 10; i++) {
    alert(resultado);
  }
}


//******************************************************/

/*Creé una función que toma los siguientes valores: 
la opción (del select) elegida, y ambos números ingresados por el usuario */

function yourSelect() {
  var operacion = document.getElementById("opciones").value;
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);

/*Usando switch, se plantean tres cases, según lo que haya elegido el usuario.
Se evalúa el valor de la var operacion y se procede según cada caso*/

  switch (operacion) {

/*Suma: creé una variable que suma ambos números ingresados.
Luego, con alert(), muestra la operación y el resultado*/

    case "suma":
      var suma = num1 + num2;
      alert(
        `El resultado de la operación ${operacion} entre los números ${num1} y ${num2} es igual a ${suma}.`
      );
      break;

/*Resta: creé una variable que resta ambos números ingresados.
Luego, con alert(), muestra la operación y el resultado*/

    case "resta":
      var resta = num1 - num2;
      alert(
        `El resultado de la operación ${operacion} entre los números ${num1} y ${num2} es igual a ${resta}.`
      );
      break;

/*Multiplicación: creé una variable que multiplica ambos números ingresados.
Luego, con alert(), muestra la operación y el resultado*/

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

//*********************************************************************************** */

/* Utilicé alert() para mostrar el resultado de cada ejercicio, en lugar de document.write o innerHTML,
porque no quería perder el style del documento (aún estoy investigando cómo lograr eso). */

/* En el ejercicio 1, utilicé un bucle for como vimos en clase porque me pareció lo más simple y adecuado
para un array. 

En el ejercicio 2, podría haber usado lo visto en clase,
pero quise hacer mi propia función así que utilicé switch dentro del for (en lugar de if else).
No estoy segura si usar un switch dentro de un for es adecuado pero obtuve el mismo resultado así que
me pareció correcto. */ 