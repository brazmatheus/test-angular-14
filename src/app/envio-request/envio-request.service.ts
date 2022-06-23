import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cep } from '../interface/cep';

@Injectable({
  providedIn: 'root'
})
export class EnvioRequestService {

  constructor(private httpClient: HttpClient) { }

  buscaCep(): Observable<Cep>{
    return this.httpClient.get<Cep>("https://viacep.com.br/ws/03590010/json/");
  }

}
