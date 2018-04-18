import {Routes} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {AboutComponent} from './about/about.component'
import { PacientesComponent } from './pacientes/pacientes.component';
import { PacienteDetalhesComponent } from './paciente-detalhes/paciente-detalhes.component';
import { AtividadesComponent } from './paciente-detalhes/atividades/atividades.component';
import { AvaliacoesComponent } from './paciente-detalhes/avaliacoes/avaliacoes.component';

export const ROUTES: Routes = [

    {path: 'home', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'paciente', component: PacientesComponent},
    {path:'paciente/:id', component: PacienteDetalhesComponent,
        children:[
            {path : '', redirectTo: 'atividade', pathMatch: 'full'},
            {path : 'atividade', component: AtividadesComponent},
            {path : 'avaliacoes', component: AvaliacoesComponent}
        ]},

]
