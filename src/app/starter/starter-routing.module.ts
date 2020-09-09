import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
      path: 'combustiveis',
      loadChildren: () => import('../modules/combustiveis/combustiveis.module').then(m => m.CombustiveisModule)
    },
    {
      path: 'historicos',
      loadChildren: () => import('../modules/historicos/historicos.module').then(m => m.HistoricosModule)
    },
    {
      path: 'usuarios',
      loadChildren: () => import('../modules/usuarios/usuarios.module').then(m => m.UsuariosModule)
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarterRoutingModule { }
