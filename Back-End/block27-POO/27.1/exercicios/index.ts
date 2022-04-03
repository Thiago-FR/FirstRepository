class Estudante {
  private _matricula: string;
  private _nome: string;
  private _notas: number[] = Array()
  private _trabalhos: number[] = Array(2);

  constructor(matricula: string, nome: string, notas: number[], trabalhos: number[]) {
    this._matricula = matricula;
    this._nome = nome;
    this._notas = notas;
    this._trabalhos = trabalhos;
  }

  get somaNotas() {
    return this._notas.reduce((acc, curr) => acc + curr);
  }

  get mediaNotas() {
    return this.somaNotas / this._notas.length;
  }
};

class Cliente {
  public nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

interface Item {
  nome: string,
  preco: number,
}

class Pedido {
  private _cliente: string;
  private _itens: Item[];
  private _pagamento: string;
  private _desconto: 0.1 | 0.3;

  constructor(cliente: string, itens: Item[], pagamento: string, desconto: 0.1 | 0.3) {
    this._cliente = cliente;
    this._itens = itens;
    this._pagamento = pagamento;
    this._desconto = desconto;
  }

  get total() {
    return this._itens.reduce((curr, acc) => curr + acc.preco, 0)
  }

  get withDesconto() {
    const total = this.total;
    return total - (total * this._desconto);
  }
}

class Item {
  constructor(itemName: string, preco: number) {
    this.nome = itemName;
    this.preco = preco;
  }
}

// const client = new Cliente('Thiago');
// const item1 = new Item('arraoz', 10);
// const item2 = new Item('Fejao', 20);

// const pedido = new Pedido(client.nome, [{ nome: item1.nome, preco: item1.preco}, { nome: item2.nome, preco: item2.preco}], 'dinheiro', 0.1);

// console.log(pedido.total);
// console.log(pedido.withDesconto);

enum mes {
  janeiro = 1,
  fevereiro,
  marco,
  abril,
  maio,
  junho,
  julho,
  agosto,
  setembro,
  outubro,
  novembro,
  dezembro
}

class Data {
  private dia: number;
  private mes: mes;
  private ano: number;

  constructor(dia: number, mes: mes, ano: number) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }

  get constructorData() {
    return `${this.dia}/${this.mes}/${this.ano}`
  }

  get getMonthName() {
    return `${mes[this.mes]}`;
  }
}

const data = new Data(26, 11, 1992);
console.log(data.constructorData);
console.log(data.getMonthName);




