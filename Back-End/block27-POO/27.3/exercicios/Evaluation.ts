import Teacher from './Teacher'

type Avaliacao = 'prova' | 'trabalho';

class Evaluation {
  private _score: number;
  teacher: Teacher;
  private _type: Avaliacao;

  constructor(score: number, teacher: Teacher, type: Avaliacao) {
    this._type = type;
    this._score = this.score = score;
    this.teacher = teacher;
  }

  get score(): number { return this._score }
  get type(): Avaliacao { return this._type }

  set score(value: number) {
    if (value < 0) throw new Error('Pontuação não pode ser negativa');
    if (this._type === 'prova' && value > 25) throw new Error('Pontuação não pode ser maior que 25');
    if (this._type === 'trabalho' && value > 50) throw new Error('Pontuação não pode ser maior que 50');
    this._score = value
   }
  set type(value: Avaliacao) { this._type = value }
}

// import Subject from './Subject';
// const matematica = new Subject('Matemática');

// const d1 = new Date();
// d1.setFullYear(1992);
// d1.setMonth(11);
// d1.setDate(26);

// const prof = new Teacher('Prof', d1,2000, matematica);
// const ava = new Evaluation(70, prof, 'trabalho');
// console.log(ava);


export default Evaluation;
