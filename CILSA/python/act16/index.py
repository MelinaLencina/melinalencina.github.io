#Desarrollar una función que realice la división de dos numeros, en caso de ser posible devuelve el resultado.
#La función debe contemplar el tratamiento de excepciones.
#Realizar un programa que valide el comportamiento de la función

def division(num1,num2):
    try:
        return num1/num2
    except ZeroDivisionError:
        return 'El denominador no puede ser 0'
    except TypeError:
        return 'Solo se admiten numeros'
    except:
        return 'Ocurrió un error inesperado, intentelo nuevamente'

print(division(4,'python'))
print(division(2,0))
print(division(7,2))