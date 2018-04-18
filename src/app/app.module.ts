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
import { PacienteDetalhesComponent } from './paciente-detalhes/paciente-detalhes.component';
import { AtividadesComponent } from './paciente-detalhes/atividades/atividades.component';
import { CadastroAtividadeComponent } from './paciente-detalhes/cadastro-atividade/cadastro-atividade.component';
import { AtividadeItemComponent } from './paciente-detalhes/atividade-item/atividade-item.component';
import { AvaliacoesComponent } from './paciente-detalhes/avaliacoes/avaliacoes.component';




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
    AvaliacoesComponent
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
