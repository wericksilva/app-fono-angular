import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Paciente} from "./paciente/paciente.model"
import {PACIENTE_API} from "../app.api"
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {ErrorHandler} from '../app.error-handler'

@Injectable()
export class PacientesService {

    constructor(private http: Http){

    }
    
    
    pacientes():  Observable<Paciente []> {
     return this.http.get(`${PACIENTE_API}/pacientes`)
        .map(response => response.json())
        ._catch(ErrorHandler.handlerError);
    }

    pacientesPorId(id: string):  Observable<Paciente> {
        return this.http.get(`${PACIENTE_API}/pacientes/${id}`)
        .map(response => response.json())
        ._catch(ErrorHandler.handlerError);
    }

    deletePacientesPorId(id: string):  Observable<Paciente> {
        return this.http.delete(`${PACIENTE_API}/pacientes/${id}`)
        ._catch(ErrorHandler.handlerError);
    }

    cadastrarPaciente(paciente: Paciente):  Observable<Paciente> {
        return this.http.post(`${PACIENTE_API}/pacientes/`, paciente)
        ._catch(ErrorHandler.handlerError);
    }

    
}