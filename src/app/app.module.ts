import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {ROUTES} from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { PacienteComponent } from './pacientes/paciente/paciente.component';
import { PacientesService } from './pacientes/pacientes.service';
import { PacienteDetalhesComponent } from './pacientes/paciente-detalhes/paciente-detalhes.component';
import { AtividadesComponent } from './pacientes/paciente-detalhes/atividades/atividades.component';
import { CadastroAtividadeComponent } from './pacientes/paciente-detalhes/cadastro-atividade/cadastro-atividade.component';
import { AtividadeItemComponent } from './pacientes/paciente-detalhes/atividade-item/atividade-item.component';
import { AvaliacoesComponent } from './pacientes/paciente-detalhes/avaliacoes/avaliacoes.component';
import { CadastroPacientesComponent } from './pacientes/cadastro-pacientes/cadastro-pacientes.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    PacientesComponent,
    PacienteComponent,
    PacienteDetalhesComponent,
    AtividadesComponent,
    CadastroAtividadeComponent,
    AtividadeItemComponent,
    AvaliacoesComponent,
    CadastroPacientesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PacientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
