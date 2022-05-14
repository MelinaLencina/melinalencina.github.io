#Realizar un programa en el cual se ingresen dos numeros e informe si el primero
#es múltiplo del segundo. En caso contrario deberá generar un mensaje adecuado.

print("¡Bienvenido a la calculadora de múltiplos! \n")
numero1 = int(input("Ingrese el primer número: "))
numero2 = int(input("Ingrese el segundo número: "))

if (numero1 >= numero2 ) :

    if((numero1%numero2) == 0) :
        print(f"Los números {numero1} y {numero2} son múltiplos.")
    else :
        print(f"Los números {numero1} y {numero2} no son múltiplos")

else :

    if ((numero2%numero1) == 0) :
        print(f"Los números {numero2} y {numero1} son múltiplos.")
    else :
        print(f"Los números {numero2} y {numero1} no son múltiplos")



