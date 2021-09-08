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
    return objMege.damage = 0;
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

  check: (objeto) => {
  Object.values(objeto).forEach((element) => {
    if (element.healthPoints <= 0) {
      element.healthPoints = 0;
    }
  });
  },

  batte: function () {
    this.warriorFunc(danoWarrior(warrior));
    this.mergeFunc(manaGastaMege(mage));
    this.dragonFunc(danoDragon(dragon));

    return battleMembers;
  }
};
/*console.log(battleMembers);
console.table(gameActions.batte());

console.table(gameActions.batte());*/



while (warrior.healthPoints > 0 && dragon.healthPoints > 0 && mage.healthPoints > 0) {
  gameActions.batte()
  console.log(`Warrior deu ${warrior.damage} de ataque`);
  if (mage.damage > 0) {
    console.log(`Mage deu ${mage.damage} de ataque, Mana ${mage.mana}`);
  } else {
    console.log ('Mage Ficou sem Mana');
  }
  
  console.log(`Dragon deu ${dragon.damage} de ataque`);
  gameActions.check(battleMembers);
  console.table(battleMembers);
}

if (warrior.healthPoints <= 0) {
  console.log ('Warrior morreu');
}
if (mage.healthPoints <= 0) {
  console.log ('Mage morreu');
} if (dragon.healthPoints <= 0) {
  console.log ('Dragon morreu');
}