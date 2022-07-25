#Cargar un conjunto de notas utilizando una lista. Mostrar el contenido de cada uno de los recursos en la lista

notas = []
cantNotas = int(input('Ingrese cantidad de notas a cargar: '))
for i in range(cantNotas):
    nota = input('Ingrese la nota: ')
    notas.append(nota)

print('Las notas cargadas son: ')
for nota in notas:
    print(nota)