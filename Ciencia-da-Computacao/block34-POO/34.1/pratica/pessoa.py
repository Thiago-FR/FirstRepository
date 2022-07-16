from liquidificador import Liquidificador

liquidificador_vermelho = Liquidificador("Vermelho", 250, 220)

# print("Esta ligado? ", liquidificador_vermelho.esta_ligado())

# liquidificador_vermelho.ligar(1)

# print("E Agora? ", liquidificador_vermelho.esta_ligado())


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None

    
    def comprar_liquidificador(self, liquidificador: Liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador


    def __str__(self):
        return f""""
            - Nome: {self.nome}
            - Saldo na Conta: {self.saldo_na_conta}
            - Liquidificador: {self.liquidificador}
        """


pessoa_cozinheira = Pessoa("Thiago", 1000)
pessoa_cozinheira.comprar_liquidificador(liquidificador_vermelho)

print(pessoa_cozinheira)