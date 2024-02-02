 import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';
import {random} from 'lodash';

@Component({
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.css']
})
export class PrimerComponenteComponent implements OnInit {

  public nombre : string;
  public apellido : string;
  public edad : number;
  public genero : string;
  public bandera : boolean;
  public diasSelecionado: any;
  public year: number;
  public siglo: number;

  public diasSemana: any = [
    {dia: 'todos los lunes', diaSolo: 'Lunes'},
    {dia: 'todos los martes', diaSolo: 'Martes'},
    {dia: 'todos los miercoles', diaSolo: 'Miercoles'},
    {dia: 'todos los jueves', diaSolo: 'Jueves'},
    {dia: 'todos los viernes', diaSolo: 'Viernes'},
    {dia: 'todos los sabados', diaSolo: 'Sabado'},
    {dia: 'todos los domingo', diaSolo: 'Domingo'},

  ];

  public arrayAux = [];

  constructor() { 
    this.nombre= 'Angelbp';
    this.apellido= '';
    this.edad=0;
    this.genero= ' ';
    this.bandera = false;
    this.arrayAux=[];
    this.year= 0;
    this.siglo=0;

  }

  ngOnInit(): void {
    this.diasSelecionado = 'N/A';
    this.funcion1();


    // console.log(this.diasSemana);
  }

  public cambiarNombre(){
    this.nombre='Jose'
    this.nombre = this.nombre + ' ' + this.apellido;
    this.bandera=true;
  }

  public funcion1(){
    let contador: number=0;
    let acumula: number=0;
    this.diasSemana.forEach((elemento: any) => {
      
      contador ++;
      acumula = contador+acumula;

      elemento.id = acumula;
    });
    //console.log(this.diasSemana);
  }

  public funcion2(){
    this.arrayAux = this.diasSemana.map((dia:any)=>{
      const nuevoDia = { ... dia};

      nuevoDia.id2 = random(1,10);
      return nuevoDia;
    });
   // console.log('resultado del map ', this.arrayAux );
  }

  public mostrarArreglo(){
    //console.log('esto despues', this.arrayAux);
  }

  public convertir() {

    this.siglo = Math.ceil(this.year / 100);
    //console.log('el año', this.year +'pertenece al siglo' + this.siglo);

  }



}


