from abc import ABC, abstractclassmethod
from datetime import datetime


class ManipuladorDeLog(ABC):
    @classmethod
    @abstractclassmethod
    def log(cls, msg):
        raise NotImplementedError


class LogEmArquivo(ManipuladorDeLog):
    @classmethod
    def log(cls, msg):
        with open('log.txt', 'w') as file:
            file.write(msg)


class LogEmTela(ManipuladorDeLog):
    @classmethod
    def log(cls, msg):
        print(msg)


class Log():
    def __init__(self, manipuladores):
      self.__manipuladores = set(manipuladores)

    
    def info(self, msg):
        self.__log('INFO', msg)

    def alerta(self, msg):
        self.__log('ALERTA', msg)

    def erro(self, msg):
        self.__log('ERRO', msg)

    def debug(self, msg):
        self.__log('DEBUG', msg)
    
    def __log(self, nivel, msg):
        for manipulador in self.__manipuladores:
            manipulador.log(self.__formatar(nivel, msg))

    
    def __formatar(self, nivel, msg):
        data = datetime.now().strftime('%d/%m/%Y %H:%M:%S')
        return f'[{nivel} - {data}]: {msg}'


log_em_tela = LogEmTela()
log_em_Arquivo = LogEmArquivo()
log = Log([log_em_tela, log_em_Arquivo])
log.info('Hello')