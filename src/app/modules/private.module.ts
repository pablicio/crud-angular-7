import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombustiveisModule } from './combustiveis/combustiveis.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { HistoricosModule } from './historicos/historicos.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CombustiveisModule,
    UsuariosModule,
    HistoricosModule
  ]
})
export class PrivateModule { }
