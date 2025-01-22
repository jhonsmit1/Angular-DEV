import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  // onDelete(index:number):any{
  //   // ID del personaje a eliminar
  //   console.log(index);
  // }

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter

  onDeleteCharacter(id?: string): any {
    // ID del personaje a eliminar
    if (!id) return;
    console.log(id);
    this.onDelete.emit(id)
  }
}
