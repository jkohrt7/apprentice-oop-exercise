export interface IPlayableCharacter {
  name: string,
  health: number,
  talk(): string,
  attack(): number
}
