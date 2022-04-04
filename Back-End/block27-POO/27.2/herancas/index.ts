class SuperClass {
  private isSuper: boolean;

  constructor(isSuper: boolean = true) { this.isSuper = isSuper }

  public sayHello(): void {
    console.log('Hello World');    
  }

  get isSuperClass() {
    return this.isSuper;
  }
}

class SubClass extends SuperClass {
  constructor(private setSuper: boolean) {
    super(setSuper);
  }
}

function recebeObjetct(superClass: SubClass) {
  if (superClass.isSuperClass) console.log("SUPER");
  else console.log("SUB");
};

const superC = new SuperClass();
const subC = new SubClass(false);

// recebeObjetct(superC);
// recebeObjetct(subC);

interface myInterface {
  myNumber: Number,
  myFunc: (myParam: number) => String,
}

class MyClass implements myInterface {
  constructor(public myNumber: number) { }

  public myFunc(myParam: number) {
    return `${this.myNumber + myParam}`;
  }
}

const ob = new MyClass(2);

console.log(ob.myFunc(3));
