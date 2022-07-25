#A partir del ejercicio 5 realizado en clase, modificar el programa para que muestre el nombre y la nota de los aprobados.
#Luego mostrará el nombre y la nota de los desaprobados

cant=int(input("Ingrese cantidad de alumnos: "))

notaAp=[]

notaDesap=[]

alumnosAp=[]

alumnosDesap=[]

for i in range (cant):

  numero=int(input("Ingrese nota: "))

  if numero>=6 and numero<=10:

    notaAp.append(numero)

    nombre=input("Ingresar nombre: ")

    alumnosAp.append(nombre)

  elif numero<6 and numero>=0:

    notaDesap.append(numero)

    nombre=input("Ingresar nombre: ")

    alumnosDesap.append(nombre)

print("Alumnos aprobados: ")

for indice, valor in enumerate(notaAp):

  print(alumnosAp[indice], valor)

print("Alumnos desaprobados: ")  

for indice, valor in enumerate(notaDesap):

  print(alumnosDesap[indice], valor)