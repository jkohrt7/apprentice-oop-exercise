import { IPlayableCharacter } from "./icharacter";

export class Character implements IPlayableCharacter{
  name: string;
  health: number;

  constructor(name: string) {
    this.name = name;
    this.health = 50;
  }

  talk() {
    return `Hello! My name is ${this.name}.`
  }

  attack() {
    this.health--;
    return 1;
  }
}