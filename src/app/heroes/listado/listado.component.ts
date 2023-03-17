import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public heroes: string[];
  public deletedHeroe: string;

  constructor() {
    this.heroes = ['Spiderman','Ironman','Hulk','Thor','Capitan America'];
    this.deletedHeroe = '';
  }

  ngOnInit(): void {
  }

  public deleteHeroe(): void {
      this.deletedHeroe = this.heroes.shift() || '';
  }

}
