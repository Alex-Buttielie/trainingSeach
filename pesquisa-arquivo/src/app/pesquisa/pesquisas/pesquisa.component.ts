import { Data } from '@angular/router';
import { Arquivos } from './../model/arquivos';
import { ErrorDialogComponent } from '../../shared/components/error/error-dialog/error-dialog.component';
import { ArquivosService } from '../services/arquivos.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent implements OnInit {

  @Input() tipo = [{ valor: 1, descricao: "REMESSA" }, { valor: 2, descricao: "RETORNO" }];

  arquivos$: Observable<Arquivos[]>;
  displayedColumns = ['nome', 'tipo', 'qntLinhas', 'valor', 'data'];
  formGroup!: FormGroup;
  teste: any
  arq!: Headers;


  constructor(
    private arquivosService: ArquivosService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder) {
    this.arquivos$ = this.arquivosService.list()
      .pipe(
        catchError(error => {
          this.onError('Página não encontrada!')
          return of([])
        })
      );

    this.builderFormulario(formBuilder);
  }


  private builderFormulario(formBuilder: FormBuilder): void {
    this.formGroup = formBuilder.group({
      data_inicio: [],
      nome: [],
      tipo: [],
      qntLinhas: [],
      valor: [],
      data: []
    });
    this.formGroup.get('data_inicio');
    this.formGroup.get('nome');
    this.formGroup.get('tipo');
    this.formGroup.get('qntLinhas');
    this.formGroup.get('valor');
    this.formGroup.get('data');

  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }

  seachFolder() {

    const parametros = {
      data: null,
      nome: null,
      tipo: null
    }

    if (this.formGroup.value.data != null) {
      parametros.data = this.formGroup.value.data
    }
    if (this.formGroup.value.nome != null) {
      parametros.nome = this.formGroup.value.nome
    }
    if (this.formGroup.value.tipo != null) {
      parametros.tipo = this.formGroup.value.tipo
    }

    this.arquivos$ = this.arquivosService.getArquivo(this.formGroup.getRawValue())
      .pipe(
        catchError(error => {
          this.onError('Problema ao consultar, verifique os dados informados.')
          return of([])
        })
      );
  }
}
