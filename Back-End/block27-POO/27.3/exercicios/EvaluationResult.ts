import Evaluation from "./Evaluation";

class EvaluationResult {
  evaluation: Evaluation;
  private _score: number;

  constructor(evaluation: Evaluation, score: number) {
    this.evaluation = evaluation;
    this._score = score;
  }

  get score(): number { return this._score }

  set score(value: number) {
    if (value > this.evaluation.score) throw new Error('Pontuação não pode ser maior que a da avaliação');
    this._score = value
   }
}

export default EvaluationResult;