import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { StarterComponent } from 'src/app/starter/starter/starter.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';


const routes: Routes = [
  {
    path: '',
    component: StarterComponent,
    children: [
      {
        path: 'cadastro',
        component: UsuarioFormComponent
      },
      {
        path: 'cadastro/:id',
        component: UsuarioFormComponent
      },
      {
        path: 'listar',
        component: UsuarioListComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
