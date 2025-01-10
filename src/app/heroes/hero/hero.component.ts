import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  private readonly DEFAULT_NAME: string = 'Iron man';
  private readonly DEFAULT_AGE: number = 45;

  public name: string = this.DEFAULT_NAME;
  public age: number = this.DEFAULT_AGE;

  // propiedad que es un metodo
  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  public getheroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  public changeHero(newName: string): void {
    this.name = newName;
  }

  public changeAge(newAge: number): void {
    this.age = newAge;
  }

  public resetData(): void {
    this.name = this.DEFAULT_NAME;
    this.age = this.DEFAULT_AGE;
    document.querySelectorAll('h1')!.forEach(element => element.innerHTML = '<h1>Desde Angular</h1>')
  }
}
