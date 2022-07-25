#Retomar el desafío anterior e indicar cuantos y que DNI superan el valor de 40 millones.

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
c = 0
for i in range(len(personas)):
    if personas[i]['dni'] > 40000000:
        print(f"{personas[i]['dni']} supera 40000000")
        c += 1