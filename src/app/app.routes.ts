import {Routes} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {AboutComponent} from './about/about.component'
import { PacientesComponent } from './pacientes/pacientes.component';
import { PacienteDetalhesComponent } from './pacientes/paciente-detalhes/paciente-detalhes.component';
import { AtividadesComponent } from './pacientes/paciente-detalhes/atividades/atividades.component'
import { CadastroPacientesComponent } from './pacientes/cadastro-pacientes/cadastro-pacientes.component';
import {LoginComponent} from './security/login/login.component'

export const ROUTES: Routes = [

    {path: '', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'about', component: AboutComponent},
    {path:'paciente', component: PacientesComponent},
    {path: 'casdastro', component: CadastroPacientesComponent},
    {path:'paciente/:id', component: PacienteDetalhesComponent,
        children:[
            {path : '', redirectTo: 'atividade', pathMatch: 'full'},
            {path : 'atividade', component: AtividadesComponent}
        ]},

]
