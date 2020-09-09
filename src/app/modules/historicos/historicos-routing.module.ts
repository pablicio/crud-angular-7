import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoricoListComponent } from './historico-list/historico-list.component';
import { HistoricoFormComponent } from './historico-form/historico-form.component';
import { StarterComponent } from 'src/app/starter/starter/starter.component';


const routes: Routes = [
  {
    path: '',
    component: StarterComponent,
    children: [
      {
        path: 'cadastro',
        component: HistoricoFormComponent
      },
      {
        path: 'cadastro/:id',
        component: HistoricoFormComponent
      },
      {
        path: 'listar',
        component: HistoricoListComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoricosRoutingModule { }
