
import { Component } from '@angular/core';
import { Caracter } from '../interfaces/caracter.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-pages.component.html',
  standalone: false
})

export class MainPageComponent {
  public characters: Caracter[] = [{
    name: 'Goku',
    power: 15000
  },
  {
    name: 'Vegeta',
    power: 7500
  },
  {
    name: 'Trunks',
    power: 2000
  }]

  public onNewCharacter(Caracter:Caracter):void{
    this.characters.push(Caracter);
  }

}
