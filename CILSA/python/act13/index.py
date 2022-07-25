#Desarrollar un programa que cree un diccionario con nombre, apellido y DNI.
#A continuación se deberá ingresar 3 personas con los datos y mostrar su contenido.

personas = [{'nombre': '', 'apellido': '', 'dni': ''},
    {'nombre': '', 'apellido': '', 'dni': ''},
    {'nombre': '', 'apellido': '', 'dni': ''}
    ]
for i in range(3):
    personas[i]['nombre'] = input('Ingresa el nombre: ')
    personas[i]['apellido'] = input('Ingresa el apellido: ')
    personas[i]['dni'] = int(input('Ingresa el DNI: '))
for persona in personas:
    print(persona)
