import { Character } from '.';

describe('Character', () => {
  describe('#talk', () => {
    it('greets you with their name', () => {
      const character = new Character('Balthazar');
      expect(character.talk()).toBe('Hello! My name is Balthazar.');
    });
  });

  describe('#attack', () => {
    it('reduces the character\'s health by 1', () => {
      const character = new Character('Balthazar');
      character.attack();
      expect(character.health).toBe(49);
    });

    it('returns 1 point damage when attacked', () => {
      const character = new Character('Balthazar');
      const counterDamage = character.attack();
      expect(counterDamage).toBe(1);
    });
  });
});
