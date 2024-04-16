import { Empleado } from './../../../types/empleado.type';
import { Component, OnInit, NgModule } from '@angular/core';
import { EmpleadoService } from '../../services/empleados.service';
import { Router } from '@angular/router';
@Component({
    selector: 'empleado-registrar',
    template: `
    <div class="col-md-6 offset-md-3">
        <h3 class="text-center">
            Registro de Empleados
        </h3>

        <form (ngSubmit)="onSubmit()">
            <div class="form-group mb-3">
                <label for="nombre">Nombre: </label>
                <input type="text" class="form-control" id="nombre" [(ngModel)] = "empleado.nombre" name="nombre">
            </div>

            <div class="form-group mb-3">
                <label for="apellido">Apellido: </label>
                <input type="text" class="form-control" id="apellido" [(ngModel)] = "empleado.apellido" name="apellido">
            </div>

            <div class="form-group mb-3">
                <label for="nombre">E-mail: </label>
                <input type="email" class="form-control" id="email" [(ngModel)] = "empleado.email" name="email">
            </div>

            <div class="d-grid mb-3">
                <button type="submit" class="btn btn-success mt-2">Guardar</button>
            </div>
            
        </form>
    </div>
    
    `
})

export class RegistrarEmpleadoComponent implements OnInit {
    public empleado: Empleado = {
        nombre: "",
        apellido: "",
        email: ""
    }

    constructor(private empleadoService: EmpleadoService, private router: Router) { }
    
    public onSubmit(): void {
        this.guardarEmpleado(this.empleado);
    }

    private guardarEmpleado(empleado: Empleado): void {
        this.empleadoService.guardarEmpleado(empleado).subscribe({
            next: (data: Empleado) => {
                console.log(`Nuevo Empleado añadido: ${data.nombre} ${data.apellido}`)
            },
            error: (err: any) => {
                console.log("Ha ocurrido un error", err);
            },
            complete: () => {
                this.redirect();
            }
        });
    }

    private redirect() {
        this.router.navigate(['/empleados']);
    }

    ngOnInit() {
    }
}