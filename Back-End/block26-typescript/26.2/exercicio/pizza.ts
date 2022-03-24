type Slices = 4 | 6 | 8;
type FourSlices = 4;

type Comum = 'Calabresa' | 'Frango' | 'Pepperoni';
type Vegetariana = 'Marguerita' | 'Palmito' | 'Cogumelo';
type Doce = 'Nutela' | 'Goiabada com Queijo' | 'Marshmallow';

interface Pizza<T, U> {
  flavor: T,
  slices: U,
}

class Pizza<T, U> {
  constructor(flavor: T, slices: U) {
    this.flavor = flavor;
    this.slices = slices;
  }

  type(): string {
    return `Pizza de ${this.flavor} ${this.slices} pedaços`
  }
}

const calabresa = new Pizza<Comum, Slices>('Calabresa', 8);
const marguerita = new Pizza<Vegetariana, Slices>('Marguerita', 6);
const nutela = new Pizza<Doce, FourSlices>('Nutela', 4);

console.log(calabresa.type());
console.log(marguerita.type());
console.log(nutela.type());
