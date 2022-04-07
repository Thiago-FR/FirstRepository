interface Person {
  id: number;
  name: string;
  showIdentification(): void;
}

class PhysicalPerson implements Person {
  private static lastId = 0;
  private _name;
  private _id;
  private _cpf;

  constructor(name: string, cpf: string) {
    this._id = PhysicalPerson.newId();
    this._name = name;
    this._cpf = cpf;
  }

  private static newId() { return this.lastId++; }
  get id() { return this._id; }
  get name() { return this._name; }
  get cpf() { return this._cpf; }
  showIdentification() { console.log(this.id, this._cpf); }
}

class LegalPerson implements Person {
  private static lastId = 0;
  private _name;
  private _id;
  private _cnpj;

  constructor(name: string, cnpj: string) {
    this._id = LegalPerson.newId();
    this._name = name;
    this._cnpj = cnpj;
  }

  private static newId() { return this.lastId++; }
  get id() { return this._id; }
  get name() { return this._name; }
  get cnpj() { return this._cnpj; }
  showIdentification() { console.log(this.id, this._cnpj); }
}

const pp0 = new PhysicalPerson('John', '123456789');
const pp1 = new PhysicalPerson('Jenny', '987654321');
const lp = new LegalPerson('International Sales SA', '834729384723');

const showIdentification = (person: Person) => {
  person.showIdentification();
}
// showIdentification(pp0);
// showIdentification(pp1);
// showIdentification(lp);

class Contract<T> {
  static _number = 0;

  constructor(public broker: T) { }

  static get number() { return this._number }
}

const c1 = new Contract(pp0);
// --------------------------------------------


interface Character {
  name: string,
  specialMove: string,
}

interface DbCharacter extends Character {
  id: number,
}

interface IModel {
  create: (characte: Character) => Promise<DbCharacter>;
}

const db: DbCharacter[] = [];

class LocalDbModel implements IModel {
  async create(character: Character): Promise<DbCharacter> {
    const lastId = db.length > 0 ? db[db.length - 1].id : 0;
    const newCharacter = { id: lastId + 1, ...character };
    db.push(newCharacter);
    return newCharacter;
  }
}

class MockDbModel implements IModel {
  async create(character: Character) {
    console.log(`${character.name} created`);
    return { id: 1, name: character.name, specialMove: character.specialMove };
  }
}

class CharacterService {
  constructor(public model: IModel) {}

  async create(character: Character) {
    const newCharacter = await this.model.create(character);
    return ({ status: 201, data: newCharacter});
  }
}

const A = new CharacterService(new LocalDbModel());
A.create({name: 'Thiago', specialMove: 'Top'});
console.log(db);

// const B = new CharacterService(new MockDbModel());
// B.create({ name: 'Thiago', specialMove: 'Top'})
//   .then(result => console.log(result));


// const l1 = new LocalDbModel();
// l1.create('Thiago', 'Magia');
// l1.create('Thiago', 'Magia');
// console.log(l1.charactes);

