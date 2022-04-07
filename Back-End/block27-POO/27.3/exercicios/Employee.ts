import Enrollable from "./interfaces/Enrollable";
import Person from "./Person";

class IEmployee extends Person implements Enrollable {
  public enrollment: string;
  private _salary: number;
  private _admissionDate: Date;

  constructor(name: string, birthDate: Date, salary: number) {
    super(name, birthDate);

    this._salary = salary;
    this._admissionDate = new Date();
    this.enrollment = this.generateEnrollment();
  }

  get registration(): string {
    return this.enrollment
  }

  set registration(value: string) {
      if (value.length < 16) throw new Error('O registro deve possuir no mínimo 16 caracteres.');

      this.enrollment = value
  }

  get salary(): number {
      return this._salary
  }

  set salary(value: number) {
      if (value < 0) throw new Error('O salário não pode ser negativo.');

      this._salary = value
  }

  get admissionDate(): Date {
      return this._admissionDate;
  }

  set admissionDate(value: Date) {
      if (value.getTime() > new Date().getTime()) throw new Error('A data de admissão não pode ser uma data no futuro.');

      this._admissionDate = value
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `PRF${randomStr}`;
  }
}

export default IEmployee;