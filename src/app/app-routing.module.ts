import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './empleado/components/lista-empleados/lista-empleado.component';
import { RegistrarEmpleadoComponent } from './empleado/components/registrar-empleado/registrar-empleado.component';
import { DetallesEmpleadoComponent } from './empleado/components/detalles/detalles.component';
import { ActualizarEmpleadoComponent } from './empleado/components/actualizar/actualizar.component';

const routes: Routes = [
  {
    path: "empleados", 
    title: "Empleados",
    component: ListaEmpleadosComponent
  },
  // {
  //   path: "**", component:ListaEmpleadosComponent
  // },
  {
    path: "registrar-empleado",
    title: "Registrar", 
    component: RegistrarEmpleadoComponent
  },
  {
    path: "detalles/:id",
    title: "Detalles Empleado", 
    component: DetallesEmpleadoComponent
  },
  {
    path: "actualizar/:id",
    title: "Actualizar Empleado", 
    component: ActualizarEmpleadoComponent
  },
  {
    path: "**", redirectTo:"empleados", pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
