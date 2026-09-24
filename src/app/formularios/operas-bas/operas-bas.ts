import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.html',
})
export class OperasBas {
  num1:string=''
  num2:string=''
  resultado:number=0
  opcion:string=''
  
  sumar():void{
    this.resultado=parseInt(this.num1)+parseInt(this.num2)
  }
  restar():void{
    this.resultado=parseInt(this.num1)-parseInt(this.num2)
  }
  multiplicacion():void{
    this.resultado=parseInt(this.num1)*parseInt(this.num2)
  }
  division():void{
    this.resultado=parseInt(this.num1)/parseInt(this.num2)
  }

  operacion():void{
    switch (this.opcion) {
      case 'sumar':
        this.resultado = parseInt(this.num1)+parseInt(this.num2)
        break;

      case 'restar':
        this.resultado = parseInt(this.num1)-parseInt(this.num2)
        break;

      case 'multiplicar':
        this.resultado = parseInt(this.num1)*parseInt(this.num2)
        break;

      case 'dividir':
          this.resultado = parseInt(this.num1)/parseInt(this.num2)
        
        break;

      default:
        this.resultado = 0;
        break;
    }
  }

}
