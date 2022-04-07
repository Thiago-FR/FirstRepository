import Enrollable from './interfaces/Enrollable';

import Person from './Person';

class Estudante extends Person implements Enrollable {
  public enrollment: string;
  private _notas: number[];
  private _trabalhos: number[];
  private _evaluationsResults: number[] = [];

  constructor(nome: string, birthData: Date, notas: number[], trabalhos: number[]) {
    super(nome, birthData);
    this.enrollment = this.generateEnrollment();
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
    return this.enrollment;
  }

  get evaluationsResults() {
    return this._evaluationsResults;
  }

  set notas(notas: number[]) {
    if (notas.length !== 4) throw new Error('A quantidade de notas Deve ser igual a 4');
    this._notas = notas;
  }

  set trabalhos(notas: number[]) {
    if (notas.length !== 2) throw new Error('A quantidade de notas Deve ser igual a 2');
    this._trabalhos = notas;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `PRE${randomStr}`;
  }

  addEvaluationResult(value: number): void {
    this._evaluationsResults.push(value);
  }
};

export default Estudante;