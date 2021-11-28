import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { PesquisaRoutingModule } from './pesquisa-routing.module';
import { PesquisaComponent } from './pesquisas/pesquisa.component';
import { SharedModule } from '../shared/shared.module';
import { MatSelectModule } from '@angular/material/select';




@NgModule({
  declarations: [
    PesquisaComponent
  ],
  imports: [
    CommonModule,
    PesquisaRoutingModule,
    AppMaterialModule,
    SharedModule,
    MatSelectModule
  ]
})
export class PesquisaModule { }
