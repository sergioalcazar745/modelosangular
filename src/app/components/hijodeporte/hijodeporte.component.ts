import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijodeporte',
  templateUrl: './hijodeporte.component.html',
  styleUrls: ['./hijodeporte.component.css']
})
export class HijodeporteComponent implements OnInit {
  @Input() sport!: string;
  @Output() favorito: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {

  }

  seleccionarFavorito(){
    this.favorito.emit(this.sport)
  }
}
