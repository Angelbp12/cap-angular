import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-componente',
  templateUrl: './map-componente.component.html',
  styleUrls: ['./map-componente.component.css']
})
export class MapComponenteComponent implements OnInit {

  public array1= [] = [1,2,3,4,5];
  public arrayNew: number []=[];

  public numrandom: number;

  constructor() {
    this.array1 = [ 1,2,3,4,5];
    this.arrayNew = [];

    this.numrandom=0;
   }

  ngOnInit(): void {

    this.funcionMap();
  }

  funcionMap(){

    this.arrayNew = this.array1.map(nuevo=>nuevo*2)

    let array1 = [1,2,3,4,5];
    var arrayNew = array1.map (function(nuevo){
      console.log (nuevo);
      return nuevo * 2; 
      
    });
    console.log('esta es el arra1 '+array1+' array nuevo es ' +arrayNew); 
  }

  numeroRandom(){
    this.numrandom = Math.floor(Math.random()*100)+1;
  }

}
