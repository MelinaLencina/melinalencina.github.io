#Retomar el ejercicio del desafío anterior pero solo cargar en la lista aquellas notas que estén entre  6 y 10 (inclusive)
#Mostrar el contenido de cada uno de los recursos en la lista

notas = []
cantNotas = int(input('Ingrese cantidad de notas a cargar: '))
for i in range(cantNotas):
    nota = int(input('Ingrese la nota: '))
    if nota>= 6 and nota <=10:
        notas.append(nota)

print('Las notas aprobadas son: ')
for nota in notas:
    print(nota)