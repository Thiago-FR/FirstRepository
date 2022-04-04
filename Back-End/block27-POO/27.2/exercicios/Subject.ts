class Subject {
  constructor(private name: string) { this.name = this.setName = name }

  get getName() { return this.name }
  set setName(name: string) { 
    if (name.length < 3) throw new Error('Nome deve ser maior que 3 caracter');
    this.name = name
  }
}

// const matematica = new Subject('Matemática');
// const historia = new Subject('História');
// const filosofia = new Subject('Filosofia');

// console.log(matematica.getName);
// console.log(historia.getName);
// console.log(filosofia.getName);

export default Subject;