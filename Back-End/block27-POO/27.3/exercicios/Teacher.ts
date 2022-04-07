import Employee from './Employee';
import Subject from './Subject';

class Teacher extends Employee  {

  private _subject: Subject;

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
      super(name, birthDate, salary);

      this._subject = subject;        
  }

  get subject(): Subject {
      return this._subject;
  }

  set subject(value: Subject) {
      this._subject = value;
  }
}

export default Teacher;
