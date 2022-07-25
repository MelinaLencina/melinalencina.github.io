#Desarrollar una función que reciba el nombre de una persona y un valor entero.
#Si el valor entero es 0, imprimirá: "hola" y el nombre
#Si el valor entero es distinto de 0 , imprimirá: "chau" y el nombre

def saludar(nombre,numero):

    if numero == 0:
        print(f'Hola {nombre}')
    else:
        print(f'Chau {nombre}')

saludar('Juancarlos',0) # Hola Juancarlos
saludar('Eustebio',29) # Chau Eustebio