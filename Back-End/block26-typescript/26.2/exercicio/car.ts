enum Color {
  black = 'Preta',
  white = 'Branca',
  red = 'Vermelha',
  silver = 'Prata',
}

enum Doors {
  door1 = 1,
  door2,
  door3,
  door4,
}

enum Direcao {
  left = 'Esquerda',
  right = 'Direita',
}

interface Car {
  brand: string,
  color: Color,
  doors: number,
}

class Car {
  constructor(brand: string, color: Color, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): string {
    return `buzinou`;
  }

  openTheDoor(door: Doors): string {
    return `Open the door ${door}`;
  }

  closeTheDoor(door: Doors): string {
    return `Close the door ${door}`;
  }

  turnOn(): string {
    return `Ligou o Carro`;
  }

  turnOff(): string {
    return `Desligou o Carro`;
  }

  speedUp(): string {
    return `Acelerou o carro`;  
  }

  speedDown(): string {
    return `Reduziu a velocidade do carro`;  
  }

  stop(): string {
    return `Parou o carro`; 
  }

  turn(direcao: Direcao): string {
    return `Virou o carro para ${direcao}`;    
  }
}

const Car1 = new Car('volkswagen', Color.silver, Doors.door4);

console.log(Car1.turnOn());

console.log('Siga em frente');
console.log(Car1.speedUp());

console.log('Em 600 metros vire a esquerda');
console.log(Car1.turn(Direcao.left));

console.log('Em 200 metros na rotatória pegue a segunda saída a direita');
console.log(Car1.turn(Direcao.right));

console.log('Mantenha em frente pelos próximos 1,2 quilômetros');
console.log(Car1.speedUp());

console.log('Em 300 metros vire a direita');
console.log(Car1.turn(Direcao.right));

console.log('Em 400 metros você chegará ao seu destino');
console.log(Car1.speedDown());
console.log(Car1.turnOff());
console.log('---------------------------------------------------------------------');

console.log(Car1.turnOn());

console.log('Siga em frente');
console.log(Car1.speedUp());

console.log('Em 300 metros vire a direita');
console.log(Car1.turn(Direcao.right));

console.log('Mantenha em frente pelos próximos 2 quilômetros');
console.log(Car1.speedUp());

console.log('Em 200 metros vire a esquerda');
console.log(Car1.turn(Direcao.left));

console.log('Em 400 metros vire a direita');
console.log(Car1.turn(Direcao.right));

console.log('Em 100 metros você chegará ao seu destino');
console.log(Car1.speedDown());
console.log(Car1.turnOff());
