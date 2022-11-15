import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padredeportes',
  templateUrl: './padredeportes.component.html',
  styleUrls: ['./padredeportes.component.css']
})
export class PadredeportesComponent implements OnInit {
  public deportes: Array<string>;
  public favorito!:string;

  constructor() {
    this.deportes = ["Petanca", "Pádel", "Curling", "Fútbol"]
  }

  ngOnInit(): void {
  }

  deporteFavorito(event:any){
    this.favorito = event
  }
}
