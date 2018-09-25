import { Component, OnInit } from '@angular/core';
import { Paciente } from './paciente/paciente.model';
import { PacientesService } from './pacientes.service';
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'mt-pacientes',
  templateUrl: './pacientes.component.html'
})
export class PacientesComponent implements OnInit {


  pacientes : Paciente [] 
  pacienteDelete : Paciente;
  errorMessage: string;
  constructor(private pacienteServide: PacientesService,  private router:Router) { }

  ngOnInit() {
    this.pesuisarPacientes();
  }

  pesuisarPacientes(){
    this.pacienteServide.pacientes().subscribe(pacientes => this.pacientes = pacientes)
  }

  deletarPaciente(paciente:Paciente) {
    this.pacienteDelete = paciente;
    console.log('paciente/' + paciente.id);
    
  }

  cancelarDeletarPaciente(){
    this.pacienteDelete =null;
  }


  confirmarDeletarPaciente(){
    if(this.pacienteDelete){
      this.pacienteServide.deletePacientesPorId(this.pacienteDelete.id).subscribe((res: any) => {
        this.pacientes = [];
        this.pesuisarPacientes();
      }, error => this.errorMessage = error);
    }
  }

}
