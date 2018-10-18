import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule }   from '@angular/forms';
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
import { InputComponent } from './util/input/input.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common'




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
    CadastroPacientesComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [PacientesService, {provide: LocationStrategy, useClass: HashLocationStrategy}, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
