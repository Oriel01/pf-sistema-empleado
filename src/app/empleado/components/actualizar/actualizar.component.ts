import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../../types/empleado.type';
import { EmpleadoService } from '../../services/empleados.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'empleado-actualizar',
    templateUrl: 'actualizar.component.html'
})

export class ActualizarEmpleadoComponent implements OnInit {
    private id!: number;
    public empleado: Empleado = {
        nombre: "",
        apellido: "",
        email: ""
    }

    constructor(private empleadoService: EmpleadoService, private routes: ActivatedRoute
        , private rt: Router
    ) {}

    public onSubmit(): void {
        this.empleadoService.actualizarEmpleado(this.id, this.empleado).subscribe({
            next: (() => {
                console.log("Empleado Actualizado con éxito");
            }),

            error: ((error: any) => {
                console.log("Ha ocurrido un error");
            }),

            complete: (() => {
                this.redirect();
            })
        })
    }

    private redirect(): void {
        this.rt.navigate(["/empleados"]);
    }

    ngOnInit() {
        this.id = this.routes.snapshot.params["id"];
        this.empleadoService.obtenerEmpleadoPorId(this.id).subscribe({
            next: ((res) => {
                this.empleado.nombre = res.nombre;
                this.empleado.apellido = res.apellido;
                this.empleado.email = res.email;
            })
        })
    }
}