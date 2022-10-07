import { IPlayableCharacter } from "../character/icharacter";
import { Character } from "../character";

export class Rogue extends Character implements IPlayableCharacter {
  stamina: number;

  constructor(name: string) {
    super(name);
    this.stamina = 4;
  }

  talk() {
    return `hello. my name is ${this.name.toLowerCase()}.`;
  }

  attack() {
    let bonusDamage = 0;
    // Dodges when possible.
    if(this.stamina > 0) {
      this.stamina--;
      bonusDamage += 4;
    } 
    else {
      this.health -= 5;
      this.stamina = 4;
    }
    return 1 + bonusDamage;
  }
}
