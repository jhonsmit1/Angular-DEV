import { Component, EventEmitter, Output } from '@angular/core';
import { Caracter } from '../../interfaces/caracter.interface';

@Component({
  selector: 'app-agregar-dbz-page',
  standalone: false,
  templateUrl: 'agregar.component.html'
})

export class AgregarComponent {

  @Output()
  public onNewCharacter: EventEmitter<Caracter> = new EventEmitter();

  public character: Caracter = {
    name: '',
    power: 0
  }

  public emitCharacter(): void {
    console.log(this.character);
    if (this.character.name.length===0) return;
    this.onNewCharacter.emit({...this.character});
    this.character.name = '';
    this.character.power = 0;
  }



}
//! evento
// ()
//! atributo
// [()]
