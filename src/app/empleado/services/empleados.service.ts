import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../../types/empleado.type';

@Injectable({providedIn: 'root'})
export class EmpleadoService {

    //URL que obtiene el listado de todos los empleados del backend
    private baseUrl:string = 'http://localhost:8080/api/v1/empleados'
    constructor(private http: HttpClient) { }
    
    public obtenerListaDeEmpleados():Observable<Empleado[]> {
        return this.http.get<Empleado[]>(`${this.baseUrl}`);
    }

}