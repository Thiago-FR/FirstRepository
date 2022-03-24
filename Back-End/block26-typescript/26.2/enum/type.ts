type bird = {
  cor: string,
  comprimentoBico: string,
  tamanhoPassaro: string,
  canta: boolean,
};

type address = {
  rua: string,
  numero: number,
  cep: number,
  bairro: string,
  cidade: number,
  estado: string
}

type sum = (x: number, y:number) => number;

const RG: number | string = '123456';

type SO = "linux" | "mac os" | "windows";

type Vowels = "a" | "e" | "i" | "o" | "u";