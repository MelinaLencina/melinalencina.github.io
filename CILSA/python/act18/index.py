#Integrar en un único programa el filtrado de información, en el cual el usuario indicará si se filtra por apellido, por barrio o por edad. A su vez podrá pedirse un ingreso por rango de edades.

apellidos = []

barrios = []

edades = []



data = open('datos.csv','r')



for linea in data:

  datos = linea.split(',')

  apellidos.append(datos[0])
  

  barrios.append(datos[1])

  edades.append(datos[2])

apellidos.pop(0)
barrios.pop(0)
edades.pop(0)




data.close()
opcion = int(input('Ingrese por que desea filtrar: 1 - APELLIDOS | 2 - BARRIOS | 3 - EDADES: '))
while opcion < 1 or opcion > 3:
    print('Opcion no valida, intentelo nuevamente')
    opcion = int(input('Ingrese por que desea filtrar: 1 - APELLIDOS | 2 - BARRIOS | 3 - EDADES: '))

print('-------------------------')


if opcion == 1:
    apellidos.sort()
    for i in range(len(apellidos)):

         print(apellidos[i] + " - " + barrios[i] + " - " + edades[i],end='')

if opcion == 2:
    barrios.sort()
    for i in range(len(barrios)):

         print(apellidos[i] + " - " + barrios[i] + " - " + edades[i],end='')


if opcion == 3:
    edades.sort()
    rangomin=int(input('Ingrese el rango minimo de edad a buscar: '))
    rangomax=int(input('Ingrese el rango maximo de edad a buscar: '))
    for i in range(len(edades)):
        edad= int(edades[i])
    
        if edad>=rangomin and edad<=rangomax:
             print(apellidos[i] + " - " + barrios[i] + " - " + edades[i],end='')

print('')