import crypto from 'crypto';

import Person from './Person';

class Estudante extends Person {
  private _matricula: string;
  private _notas: number[];
  private _trabalhos: number[];

  constructor(nome: string, birthData: Date, notas: number[], trabalhos: number[]) {
    super(nome, birthData);
    this._matricula = this.newMatricula;
    this._notas = this.notas = notas;
    this._trabalhos = this.trabalhos = trabalhos;
  }

  get somaNotas() {
    return this._notas.reduce((acc, curr) => acc + curr);
  }

  get mediaNotas() {
    return this.somaNotas / this._notas.length;
  }

  get matricula() {
    return this._matricula;
  }

  set notas(notas: number[]) {
    if (notas.length !== 4) throw new Error('A quantidade de notas Deve ser igual a 4');
    this._notas = notas;
  }

  set trabalhos(notas: number[]) {
    if (notas.length !== 2) throw new Error('A quantidade de notas Deve ser igual a 2');
    this._trabalhos = notas;
  }

  private get newMatricula(): string {
    return crypto.randomBytes(8).toString('hex');
  }
};

export default Estudante;