
import { Component } from '@angular/core';
import { Caracter } from '../interfaces/caracter.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-pages.component.html',
  standalone: false
})

export class MainPageComponent {

  constructor(private readonly dbzService: DbzService) { }

  get characters(): Caracter[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.DeleteCharacterById(id);
  }

  onNewCharacter(characters: Caracter): void {
    this.dbzService.addCharacter(characters)
  }
}
