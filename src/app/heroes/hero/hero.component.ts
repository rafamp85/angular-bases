import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  public name: string = 'captain america';
  public age:  number = 79;
  
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'hulk';
  }

  changeAge(): void {
    this.age = 37;
  }

  resetForm(): void {
    this.name = 'captain america';
    this.age = 79;

    // document.querySelectorAll('h1').forEach( element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // });
  }
}
