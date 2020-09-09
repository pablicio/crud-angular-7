import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CombustivelFormComponent } from './combustivel-form/combustivel-form.component';
import { CombustivelListComponent } from './combustivel-list/combustivel-list.component';
import { StarterComponent } from 'src/app/starter/starter/starter.component';


const routes: Routes = [
  {
    path: '',
    component: StarterComponent,
    children: [
      {
        path: 'cadastro',
        component: CombustivelFormComponent
      },
      {
        path: 'cadastro/:id',
        component: CombustivelFormComponent
      },
      {
        path: 'listar',
        component: CombustivelListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CombustiveisRoutingModule { }
