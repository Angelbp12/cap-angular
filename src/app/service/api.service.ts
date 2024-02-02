import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'https://rickandmortyapi.com/api/character/231,34,665,176,575,792,211';
  private urlApi3 = 'https://rickandmortyapi.com/api/character/222,254,1,55,302,420';
  private urlApi2 = "https://rickandmortyapi.com/api/character/?name=rick&status=alive";

  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.urlApi);
  }


  public getData2(): Observable<any>{
    return this.http.get<any>(this.urlApi3);
  }

}
