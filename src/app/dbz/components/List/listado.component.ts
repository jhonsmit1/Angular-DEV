import { Component, Input } from '@angular/core';
import { Caracter } from '../../interfaces/caracter.interface';

@Component({
  selector: 'listado-dbz-page',
  standalone: false,
  templateUrl: 'listado.component.html',
})

export class ListadoComponent {

  
  @Input()
  public characterList: Caracter[] = [{
    name: "trunks",
    power: 2000
  }]
}
