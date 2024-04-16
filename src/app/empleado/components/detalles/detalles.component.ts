import { EmpleadoService } from './../../services/empleados.service';
import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../../types/empleado.type';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'empleado-detalles',
    templateUrl: 'detalles.component.html'
})

export class DetallesEmpleadoComponent implements OnInit {

    public id!: number;
    public empleado: Empleado = {
        id: 0,
        nombre: "",
        apellido: "",
        email: ""
    }

    constructor( private router:ActivatedRoute, private EmpleadoService: EmpleadoService, private routes :Router) { }

    ngOnInit() { 
        this.id = this.router.snapshot.params['id'];
        this.EmpleadoService.obtenerEmpleadoPorId(this.id).subscribe({
            next: ((data) => {
                    this.empleado.id = this.id,
                    this.empleado.nombre = data.nombre,
                    this.empleado.apellido = data.apellido,
                    this.empleado.email = data.email
            }),

            error: (() => {
                this.routes.navigate(['empleados']);
            }),
        })
    }
}