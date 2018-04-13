import { Component, OnInit, Input} from '@angular/core';
import { Paciente } from './paciente.model';

@Component({
  selector: 'mt-paciente',
  templateUrl: './paciente.component.html'
})
export class PacienteComponent implements OnInit {


  @Input () paciente:  Paciente


  
  constructor() { }

  ngOnInit() {
  }

}
