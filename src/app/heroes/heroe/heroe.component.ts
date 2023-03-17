import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  public name: string;
  public age: number;

  private _upperCaseName: string;

  constructor() {
    this.name = 'Ironman'
    this.age = 45;
    this._upperCaseName = this.name;
  }

  ngOnInit(): void {
  }

  public get upperCaseName(): string{
    this._upperCaseName = this.name;
    return this._upperCaseName.toUpperCase();
  }

  public getName(): string{
    return `${this.name} - ${this.age}`
  }

  public changeName(): void{
    this.name = 'Spiderman';
  }

  public changeAge(): void {
    this.age = 25;
  }

}
