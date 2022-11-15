import { Component, OnInit, Input, Output } from '@angular/core';
import { Coche } from 'src/app/models/coche';

@Component({
  selector: 'app-hijocoche',
  templateUrl: './hijocoche.component.html',
  styleUrls: ['./hijocoche.component.css']
})
export class HijococheComponent implements OnInit {
  @Input() car!: Coche;
  public mensaje!: string;

  constructor() {}

  comprobarEstado(): boolean{
    if(this.car.estado == false){
      this.mensaje = "El coche está apagado";
      this.car.velocidad = 0;
      return false
    }else{
      this.mensaje = "El coche esta encendido"
      return true
    }
  }

  encenderCoche(): void{
    this.car.estado = !this.car.estado;
    this.comprobarEstado();
  }

  acelerarCoche(): void{
    if(this.comprobarEstado() == false){
      alert("¿Donde vas? El coche está apagado")
    }else{
      this.car.velocidad = this.car.velocidad + this.car.aceleracion;
    }
  }

  ngOnInit(): void {
    this.comprobarEstado()
  }

}
