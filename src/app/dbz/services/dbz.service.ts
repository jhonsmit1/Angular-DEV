import { Injectable } from '@angular/core';
import { Caracter } from '../interfaces/caracter.interface';
import { v4 as uuid } from 'uuid'

@Injectable({ providedIn: 'root' })
export class DbzService {

  public characters: Caracter[] = [{
    id: uuid(),
    name: 'Goku',
    power: 15000
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  },
  {
    id: uuid(),
    name: 'Trunks',
    power: 2000
  }]

  public addCharacter(Caracter: Caracter): void {
    // this.characters.push(Caracter);
    const newCharacter: Caracter = { id: uuid(), ...Caracter }

    this.characters.push(newCharacter)
  }

  // public onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }

  public DeleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
