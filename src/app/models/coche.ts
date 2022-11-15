import { TitleStrategy } from "@angular/router";

export class Coche{
    constructor(
        public marca: string,
        public modelo: string, 
        public velocidad: number,
        public aceleracion: number,
        public estado: boolean
    ){}
}