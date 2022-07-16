class Liquidificador:
    def __init__(self, cor, potencia, voltagem):
        self.__cor = cor
        self.__potencia = potencia
        self.__voltagem = voltagem
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__amperagem_atual_no_motor = 0
        self.preco = 500


    def ligar(self, velocidade):
        self.__velocidade = velocidade
        self.__amperagem_atual_no_motor = (
          (self.__potencia / self.__voltagem) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True


    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0


    def esta_ligado(self):
        return self.__ligado

    
    def __str__(self):
        return f""""
            - Ligado: {self.__ligado}
            - velocidade: {self.__velocidade}
            - Amperagem atual no motor: {self.__amperagem_atual_no_motor}
        """