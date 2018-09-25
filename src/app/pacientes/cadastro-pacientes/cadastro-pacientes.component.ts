import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente/paciente.model';
import { PacientesService } from '../pacientes.service';

@Component({
  selector: 'mt-cadastro-pacientes',
  templateUrl: './cadastro-pacientes.component.html',
  styleUrls: ['./cadastro-pacientes.component.css']
})
export class CadastroPacientesComponent implements OnInit {

  errorMessage: string;

  constructor(private pacienteServide: PacientesService) { }

  ngOnInit() {
  }

  salvarPaciente(paciente: Paciente) {
    this.pacienteServide.cadastrarPaciente(paciente).subscribe((res: any) => {
    }, error => this.errorMessage = error);
    console.log(paciente);
  }

  

}
