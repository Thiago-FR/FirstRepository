// Exercício 1

const newEmployees = () => {
  const employees = {
    id1: contratado('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: contratado('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: contratado('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const contratado = name => {
  const obj = {};
  const email = name.split(' ').join('_').toLowerCase();
  obj.Name = name;
  obj.Email = `${email}@trybe.com` 
  return obj;
}

//console.log(newEmployees());

//Exercício 2

const checkResult = (num1, num2) => num1 === num2 ? true: false;

const numRandom = () => Math.ceil(Math.random() * 5);

const resulSort = (apost, func) => {
  //const num = Math.ceil(Math.random() * 5);
  return func(apost, numRandom()) ? 'Parabéns você ganhou' : 'Tente novamente';
}

//console.log(resulSort(5,checkResult));

//Exercício 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verificaRespostas = (gab, resp) => {
  let cont = 0;
  for (let index = 0; index < gab.length; index +=1) {
    if (resp[index] !== 'N.A') gab[index] === resp[index] ? cont += 1 : cont -= 0.5;
  }
  return cont;
}

const inicial = (gabarito, respostaStudent, func) => func(gabarito, respostaStudent);

//console.log(inicial(RIGHT_ANSWERS, STUDENT_ANSWERS, verificaRespostas));

//Exercício Bonus Part 1

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Exercício

const manaGastaMege = (objMege) => {

  if (objMege.mana >= 15) {
    objMege.damage = Math.ceil(Math.random() * ((objMege.intelligence * 2)- objMege.intelligence) + objMege.intelligence);
    objMege.mana -= 15;
    return objMege.damage;
  } else {
    return 'Não possui mana suficiente';
  } 
}

const danoDragon = (obj) => Math.ceil(Math.random() * (obj.strength - 15) + 15);

const danoWarrior = (obj) => Math.ceil(Math.random() * ((obj.strength * obj.weaponDmg)- obj.strength) + obj.strength);

//Part 2

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorFunc: (warriorAtack) =>  {
    warrior.damage = warriorAtack;
    dragon.healthPoints -= warriorAtack;
  },

  mergeFunc: (mageAtack) => {
    dragon.healthPoints -= mageAtack;
  },

  dragonFunc: (dragonAtack) => {
    warrior.healthPoints -= dragonAtack;
    mage.healthPoints -= dragonAtack;
    dragon.damage = dragonAtack;
  },

  batte: function () {
    this.warriorFunc(danoWarrior(warrior));
    this.mergeFunc(manaGastaMege(mage));
    this.dragonFunc(danoDragon(dragon));

    return battleMembers;
  }
};

console.log(gameActions.batte());