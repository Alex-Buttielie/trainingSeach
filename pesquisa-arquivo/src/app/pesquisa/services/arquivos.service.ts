import { Arquivos } from './../model/arquivos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { DateFormatPipe } from 'ngx-moment';
import { Data } from '@angular/router';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ArquivosService {

  private url = "http://localhost:8085/arquivos/"

  constructor(private httpClient: HttpClient) { }
  nome!: String
  tipo!: String;
  data !: any;

  list() {
    return this.httpClient.get<Arquivos[]>(`${this.url + 'list'}`)
      .pipe(
        first(),
        delay(1000),
        tap(arquivos => console.log(arquivos))
      );
  }


  getArquivo(parametros: any) {

    if (parametros.data != null) {
      let newDate: moment.Moment = moment.utc(parametros.data).local()
      this.data = newDate.format("YYYY-MM-DD");
    } else {
      this.data = null
    }
    this.nome = parametros.nome
    this.tipo = parametros.tipo


    return this.httpClient.get<Arquivos[]>(`${this.url + 'getArquivoParam?data=' + this.data +
      '&tipo=' + this.tipo +
      '&nome=' + this.nome}`)
      .pipe(
        first(),
        delay(100),
        tap(arquivos => console.log(arquivos))
      );
  }
}
