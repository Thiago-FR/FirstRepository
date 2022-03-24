enum EyeColor {
  Black = "Pretos",
  Blue = "Azuis",
  Green = "Verdes",
  Brown = "Castanhos"
};

interface Person {
  name: string;
  birthDate: Date;
  eyeColor?: EyeColor;
  speak(): void;
  eat(): void;
  walk(): void;
};

class Person {
  constructor(name: string, birthDate: Date, eyeColor?: EyeColor) {
    this.name = name;
    this.birthDate = birthDate;
    this.eyeColor = eyeColor;
  }

  speak() {
    console.log(`${this.name} está falando`);    
  };

  eat() {
    console.log(`${this.name} está comendo`); 
  }

  walk() {
    console.log(`${this.name} está andando`); 
  };
}

const pessoal = new Person('Thiago', new Date('1992-11-26'));
const pessoal2 = new Person('Adriana', new Date('1978-06-07'), EyeColor.Black);
pessoal.eat();
pessoal2.walk();

pessoal.eyeColor = EyeColor.Blue;
console.log(pessoal);
