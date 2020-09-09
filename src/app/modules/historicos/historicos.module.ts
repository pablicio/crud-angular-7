import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricoListComponent } from './historico-list/historico-list.component';
import { HistoricosRoutingModule } from './historicos-routing.module';
import { HistoricoFormComponent } from './historico-form/historico-form.component';



@NgModule({
  declarations: [HistoricoListComponent, HistoricoFormComponent],
  imports: [
    CommonModule,
    HistoricosRoutingModule
  ]
})
export class HistoricosModule { }
