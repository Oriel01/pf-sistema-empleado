import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../../types/empleado.type';
import { EmpleadoService } from '../../services/empleados.service';
import { Router } from '@angular/router';
import { NotExpr } from '@angular/compiler';

@Component({
    selector: 'empleado-lista-empleados',
    templateUrl: 'lista-empleado.component.html'
})

export class ListaEmpleadosComponent implements OnInit{

    public listaEmpleados!: Empleado[];
    public empleado!: Empleado;

    constructor(private empleadosService: EmpleadoService, private router: Router) { }

    ngOnInit(): void { 
        this.obtenerEmpleados();
    }
    
    private obtenerEmpleados(): void {
        this.empleadosService.obtenerListaDeEmpleados().subscribe(dato => {
            console.log(dato)
            this.listaEmpleados = dato;
        });
    }

    public eliminarEmpleado(id: number): void {
        this.empleadosService.eliminarEmpleado(id).subscribe({
            next: ((dato) => { console.log(dato) }),
            error: ((error) => { console.log("Ha ocurrido un error", error) }),
            complete: (() => this.obtenerEmpleados())
        });
    }

    public verDetalles(id: number): void {
        this.router.navigate(["/detalles", id]);
    }

    public actualizarDatos(id: number): void {
        this.router.navigate(["/actualizar", id]);
    }
}