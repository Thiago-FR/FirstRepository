
class Eletrodomestico:
    def __init__(self, cor, potencia, voltagem, preco):
        self.preco = preco
        self.__cor = cor
        self.__potencia = potencia
        self.__voltagem = voltagem
        self.__ligado = False
        self.__aperagem_atual_no_motor = 0


    def ligar(self, velocidade):
        self.__velocidade = velocidade
        self.__amperagem_atual_no_motor = (
            (self.__potencia / self.__voltagem) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligar = False
        self.__velocidade = 0

    
    def esta_ligado(self):
        self.__ligado


class Liquidificador(Eletrodomestico):
    def __init__(self, cor, potencia, voltagem, preco):
        super().__init__(cor, potencia, voltagem, preco)


class Geladeira(Eletrodomestico):
    def __init__(self, cor, potencia, voltagem, preco, qtd_portas=1):
        super().__init__(cor, potencia, voltagem, preco)

        self.qtd_porta = qtd_portas


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.eletrodomestico = []


    def comprar_eletrodomestico(self, eletrodomestico: Eletrodomestico):
        if eletrodomestico.preco >= self.saldo_na_conta:
            self.saldo_na_conta -+ eletrodomestico.preco
            self.eletrodomestico.append(eletrodomestico)