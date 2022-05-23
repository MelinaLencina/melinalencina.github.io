# Realizar un programa en el cual se ingrese: el limite inferior de un intervalo, el limite superior del mismo intervalo, Un valor entero

#Indicar si el valor entero ingresado en el punto 3 se encuentra dentro del intervalo definido por los valores del punto (1) y del punto (2).

limiteInf = int(input("Ingrese el límite inferior del intervalo: "))
limiteSup = int(input("Ingrese el límite superior del intervalo: "))
valor = int(input("Ingrese un valor entero: "))

if (valor >= limiteInf and valor <= limiteSup) :
    print(f"¡El valor ingresado se encuentra dentro del intervalo definido por los valores {limiteInf} y {limiteSup}!")
else :
    print(f"¡El valor ingresado no se encuentra dentro del intervalo definido por los valores {limiteInf} y {limiteSup}!")
