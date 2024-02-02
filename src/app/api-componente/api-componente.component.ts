import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { constant } from 'lodash';

@Component({
  selector: 'app-api-componente',
  templateUrl: './api-componente.component.html',
  styleUrls: ['./api-componente.component.css']
})
export class ApiComponenteComponent implements OnInit {

  data: any [] = [];
  public nuevoData: any[]=[];

  public Status: any[]=[];


  data2: any [] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.llenarData();
    //this.llenarData2();
  }

  llenarData(){
    this.apiService.getData().subscribe( data => {
      this.data = data;
      console.log(this.data);
    })
  }

  llenarData2(){
    this.apiService.getData2().subscribe( data2 => {
      this.data2 = data2;
      console.log(this.data2);
    })
  }



    public editaapi(){
      this.nuevoData = this.data.map((obj:any)=>{
         const edita = { ...obj}

         edita.name = edita.name + ' "editado por angel"';

        return edita;
      });
      console.log('ESTE EDITE ', this.nuevoData);
    }

    editaStatus(status: string): string {
      if (status === 'Alive') {
        return 'vivo';
      } else if (status === 'Dead') {
        return 'muerto';
      } else {
        return 'desconocido';
      }
    }

    masinfo(species:string): void{
      alert('especie del personaje: ' + species);
      // console.log('Especie del personaje:', species);
    }

}

