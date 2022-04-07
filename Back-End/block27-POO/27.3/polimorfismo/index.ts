abstract class Character {
  talk(): void { };
  specialMove(): void { };
}

class MeleeCharacter extends Character {
  talk(): String { return 'Talk MelleCharacter'};
  specialMove(): String { return 'specialMove MelleCharacter' };
}

class LongRangerCharacter extends Character {
  talk(): String { return 'Talk Long MelleCharacter'};
  specialMove(): String { return 'specialMove Long MelleCharacter' };
}

function char(character: Character) {
  console.log(character.talk());
  console.log(character.specialMove());
}

const m1 = new MeleeCharacter();
const l1 = new LongRangerCharacter();

char(m1);
char(l1);