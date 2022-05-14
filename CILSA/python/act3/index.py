#Realizar un programa en el cual se ingrese un numero entero e informe si es par.
#En caso que no sea par también deberá informar al respecto.

print("¡Bienvenido a la calculadora de pares e impares! \n")
numero = int(input("Ingrese un número: "))

if ((numero % 2) == 0) :
    print(f"El número {numero} es par.") 
else : 
    print(f"El número {numero} es impar.")
