import { Component, OnInit } from '@angular/core';
import { Table} from "../Table";
import { Asignatura} from "../Asignatura";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  Tables:Table[];
  Asignaturas:Asignatura[];
  Type:String;
  Tipes:String[];
  Ca:String;
  Bol:boolean;
  constructor() {
    // this.Tables = [
    //   new Table('PROYECTO UNIVERSITARIO PERSONAL', 'I	SC - SABERES COMPLEMENTARIOS',	'Primavera 2016',	8, 'Ordinario'),
    //   new Table('INTERCULTURALIDAD',	'CU - EJE DE DESAFIOS ETICOS CONTEMPORANEOS',	'Primavera 2017',	8,	'Ordinario'),
    //   new Table('INFORMACION FINANCIERA',	'SP - EJE DE NEGOCIOS',	'Primavera 2017',	9,	'Ordinario'),
    //   new Table('CONTEXTO HISTORICO SOCIAL',	'CU - CURRICULUM UNIVERSITARIO',	'Primavera 2017',	7,	'Ordinario'),
    //   new Table('MATEMATICAS DISCRETAS',	'SC - SABERES COMPLEMENTARIOS',	'Primavera 2016',	8,	'Ordinario'),
    // ];
    this.Tipes = ['IES2017 - INGENIERIA EN EMPRESAS DE SERVICIO - ACTIVO', '1LI - PROGRAMA DE CERTIFICACIONES DE INGLES - BAJA'];
    this.Tables = [{ Nombre:'PROYECTO UNIVERSITARIO PERSONAL',
      Area: 'I	SC - SABERES COMPLEMENTARIOS',
      Periodos: 'Primavera 2016',
      Calificacion: 8,
      Tipo:'Odinario'},{ Nombre:'INTERCULTURALIDAD',
      Area: 'CU - EJE DE DESAFIOS ETICOS CONTEMPORANEOS',
      Periodos: 'Primavera 2017',
      Calificacion: 8,
      Tipo:'Odinario'},
      { Nombre:'INFORMACION FINANCIERA',
        Area: 'SP - EJE DE NEGOCIOS',
        Periodos: 'Primavera 2017',
        Calificacion: 9,
        Tipo:'Odinario'},
      { Nombre:'CONTEXTO HISTORICO SOCIAL',
        Area: 'CU - CURRICULUM UNIVERSITARIO',
        Periodos: 'Primavera 2017',
        Calificacion: 7,
        Tipo:'Odinario'},
      { Nombre:'MATEMATICAS DISCRETAS',
        Area: 'SC - SABERES COMPLEMENTARIOS',
        Periodos: 'Primavera 2016',
        Calificacion: 8,
        Tipo:'Odinario'},{ Nombre:'PROBABILIDAD Y ESTADISTICA',
        Area: 'SP - EJE DE CIENCIAS BASICAS',
        Periodos: 'Primavera 2017',
        Calificacion: 7,
        Tipo:'Odinario'},
      { Nombre:'MANEJO DE INFORMACION Y DATOS NUMERICOS',
        Area: 'CU - CURRICULUM UNIVERSITARIO',
        Periodos: 'Primavera 2016',
        Calificacion: 9,
        Tipo:'Odinario'},
      { Nombre:'COMUNICACION ORAL Y ESCRITA',
        Area: 'CU - CURRICULUM UNIVERSITARIO',
        Periodos: 'Otoño 2016',
        Calificacion: 9,
        Tipo:'Odinario'},


      { Nombre:'PROYECTO UNIVERSITARIO PERSONAL',
        Area: 'I	SC - SABERES COMPLEMENTARIOS',
        Periodos: 'Primavera 2016',
        Calificacion: 8,
        Tipo:'Odinario'},{ Nombre:'INTERCULTURALIDAD',
        Area: 'CU - EJE DE DESAFIOS ETICOS CONTEMPORANEOS',
        Periodos: 'Primavera 2017',
        Calificacion: 8,
        Tipo:'Odinario'},
      { Nombre:'INFORMACION FINANCIERA',
        Area: 'SP - EJE DE NEGOCIOS',
        Periodos: 'Primavera 2017',
        Calificacion: 9,
        Tipo:'Odinario'},
      { Nombre:'CONTEXTO HISTORICO SOCIAL',
        Area: 'CU - CURRICULUM UNIVERSITARIO',
        Periodos: 'Primavera 2017',
        Calificacion: 7,
        Tipo:'Odinario'},
      { Nombre:'MATEMATICAS DISCRETAS',
        Area: 'SC - SABERES COMPLEMENTARIOS',
        Periodos: 'Primavera 2016',
        Calificacion: 8,
        Tipo:'Odinario'},{ Nombre:'PROBABILIDAD Y ESTADISTICA',
        Area: 'SP - EJE DE CIENCIAS BASICAS',
        Periodos: 'Primavera 2017',
        Calificacion: 7,
        Tipo:'Odinario'},
      { Nombre:'MANEJO DE INFORMACION Y DATOS NUMERICOS',
        Area: 'CU - CURRICULUM UNIVERSITARIO',
        Periodos: 'Primavera 2016',
        Calificacion: 9,
        Tipo:'Odinario'},
      { Nombre:'COMUNICACION ORAL Y ESCRITA',
        Area: 'CU - CURRICULUM UNIVERSITARIO',
        Periodos: 'Otoño 2016',
        Calificacion: 9,
        Tipo:'Odinario'}];

    this.Asignaturas = [{Area:'CURRICULUM UNIVERSITARIO',
    Requeridos:56,
    Aprobados:36,
    Inscritos:8,
    Por:12},{Area:'+ EJE DE DESAFIOS ETICOS CONTEMPORANEOS',
      Requeridos:8,
      Aprobados:4,
      Inscritos:0,
      Por:4},{Area:'SABERES COMPLEMENTARIOS',
      Requeridos:40,
      Aprobados:12,
      Inscritos:0,
      Por:28},{Area:'SABERES PROFESIONALES',
      Requeridos:326,
      Aprobados:106,
      Inscritos:16,
      Por:204},{Area:'CURRICULUM UNIVERSITARIO',
      Requeridos:56,
      Aprobados:36,
      Inscritos:8,
      Por:12},{Area:'+ EJE DE DESAFIOS ETICOS CONTEMPORANEOS',
      Requeridos:8,
      Aprobados:4,
      Inscritos:0,
      Por:4},{Area:'SABERES COMPLEMENTARIOS',
      Requeridos:40,
      Aprobados:12,
      Inscritos:0,
      Por:28},{Area:'SABERES PROFESIONALES',
      Requeridos:326,
      Aprobados:106,
      Inscritos:16,
      Por:204},
      {Area:'CURRICULUM UNIVERSITARIO',
        Requeridos:56,
        Aprobados:36,
        Inscritos:8,
        Por:12},{Area:'+ EJE DE DESAFIOS ETICOS CONTEMPORANEOS',
        Requeridos:8,
        Aprobados:4,
        Inscritos:0,
        Por:4},{Area:'SABERES COMPLEMENTARIOS',
        Requeridos:40,
        Aprobados:12,
        Inscritos:0,
        Por:28},{Area:'SABERES PROFESIONALES',
        Requeridos:326,
        Aprobados:106,
        Inscritos:16,
        Por:204}];

  }

  ngOnInit() {
  }

  Cambio():void {
    if(this.Ca == 'S') {
      this.Bol= true;
    }
    if(this.Ca == 'N') {
      this.Bol = false;
    }
  }
}
