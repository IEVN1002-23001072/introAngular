import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  standalone: false,
  templateUrl: './distancia.html',
})
export class Distancia {
  x1:number=0
  x2:number=0
  y1:number=0
  y2:number=0
  resultado:number=0

  distancia():void{
    this.resultado=Math.sqrt(Math.pow((this.x1-this.x2),2)+(this.y1-this.y2)*(this.y1-this.y2))
  }
}
