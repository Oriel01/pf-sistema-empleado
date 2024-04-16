import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmptyError, Observable } from 'rxjs';
import { Empleado } from '../../types/empleado.type';

@Injectable({providedIn: 'root'})
export class EmpleadoService {

    //URL que obtiene el listado de todos los empleados del backend
    private baseUrl:string = 'http://localhost:8080/api/v1/empleados'
    constructor(private http: HttpClient) { }
    
    //Método para obtener la lista de empleados
    public obtenerListaDeEmpleados():Observable<Empleado[]> {
        return this.http.get<Empleado[]>(`${this.baseUrl}`);
    }

    //Método para obtener empleado por ID
    public obtenerEmpleadoPorId(id: number): Observable<Empleado>{
        return this.http.get<Empleado>(`${this.baseUrl}/${id}`)
    }

    //Método para registrar empleado
    public guardarEmpleado(empleado: Empleado):Observable<Empleado> {
        return this.http.post<Empleado>(`${this.baseUrl}`, empleado)
    }

    //Método para eliminar el empleado
    public eliminarEmpleado(id: number): Observable<Object>{
        return this.http.delete<Object>(`${this.baseUrl}/${id}`);
    }

    //Método para actualizar el empleado
    public actualizarEmpleado(id:number, empleado: Empleado): Observable<Empleado>{
        return this.http.put<Empleado>(`${this.baseUrl}/${id}`, empleado);
    }
}