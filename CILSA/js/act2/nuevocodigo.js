//La siguiente línea imprime por consola un saludo

console.log("¡Hola, mundo! Este es mi primer script");


/*Se detalla a continuación cómo insertar código JavaScript en un documento HTML,
utilizamos document.write() para insertar texto en HTML desde JS */

document.write(`La primera forma de insertar JavaScript en HTML es directa. <br>
Podés hacerlo utilizando la etiqueta script que debe envolver<br>
todo el código JS que escribas. Se puede agregar entre las<br>
etiquetas head o entre las etiquetas body. Dependiendo de dónde agregues el<br>
código JavaScript en tu archivo HTML, la carga será diferente. <br>
<hr />
Es mejor mantener el código JavaScript en archivos separados. Es por esto que <br>
la forma más aceptable de incluirlo en HTML es importando archivos externos. <br>
Se puede hacer referencia a estos archivos desde adentro de los documentos HTML,<br>
al igual que hacemos con los estilos de CSS; en el caso de JavaScript, <br>
se utiliza la etiqueta script con el atributo src (source = fuente), que tendrá<br>
como valor (entre comillas) el nombre de nuestro archivo externo .js.`);


//Esta alerta nos muestra un breve mensaje

alert(`Ver lo simple que es agregar "comillas dobles" y ‘comillas simples’`);