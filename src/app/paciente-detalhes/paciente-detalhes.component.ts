import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../pacientes/pacientes.service';
import { Paciente } from '../pacientes/paciente/paciente.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-paciente-detalhes',
  templateUrl: './paciente-detalhes.component.html'
})
export class PacienteDetalhesComponent implements OnInit {


paciente : Paciente

  constructor(private pacientesService: PacientesService, private route: ActivatedRoute) { }

  ngOnInit() {


    this.pacientesService.pacientesPorId(this.route.snapshot.params['id'])
      .subscribe(paciente => this.paciente = paciente)
  }

}
