import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';



@NgModule({
  declarations: [UsuarioFormComponent, UsuarioListComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
