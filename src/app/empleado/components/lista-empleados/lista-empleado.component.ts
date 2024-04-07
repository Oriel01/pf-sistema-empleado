import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../../types/empleado.type';
import { EmpleadoService } from '../../services/empleados.service';

@Component({
    selector: 'empleado-lista-empleados',
    templateUrl: 'lista-empleado.component.html'
})

export class ListaEmpleadosComponent implements OnInit{

    public listaEmpleados!: Empleado[];

    constructor(private empleadosService: EmpleadoService) { }

    ngOnInit(): void { 
        this.obtenerEmpleados();
    }
    
    private obtenerEmpleados(): void {
        this.empleadosService.obtenerListaDeEmpleados().subscribe(dato => {
            this.listaEmpleados = dato;
        });
    }
}