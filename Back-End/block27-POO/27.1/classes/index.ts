class Person {
  name: string;
  private _weight: number;
  private _age: number;
  readonly height: number;

  constructor(name: string, height: number, weight: number, age: number) {
    this.name = name;
    this._weight = weight;
    this._age = age;
    this.height = height;
  }

  getWeight() {
    return this._weight;
  }

  get age() {
    return this._age;
  }

  set age(newValue: number) {
    if (newValue >= 0 && newValue < 200) {
      this._age = newValue;
    }
  }

  birthday() {
    this._age += 1;
  }
}

// const p1 = new Person('Maria', 171, 58, 19);
// const p2 = new Person('João', 175, 66, 18);

class TV {
  readonly chanel: number[];
  private _connectedTo: number;

  constructor() {
    this.chanel = this.randonChanel();
    this._connectedTo = this.chanel[0];
  }

  get chanelOptions() {
    return this.chanel;
  }

  get connectedTo() {
    return this._connectedTo;
  }

  set connectedTo(chanel: number) {
    const chanelExisting = this.chanel.find(item => item === chanel);
    if (chanelExisting) {
      this._connectedTo = chanel;
    } else {
      console.log('Sorry, connection unavailable!');      
    }
  }

  private randonChanel(): number[] {
    const numberChanel: number = 5;
    const newArray: number[] = [];

    for (let index: number = 0; index < numberChanel; index++) {
      const numberRandom: number = Math.ceil(Math.random() * 50);
      const number: number | undefined = newArray.find(item => item === numberRandom)
      if (number) {
        index --;
        continue;
      }
      newArray.push(numberRandom);
    }
    
    return newArray;
  }
}

// const tv = new TV();
