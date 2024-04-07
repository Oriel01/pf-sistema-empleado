import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleado.component';
import { RegistrarEmpleadoComponent } from './components/registrar-empleado/registrar-empleado.component';



@NgModule({
  declarations: [
    ListaEmpleadosComponent, 
    RegistrarEmpleadoComponent
  ],
  imports: [
    CommonModule,
  ], 
  exports: [
    ListaEmpleadosComponent
  ],
})
export class EmpleadoModule { }
