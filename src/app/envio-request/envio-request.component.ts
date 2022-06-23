import { Component, OnInit } from '@angular/core';
import { Cep } from '../interface/cep';
import { EnvioRequestService } from './envio-request.service'

@Component({
  selector: 'app-envio-request',
  templateUrl: './envio-request.component.html',
  styleUrls: ['./envio-request.component.css']
})
export class EnvioRequestComponent implements OnInit {

  valor: Cep = {
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
    ibge: "",
    gia: "",
    ddd: "",
    siafi: ""
  }

  constructor(
    private envioService: EnvioRequestService) { }

  ngOnInit(): void {
    this.buscaCep();
  }

  buscaCep() {
    this.envioService.buscaCep().subscribe((resposta) => {
      console.log("resposta", resposta)
      this.valor = resposta;
    });
  }

}
