import { Component } from '@angular/core';
import { IHeroes } from '../heroes';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  styleUrl: './heroes-list.css',
  templateUrl: './heroes-list.html',
})
export class HeroesList {
imagenWidth:number=40;
imagenMargin:number=2;
muestraImage:boolean=true;
listFilter:string='';

showImage():void{
  this.muestraImage=!this.muestraImage;
}

  heroes:IHeroes[]=[
     {
      imagen:"https://dragonball-api.com/characters/gohan.webp",
      nombre:"Son Gohan",
      descripcion:'Guerrero z',
      race:'Hibrido Saiyan-human',
      ki:10000
    },
    {
      imagen:"https://dragonball-api.com/characters/goku_normal.webp",
      nombre:"Son Goku",
      descripcion:'Guerrero z',
      race:'Saiyan',
      ki:10000
    },
    {
      imagen:"https://dragonball-api.com/characters/celula.webp",
      nombre:"Cell",
      descripcion:'Villano',
      race:'Androide',
      ki:10000
    },
    {
      imagen:"https://dragonball-api.com/characters/Beerus_DBS_Broly_Artwork.webp",
      nombre:"Bills",
      descripcion:'Antes de la creacion viene la destruccion',
      race:'Dios de la Destruccion',
      ki:10000
    } 

  ]

  
}
