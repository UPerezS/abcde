import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from './../../services/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  constructor(public empleadoService:EmpleadoService) { }

  ngOnInit(): void {
    console.log(this.empleadoService.getEmpleados());
  }

}
