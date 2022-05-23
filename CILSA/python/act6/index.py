# Realizar un programa donde se ingresen 5 numeros e informe el promedio de los numeros ingresados. Utilizar estructuras repetitivas


acum = 0
i = 0

for i in range(5) :
    nota = int(input("Ingrese una nota: "))
    acum += nota
    i += 1;


promedio = acum/i

print(f"Tu promedio entre las {i} notas ingresadas es de: {promedio}")