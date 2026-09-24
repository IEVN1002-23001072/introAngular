import { Component } from '@angular/core';

@Component({
  selector: 'app-figuras',
  standalone: false,
  templateUrl: './figuras.html',
})
export class Figuras {
  base:string=''
  altura:string=''
  pi:number=3.14
  resultado:number=0
  opcion:string=''

  figura():void{
    switch(this.opcion){
      case 'triangulo':
      this.resultado = (parseInt(this.base)*parseInt(this.altura))/2
      break;
      case 'rectangulo':
      this.resultado = (parseInt(this.base)*parseInt(this.altura))
      break;
      case 'circulo':
      this.resultado = this.pi*(parseInt(this.altura)*parseInt(this.altura))
      break;
      case 'pentagono':
      this.resultado = (parseInt(this.base)*parseInt(this.altura))/2
      break;
      
    }
  }
}
