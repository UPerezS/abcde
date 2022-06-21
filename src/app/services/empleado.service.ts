import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({

  providedIn: 'root'

})

export class EmpleadoService {

  empleados:Empleado[]=[
    {id:1,nombre:'Osmar',puesto:'Director',email:'urielferrary.com',sueldo:50555},
    {id:2,nombre:'Uriel',puesto:'Jefe depto',email:'urielferrary.com',sueldo:40555},
    {id:3,nombre:'Dacko',puesto:'Programador',email:'urielferrary.com',sueldo:40555}
  ];

  constructor() { }
  // Metodos despues

  getEmpleados(){
    return this.empleados;
  }

}
