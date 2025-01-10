import { Component } from '@angular/core';

@Component({
  selector: 'app-heroies-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America', 'Black Widow', 'Doctor Strange', 'Black Panther', 'Antman', 'Wanda'];
  public deletedHero: string[] = [];

  public removeLastHero(): void {
    const deleteHero = this.heroNames.pop();
    if (deleteHero) {
      this.deletedHero?.push(deleteHero);
    }
  }
}
