// import Estudante from './Estudante';
import Person from './Person';
import IEmployee from './interfaces/Employee';
import Subject from './Subject';


// const d1 = new Date();
// d1.setFullYear(1700);
// d1.setMonth(11);
// d1.setDate(26);

// const pessoal = new Person('Adriana', d1);

// console.log(pessoal.getName, pessoal.getAge, pessoal.getBirthData);
// -------------------------------------------------------------------------

// const d1 = new Date();
// d1.setFullYear(1992);
// d1.setMonth(11);
// d1.setDate(26);

// const pessoal = new Estudante('Adriana', d1, [50,60,70,80], [20,50]);

// console.log(pessoal.getName, pessoal.getAge, pessoal.getBirthData);
// console.log(pessoal.somaNotas, pessoal.mediaNotas, pessoal.matricula);
//----------------------------------------------------------------------------

const matematica = new Subject('Matemática');

const d1 = new Date();
d1.setFullYear(1992);
d1.setMonth(11);
d1.setDate(26);

// ./Teacher.ts

class Teacher extends Person implements IEmployee {

    private _subject: Subject;
    private _registration: string = String();
    private _salary: number = Number();
    private _admissionDate: Date;

    constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
        super(name, birthDate);

        this._subject = subject;
        this.salary = salary;
        this._admissionDate = new Date();
        this.registration = this.generateRegistration();
    }

    get subject(): Subject {
        return this._subject;
    }

    set subject(value: Subject) {
        this._subject = value;
    }

    get registration(): string {
        return this._registration
    }

    set registration(value: string) {
        if (value.length < 16) throw new Error('O registro deve possuir no mínimo 16 caracteres.');

        this._registration = value
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

    generateRegistration(): string {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

        return `PRF${randomStr}`;
    }

}

const prof = new Teacher('Prof', d1,2000, matematica);
console.log(prof.name);











