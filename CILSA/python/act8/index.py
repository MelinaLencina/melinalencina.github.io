# Realizar el programa del desafio 7 pero implementarlo mediante la estructura for

max = int(input("Ingrese un numero"))
for i in range(0,5):
  num = int(input("Ingrese un numero"))
  if (num!=0):
    if (num > max):
      max = num
  else :
    break

print("El maximo es: ",str(max))