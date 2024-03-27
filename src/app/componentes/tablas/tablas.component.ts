import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicios/servicio.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.scss']
})
export class TablasComponent implements OnInit {

  // variable que almacena estudiantes segun respuesta de api
  public estudiantes: any[] = [];

  // variable que almacena el formulario
  public formulario!: FormGroup

  constructor(private services: ServicioService, private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.consultarDatos()
    this.crearFormulario()
  }

  // metodo para consultar los datos devueltos por api
  consultarDatos() {
    this.services.getData().subscribe((data: any) => {
      this.estudiantes = data.estudiantes_aprobados;
    })
  }

  //metodo para crear formulario 
  crearFormulario() {
    this.formulario = this.formBuilder.group({
      identificacion: ['', [Validators.required, Validators.min(10000000)]]
    })
  }

  //metodo para imprimir resultado de formulario 
  buscar() {
    console.log(this.formulario.value)
  }
}
