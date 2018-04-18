import { Component, OnInit } from '@angular/core';
import { Paciente } from './paciente/paciente.model';
import { PacientesService } from './pacientes.service';

@Component({
  selector: 'mt-pacientes',
  templateUrl: './pacientes.component.html'
})
export class PacientesComponent implements OnInit {


  pacientes : Paciente [] 

    
  constructor(private pacienteServide: PacientesService) { }

  ngOnInit() {

    this.pacienteServide.pacientes().subscribe(pacientes => this.pacientes = pacientes)

  }

}
