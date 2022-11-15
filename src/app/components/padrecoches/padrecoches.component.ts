import { Component, OnInit } from '@angular/core';
import { Coche } from 'src/app/models/coche';

@Component({
  selector: 'app-padrecoches',
  templateUrl: './padrecoches.component.html',
  styleUrls: ['./padrecoches.component.css']
})
export class PadrecochesComponent implements OnInit {
  public coches: Array<Coche>;

  constructor() {
    this.coches = [
      new Coche("Ford", "Mustang", 0, 20, false),
      new Coche("Renault", "Clio", 0, 20, false),
      new Coche("Lamborguini", "Diablo", 0, 20, false),
    ]
  }

  ngOnInit(): void {
  }

}
