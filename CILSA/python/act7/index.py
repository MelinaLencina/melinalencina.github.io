# Realizar un programa en el cual se ingresen numeros enteros y se obtenga el mayor de ellos.
# Se desconoce cuantos numeros serán ingresados pero se sabe que cuando se ingrese el valor 0, el programa finalizará indicando el máximo número cargado.

num = int(input("Ingrese un número: "))
mayor = 0

while num != 0  and num >= mayor: 
    num = int(input("Ingrese un número: "))
    mayor = num;


print(f"El número mayor ingresado es: {mayor}")
