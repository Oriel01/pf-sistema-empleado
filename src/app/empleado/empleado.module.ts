import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleado.component';
import { RegistrarEmpleadoComponent } from './components/registrar-empleado/registrar-empleado.component';
import { FormsModule } from '@angular/forms';
import { DetallesEmpleadoComponent } from './components/detalles/detalles.component';
import { ActualizarEmpleadoComponent } from './components/actualizar/actualizar.component';



@NgModule({
  declarations: [
    ListaEmpleadosComponent, 
    RegistrarEmpleadoComponent, 
    DetallesEmpleadoComponent,
    ActualizarEmpleadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ], 
  exports: [
    ListaEmpleadosComponent
  ],
})
export class EmpleadoModule { }
