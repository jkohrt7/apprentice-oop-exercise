import { Character } from '../character';
import { IPlayableCharacter } from '../character/icharacter';

class Wizard extends Character implements IPlayableCharacter{
  mana: number;

  constructor(name: string) {
    super(name);
    this.mana = 3;
  }

  talk() {
    return `HELLO! MY NAME IS ${this.name.toUpperCase()}.`;
  }

  attack() {
    let bonusDamage = 0;
    if(this.mana > 0) {
      this.mana--;
      bonusDamage = 1;
    }
    else {
      this.health -= 10;
    }

    return 1 + bonusDamage;
  }
}

export default Wizard;
