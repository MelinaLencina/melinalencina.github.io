#Utilizar el código del desafio anterior trabajando los datos a través de un diccionario.
#Generar un archivo json con los datos del diccionario planteado.
#Luego verificar el trabajo a partir de la lectura de dicho archivo y mostrarlo en un diccionario.

import json
from builtins import print


def leeArchivo(personas):
    try:
        archivo = open("Personas.csv", "r", encoding='utf-8')
        label = archivo.readline()
        for linea in archivo:
            contenido = linea.split(";")
            personas.append({'Apellido': contenido[0], 'Nombre': contenido[1], 'Barrio': contenido[2], 'Edad': int(contenido[3])})
        archivo.close()
        personas.pop(0)
    except IOError:
        print("El archivo no existe.")


def muestraLista1(personas):
    apellido = input("Ingrese apellido a buscar: ")
    for persona in personas:
        if apellido.upper() == persona.get('Apellido').upper():
             print(persona)


def muestraLista2(personas):
    nombre = input("Ingrese nombre a buscar: ")
    for persona in personas:
        if nombre.upper() == persona.get('Nombre').upper():
             print(persona)


def muestraLista3(personas):
    barrio = input("Ingrese barrio a buscar: ")
    for persona in personas:
        if barrio.upper() == persona.get('Barrio').upper():
            print(persona)


def muestraLista4(personas):
    edad1 = int(input("Ingrese edad mínima a buscar: "))
    edad2 = int(input("Ingrese edad máxima a buscar: "))
    for persona in personas:
        if edad1 <= persona.get('Edad') <= edad2:
            print(persona)


def menu():
    print("Menú de opciones\n")
    print("1. Filtrar por Apellido\n")
    print("2. Filtrar por Nombre\n")
    print("3. Filtrar por Barrio\n")
    print("4. Filtrar por Edad\n")
    print("5. Persistir mediante JSON\n")
    print("6. Despersistir JSON\n")
    print("0. Salir\n")
    op = int(input("Ingrese una opción: "))
    while op<0 or op>6:
        print("Opción incorrecta.\n")
        op = int(input("Ingrese una opción: "))
    return op


def persistencja(personas):
    try:
        with (open("Personas.json", "w", encoding='utf-8')) as archivo:
            json.dump(personas, archivo, indent=4)
        archivo.close()
    except IOError:
        print("El archivo no se pudo crear.")


def despersistencja():
    try:
        with (open("Personas.json", "r", encoding='utf-8')) as archivo:
            personas = json.loads(archivo.read())
        archivo.close()
        return personas
    except IOError:
        print("El archivo no existe.")


personas = [{}]
leeArchivo(personas)
op = menu()
while op != 0:
    if op == 1:
        muestraLista1(personas)
    elif op == 2:
        muestraLista2(personas)
    elif op == 3:
        muestraLista3(personas)
    elif op == 4:
        muestraLista4(personas)
    elif op == 5:
        persistencja(personas)
    elif op == 6:
        personas2 = despersistencja()
        print(personas2)
    op = menu()
