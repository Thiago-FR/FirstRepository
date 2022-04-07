import IPerson from './interfaces/Person';

abstract class Person implements IPerson {
  public name;
  public birthData;
  public age;

  constructor(name: string, birthData: Date) {
    this.name = this.setName = name;
    this.birthData = birthData;
    this.age = this.getAge;
  }

  get getName() { return this.name }
  get getBirthData() { return this.birthData }
  get getAge(): number {
    const today = new Date();
    let age = today.getFullYear() - this.birthData.getFullYear();

    if (this.birthData.getFullYear() > today.getFullYear()) throw new Error('A data de nascimento não pode ser uma data no futuro.');
    if (today.getMonth() - this.birthData.getMonth() <= 0 && today.getDate() <= this.birthData.getDate()) {
      age--;
    }
    if (age > 120) throw new Error('A pessoa deve ter no máximo 120 anos.');

    return age;
  }

  set setName(name: string) {
    if (name.length >= 3) this.name = name;
    else throw new Error('O nome deve conter no mínimo 3 caracteres.');   
  }
}

export default Person;