#Implementar una clase Calculadora que defina los métodos:
#Sumar, Restar, Multiplicar y Dividir
#En lo posible realice tratamiento de excepciones.
#Crear a continuación un programa que pruebe la clase Calculadora

class Calculadora:
    def __init__(self, numero1, numero2, signo):
        self.numero1 = numero1
        self.numero2 = numero2
        self.signo = signo

    def suma(self, n1, n2):
        return n1 + n2

    def resta(self, n1, n2):
        return n1 - n2

    def multiplicacion(self, n1, n2):
        return n1 * n2

    def division(self, n1, n2):
        try:
            return float(n1 / n2)
        except ZeroDivisionError:
            print('División por 0')

    def resultado(self, numero1, numero2, signo):
        if self.signo == '+':
            print(self.suma(numero1, numero2))
        elif self.signo == '-':
            print(self.resta(numero1, numero2))
        elif self.signo == '*':
            print(self.multiplicacion(numero1, numero2))
        elif self.signo == '/':
            print(self.division(numero1, numero2))
        else:
            print("Caracter no válido")


def entrada():
    try:
        return int(input('Ingresa un número: '))
    except ValueError:
        print('Ingresa un número válido')


def entradaSigno():
    return input('Ingresa signo: ')


numero1 = entrada()
signo = entradaSigno()
numero2 = entrada()
calculadora = Calculadora(numero1, numero2, signo)
calculadora.resultado(numero1, numero2, signo)
