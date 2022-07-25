#Realizar un programa que cargue 5 personas con sus datos, nombre, apellido y edad.
#Se debe almacenar en un diccionario y luego escribir un archivo separado por comas con los datos de cada registro del diccionario.

from builtins import print

personas = []
for i in range(5):
    personas.append({'nombre': input('Ingresa el nombre: '), 'apellido': input('Ingresa el apellido: '), 'edad': int(input('Ingresa la edad: '))})
try:
    contenido = open("Personas.csv", "w")
    for persona in personas:
        contenido.write(persona['nombre'] + ", " + persona['apellido'] + ", " + str(persona['edad']) + "\n")
    contenido.close()
except IOError:
    print("El archivo no se pudo generar")