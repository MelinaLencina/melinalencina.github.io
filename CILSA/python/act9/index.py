# Implementar control de excepciones a partir del programa desarrollado en el desafio anterior

import time
numeros = []

def cual_es_mayor():
    try:
        for numero in range(100):
            numero = float(input("\x1b[1;32m"+"Ingrese un numero (Escriba 0 para terminar el ciclo) \n"))
            numeros.append(numero)
            if numero == 0:
                break

    except ValueError:
        print("\x1b[1;31m" + "Ingrese un numero \n", "\x1b[1;34m" + " Reiniciando...")
        time.sleep(2)
        cual_es_mayor()

    else:
        print("\x1b[1;33m"+"Los numeros son:", numeros)
        print("\x1b[1;33m"+"El numero mayor es:", max(numeros))


cual_es_mayor()