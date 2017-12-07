import { Component, OnInit } from '@angular/core';
import {EmailValidator} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  Paises: String [];
  Phone: Boolean;
  Pais: String;
  Telefono: number;
  Clases: String [];
  Clase: String;
  Extencion: number;
  Tipos:String[];
  Tipo: String;
  email:String;
  Email:Boolean;
  Lugares_Residencia: String [];
  Lugar_Residencia:String;
  Calle:String;
  NE:Number;
  NI:Number;
  Colonia:String;
  CodigoP:number;
  Estado:String;
  Ciudad:String
  Ciudades:String[];
  Tipo_Domicios:String[];
  Tipo_Domi:String;
  Tipo_Calles:String[];
  Tipo_Calle:String;
  Referencia:String;
  Edificio:String;
  Datos:Boolean;


  constructor(private router: Router) {
    this.Lugares_Residencia=['MARTINICA',
    'MAURICIO',
    'MAURITANIA',
    'MAYOTTE',
    'MEXICO',
    'MICRONESIA',
    'MOLDOVA',
    'MONACO',
    'MONGOLIA',
    'MONTSERRAT',
    'MOZAMBIQUE',
    'MYANMAR'];
    this.Referencia='';
    this.Edificio='';
    this.Lugar_Residencia='Mexico';
    this.Calle='PRIV CODORNIZ OTE ';
    this.NE=68;
    this.Colonia='CD GRANJA';
    this.CodigoP=45010;
    this.Estado='JALISCO';
    this.Ciudades=['ACATIC',
      'ACATLAN DE JUAREZ',
      'AHUALULCO DE MERCADO',
      'AJIJIC',
      'AMACUECA',
      'AMATITAN',
      'AMECA',
      'COLOTLAN',
      'ZAPOPAN'
    ];
    this.Ciudad='ZAPOPAN';
    this.Tipo_Domicios=['Particular',
    'Trabajo',
    'Familiar'];
    this.Tipo_Domi='Familiar';
    this.Tipo_Calles=['PLAZA',
    'PLAZUELA',
    'PRIVADA',
    'PROLONGACION',
    'RINCONADA'];
    this.Tipo_Calle='PRIVADA';
    this.Paises=['Benin',
      'Botswana',
      'Burkina Faso',
      'Burundi',
      'Camerun',
      'Cape Verde',
      'Chad',
      'Comoros',
      'Congo',
      'Costa de Marfíl',
      'Djibouti',
      'Egipto',
      'Eritrea',
      'Mexico'];

    this.Clases = ['Fijo',
      'Celular',
      'Nextel',
      'Fax'];
    this.Clase = 'Celular';
    this.Tipos = ['Particular',
      'Trabajo',
      'Familiar'];
    this.Tipo = 'Particular';
    this.Phone=false;
    this.Pais= 'Mexico';
    this.Telefono=3331174475;
    this.email= 'luis.gerardo.09@hotmail.com';
    this.Email= false;
    this.Datos=false;
  }

  ngOnInit() {
  }

  ChangeB(): void {
    this.Phone=true;
  }
  ChangeD(): void {
    this.Datos=true;
  }
  ChangeE(): void {
    this.Email=true;
  }

  Guardar(): void {
    this.Phone=false;
  }

  Cancelar():void {
    this.Tipo = 'Particular';
    this.Phone=false;
    this.Pais= 'Mexico';
    this.Telefono=3331174475;
    this.Clase = 'Celular';
  }
  GuardarE(): void {
    this.Email=false;
  }

  CancelarE():void {

    this.Email=false;
    this.email = 'luis.gerardo.09@hotmail.com';
  }

  GuardarD(): void {
    this.Datos=false;
  }

  CancelarD():void {

    this.Datos=false;
    this.Referencia='';
    this.Edificio='';
    this.Lugar_Residencia='Mexico';
    this.Calle='PRIV CODORNIZ OTE ';
    this.NE=68;
    this.Colonia='CD GRANJA';
    this.CodigoP=45010;
    this.Estado='JALISCO';
    this.Ciudad='ZAPOPAN';
    this.Tipo_Domi='Familiar';
    this.Tipo_Calle='PRIVADA';
    this.Clase = 'Celular';

  }

  Con(): void {
    this.router.navigateByUrl('/servicios');
  }

}
