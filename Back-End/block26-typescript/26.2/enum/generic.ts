function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
};

let numberArray = getArray<number>([5,10,15,20]);

numberArray.push(25);
// console.log(numberArray);

let stringArray = getArray<string>(['cats', 'dogs', 'birds']);
stringArray.push('Rabbits');

// console.log(stringArray);

interface ProcessIdentity<T, U> {
  (value: T, message: U): T;
};

function processIdentity<T, U> (value: T, message: U) : T {
  console.log(message);
  return value
}

let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber = processor(100, "Olá");

class ClassProcessIdentity<T, U> {
  _value: T;
  _message: U;
  constructor(value: T, message: U) {
    this._value = value;
    this._message = message;
  }

  getIdentity() :T {
    console.log(this._message);
    return this._value;    
  }
}

let processorClass = new ClassProcessIdentity<number, string>(100, 'ola');
console.log(processorClass.getIdentity());
