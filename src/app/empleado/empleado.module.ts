import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleado.component';



@NgModule({
  declarations: [
    ListaEmpleadosComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    ListaEmpleadosComponent
  ],
})
export class EmpleadoModule { }
