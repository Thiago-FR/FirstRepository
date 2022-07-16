class Tv:
    def __init__(self, tamanho):
        self.tamanho = tamanho
        self.__volume = 50
        self.__canal = 1
        self.__ligada = False
        self.__max_volume = 99
        self.__min_volume = 0
        self.__max_canal = 99
        self.__min_canal = 1

    
    def aumentar_volume(self):
        if self.__volume < self.__max_volume:
            self.__volume += 1


    def diminuir_volume(self):
        if self.__volume > self.__min_volume:
            self.__volume -= 1


    def modificar_canal(self, canal):
        if self.__min_canal < canal < self.__max_canal:
              self.__canal = canal        


    def ligar_desligar(self):
        self.__ligada = False if self.__ligada else True


    def esta_ligada(self):
        return self.__ligada


    def canal(self):
        return self.__canal

