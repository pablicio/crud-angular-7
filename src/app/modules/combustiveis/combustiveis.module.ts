import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombustivelFormComponent } from './combustivel-form/combustivel-form.component';
import { CombustivelListComponent } from './combustivel-list/combustivel-list.component';
import { CombustiveisRoutingModule } from './combustiveis-routing.module';


@NgModule({
  declarations: [CombustivelFormComponent, CombustivelListComponent],
  imports: [
    CommonModule,
    CombustiveisRoutingModule
  ]
})
export class CombustiveisModule { }
