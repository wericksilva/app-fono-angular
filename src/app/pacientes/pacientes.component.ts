import { Component, OnInit } from '@angular/core';
import { Paciente } from './paciente/paciente.model';

@Component({
  selector: 'mt-pacientes',
  templateUrl: './pacientes.component.html'
})
export class PacientesComponent implements OnInit {


  pacientes : Paciente [] = [  {

  
    id: "1",
    nome: "Werick Silva",
    sexo: "Masculino",
    dataNascimento: "27/08/1991",
    caminoImagem: "assets/img/pacientes/werick.jpg",
    peso: 10.0},
    {
    id: "2",
    nome: "Samanta Oliveira",
    sexo: "Feminino",
    dataNascimento: "02/08/1993",
    caminoImagem: "assets/img/pacientes/samy.jpg",
    peso: 10.0}]
  constructor() { }

  ngOnInit() {
  }

}
